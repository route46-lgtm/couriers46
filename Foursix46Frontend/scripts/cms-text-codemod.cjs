/* ─────────────────────────────────────────────────────────────────────────────
   scripts/cms-text-codemod.cjs   (one-off migration helper, safe to re-run)

   Makes the visible text of a page editable from Admin → Site Content.
     • JSX text            →  <Txt k="about.1a2b3c4d">{"Original text"}</Txt>
     • text props / attrs  →  {txt("about.…", "Original text")}
     • content objects     →  title: txt("about.…", "Original text")
   The original wording stays in the code as the default, so the site renders
   exactly as before until something is edited in the CMS.

   Usage: node scripts/cms-text-codemod.cjs <pageId> <file.tsx> [...]
───────────────────────────────────────────────────────────────────────────── */

const ts = require("typescript");
const fs = require("fs");
const crypto = require("crypto");

const ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  reg: "®", copy: "©", trade: "™", mdash: "—", ndash: "–", hellip: "…",
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", pound: "£", middot: "·",
  bull: "•", rarr: "→", larr: "←", times: "×", deg: "°", euro: "€",
};
function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") {
      const n = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return String.fromCodePoint(n);
    }
    const v = ENTITIES[e.toLowerCase()];
    if (v === undefined) throw new Error(`Unknown entity ${m}`);
    return v;
  });
}

/** Same whitespace rules React/TS apply to JSX text. */
function cleanJsxText(raw) {
  const lines = raw.split(/\r\n|\n|\r/);
  let out = "";
  lines.forEach((line, i) => {
    let l = line.replace(/\t/g, " ");
    if (i !== 0) l = l.replace(/^[ ]+/, "");
    if (i !== lines.length - 1) l = l.replace(/[ ]+$/, "");
    if (l) out += (out && i !== 0 ? " " : "") + l;
  });
  return decodeEntities(out);
}

const HAS_WORD = /[A-Za-z]{2}/;
const SKIP_PARENT_TAGS = new Set(["option", "title", "textarea", "style", "script", "text", "tspan", "svg", "Seo", "Helmet", "Txt", "code", "pre"]);
const INTRINSIC_ATTRS = new Set(["placeholder", "alt", "title"]);
const COMPONENT_ATTRS = new Set(["title", "subtitle", "description", "eyebrow", "label", "heading", "text", "badge", "placeholder", "alt", "highlight", "tagline", "caption"]);
const OBJECT_KEYS = new Set(["title", "subtitle", "description", "eyebrow", "label", "heading", "text", "badge", "question", "answer", "detail", "desc", "body", "quote", "note", "sub", "content", "cta", "highlight", "summary", "tagline", "caption", "subheading", "paragraph", "intro", "points", "bullet"]);

function tagName(el) {
  const open = ts.isJsxElement(el) ? el.openingElement : el;
  return open.tagName.getText();
}

function ancestorTags(node) {
  const tags = [];
  for (let p = node.parent; p; p = p.parent) {
    if (ts.isJsxElement(p) || ts.isJsxSelfClosingElement(p)) tags.push(tagName(p));
  }
  return tags;
}

function insideExcluded(node) {
  for (let p = node.parent; p; p = p.parent) {
    if (ts.isCallExpression(p)) {
      const callee = p.expression.getText();
      if (/Schema$/.test(callee) || /^z\./.test(callee) || /toast/.test(callee) || /console\./.test(callee) || /^(useState|setState|set[A-Z]\w*)$/.test(callee)) return true;
    }
    if (ts.isJsxAttribute(p) && ["schemas", "className", "style", "key", "id", "href", "to", "src"].includes(p.name.getText())) return true;
    if ((ts.isJsxElement(p) || ts.isJsxSelfClosingElement(p)) && ["Seo", "Helmet", "svg"].includes(tagName(p))) return true;
    if (ts.isBinaryExpression(p) && [ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken, ts.SyntaxKind.EqualsEqualsToken].includes(p.operatorToken.kind)) return true;
    if (ts.isCaseClause(p)) return true;
  }
  return false;
}

/** Top-level, capitalised function = a component we can add a hook to. */
function topComponent(node, sf) {
  let found = null;
  for (let p = node.parent; p; p = p.parent) {
    if (ts.isFunctionDeclaration(p) && p.parent === sf && p.name && /^[A-Z]/.test(p.name.text)) found = p;
    if ((ts.isArrowFunction(p) || ts.isFunctionExpression(p)) && ts.isVariableDeclaration(p.parent) &&
        p.parent.parent && p.parent.parent.parent && ts.isVariableStatement(p.parent.parent.parent) &&
        p.parent.parent.parent.parent === sf && /^[A-Z]/.test(p.parent.name.getText())) found = p;
  }
  return found;
}

function run(pageId, file) {
  const src = fs.readFileSync(file, "utf8");
  if (src.includes('from "@/content/SiteContentProvider"') && /<Txt k=/.test(src)) {
    console.log(`skip ${file} (already converted)`);
    return;
  }
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = []; // {pos, end, text}
  const hookFns = new Set();
  const seen = new Map();
  let usesTxt = false, usesHook = false;
  const stats = { jsx: 0, attr: 0, obj: 0, arr: 0 };

  const keyFor = (kind, text) => {
    const h = crypto.createHash("sha1").update(kind + "\u0000" + text).digest("hex").slice(0, 8);
    const n = (seen.get(h) || 0) + 1;
    seen.set(h, n);
    return `${pageId}.${h}${n > 1 ? "_" + n : ""}`;
  };

  const visit = (node) => {
    // 1. JSX text
    if (ts.isJsxText(node)) {
      const raw = src.slice(node.pos, node.end);
      const text = cleanJsxText(raw);
      if (HAS_WORD.test(text) && !insideExcluded(node)) {
        const parentTag = ts.isJsxElement(node.parent) ? tagName(node.parent) : "";
        const tags = ancestorTags(node);
        if (!SKIP_PARENT_TAGS.has(parentTag) && !tags.some((t) => SKIP_PARENT_TAGS.has(t))) {
          const k = keyFor("jsx:" + parentTag, text);
          edits.push({ pos: node.pos, end: node.end, text: `<Txt k="${k}">{${JSON.stringify(text)}}</Txt>` });
          usesTxt = true;
          stats.jsx++;
        }
      }
      return;
    }

    const isStr = ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node);
    if (isStr && HAS_WORD.test(node.text) && !insideExcluded(node)) {
      const p = node.parent;
      const comp = topComponent(node, sf);

      // 2. JSX attributes:  title="…"  →  title={txt("…", "…")}
      if (ts.isJsxAttribute(p) && p.initializer === node && comp) {
        const attr = p.name.getText();
        const el = p.parent.parent; // JsxAttributes → opening/self-closing element
        const tag = el.tagName.getText();
        const isComponent = /^[A-Z]/.test(tag);
        if (tag !== "Seo" && tag !== "Txt" && ((isComponent && COMPONENT_ATTRS.has(attr)) || (!isComponent && INTRINSIC_ATTRS.has(attr)))) {
          const text = decodeEntities(node.text);
          const k = keyFor("attr:" + attr, text);
          edits.push({ pos: node.getStart(sf), end: node.end, text: `{txt(${JSON.stringify(k)}, ${JSON.stringify(text)})}` });
          hookFns.add(comp);
          usesHook = true;
          stats.attr++;
        }
      }
      // 3. content objects:  title: "…"  →  title: txt("…", "…")
      else if (ts.isPropertyAssignment(p) && p.initializer === node && comp) {
        const key = p.name.getText().replace(/["']/g, "");
        if (OBJECT_KEYS.has(key)) {
          const k = keyFor("obj:" + key, node.text);
          edits.push({ pos: node.getStart(sf), end: node.end, text: `txt(${JSON.stringify(k)}, ${JSON.stringify(node.text)})` });
          hookFns.add(comp);
          usesHook = true;
          stats.obj++;
        }
      }
      // 4. lists of sentences:  ["Fast collection across the UK", …]
      else if (ts.isArrayLiteralExpression(p) && comp && /^[A-Z0-9£"“]/.test(node.text) && / /.test(node.text) && /[a-z]/.test(node.text)) {
        const k = keyFor("arr", node.text);
        edits.push({ pos: node.getStart(sf), end: node.end, text: `txt(${JSON.stringify(k)}, ${JSON.stringify(node.text)})` });
        hookFns.add(comp);
        usesHook = true;
        stats.arr++;
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  // Hook in each component that uses txt(): first statement of its body.
  for (const fn of hookFns) {
    if (ts.isBlock(fn.body)) {
      edits.push({ pos: fn.body.getStart(sf) + 1, end: fn.body.getStart(sf) + 1, text: "\n  const txt = useText();" });
    } else {
      edits.push({ pos: fn.body.getStart(sf), end: fn.body.getStart(sf), text: "{\n  const txt = useText();\n  return (" });
      edits.push({ pos: fn.body.end, end: fn.body.end, text: ");\n}" });
    }
  }

  // Import after the last import declaration.
  const names = [usesTxt && "Txt", usesHook && "useText"].filter(Boolean);
  if (names.length) {
    const lastImport = [...sf.statements].filter(ts.isImportDeclaration).pop();
    const at = lastImport ? lastImport.end : 0;
    edits.push({ pos: at, end: at, text: `\nimport { ${names.join(", ")} } from "@/content/SiteContentProvider";` });
  }

  edits.sort((a, b) => b.pos - a.pos || b.end - a.end);
  let out = src;
  let lastPos = Infinity;
  for (const e of edits) {
    if (e.end > lastPos) throw new Error(`Overlapping edits in ${file} at ${e.pos}`);
    out = out.slice(0, e.pos) + e.text + out.slice(e.end);
    lastPos = e.pos;
  }
  fs.writeFileSync(file, out);
  console.log(`${file}: ${stats.jsx} text, ${stats.attr} attrs, ${stats.obj} object fields, ${stats.arr} list items; hook in ${hookFns.size} component(s)`);
}

const [pageId, ...files] = process.argv.slice(2);
if (!pageId || !files.length) {
  console.error("usage: node scripts/cms-text-codemod.cjs <pageId> <file.tsx> [...]");
  process.exit(1);
}
files.forEach((f) => run(pageId, f));

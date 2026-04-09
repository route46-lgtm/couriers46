import fs from 'fs';
import path from 'path';

const DIST = path.resolve('dist');
const BASE_URL = 'https://www.route46couriers.co.uk';

const SKIP_ROUTES = ['/admin', '/send-parcel'];

function shouldSkip(route) {
  return SKIP_ROUTES.some(s => route.startsWith(s));
}

function normalisePath(route) {
  return route.endsWith('/') && route !== '/' ? route.slice(0, -1) : route;
}

function extractHydrationData(html) {
  // Pulls the JSON from window.staticRouterHydrationData = JSON.parse('...')
  const match = html.match(/window\.staticRouterHydrationData\s*=\s*JSON\.parse\('([\s\S]*?)'\)/);
  if (!match) return null;
  try {
    const raw = match[1].replace(/\\'/g, "'").replace(/\\n/g, '');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function getPageMeta(hydrationData) {
  if (!hydrationData?.loaderData) return null;
  // loaderData has numeric keys — grab the first one
  const firstKey = Object.keys(hydrationData.loaderData)[0];
  const loaderEntry = hydrationData.loaderData[firstKey];
  // Could be { service }, { location }, { sector }, { post }, etc.
  const entity = loaderEntry?.service || loaderEntry?.location || loaderEntry?.sector || loaderEntry?.post || null;
  if (!entity) return null;
  return {
    title:       entity.seoTitle || entity.name || null,
    description: entity.seoDescription || null,
    ogImage:     entity.ogImage || null,
    noindex:     entity.noindex || false,
  };
}

function injectHeadTags(html, route, meta) {
  const canonical = `${BASE_URL}${route}`;
  const tags = [];

  // Title
  if (meta?.title) {
    tags.push(`  <title>${meta.title} | FourSix46®</title>`);
  }

  // Description
  if (meta?.description) {
    tags.push(`  <meta name="description" content="${meta.description}" />`);
  }

  // Canonical
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[^>]*>/g,
      `<link rel="canonical" href="${canonical}" />`);
  } else {
    tags.push(`  <link rel="canonical" href="${canonical}" />`);
  }

  // OG tags
  if (meta?.title) {
    if (html.includes('property="og:title"')) {
      html = html.replace(/(<meta property="og:title"[^>]*content=")[^"]*(")/,
        `$1${meta.title} | FourSix46®$2`);
    } else {
      tags.push(`  <meta property="og:title" content="${meta.title} | FourSix46®" />`);
    }
  }

  if (meta?.description) {
    if (html.includes('property="og:description"')) {
      html = html.replace(/(<meta property="og:description"[^>]*content=")[^"]*(")/,
        `$1${meta.description}$2`);
    } else {
      tags.push(`  <meta property="og:description" content="${meta.description}" />`);
    }
  }

  if (meta?.ogImage) {
    if (html.includes('property="og:image"')) {
      html = html.replace(/(<meta property="og:image"[^>]*content=")[^"]*(")/,
        `$1${meta.ogImage}$2`);
    } else {
      tags.push(`  <meta property="og:image" content="${meta.ogImage}" />`);
    }
  }

  // OG URL
  if (html.includes('property="og:url"')) {
    html = html.replace(/(<meta property="og:url"[^>]*content=")[^"]*(")/,
      `$1${canonical}$2`);
  } else {
    tags.push(`  <meta property="og:url" content="${canonical}" />`);
  }

  // noindex
  if (meta?.noindex) {
    if (!html.includes('name="robots"')) {
      tags.push(`  <meta name="robots" content="noindex,nofollow" />`);
    }
  }

  if (tags.length > 0) {
    html = html.replace('</head>', tags.join('\n') + '\n</head>');
  }

  return html;
}

function walkDir(dir, base = '') {
  let results = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walkDir(full, `${base}/${entry}`));
    } else if (entry === 'index.html') {
      results.push({ file: full, route: normalisePath(base || '/') });
    }
  }
  return results;
}

const pages = walkDir(DIST);
let injected = 0, skipped = 0;

for (const { file, route } of pages) {
  if (shouldSkip(route)) {
    console.log(`[seo] ⏭  skipped   ${route}`);
    skipped++;
    continue;
  }

  let html = fs.readFileSync(file, 'utf8');
  const hydration = extractHydrationData(html);
  const meta = getPageMeta(hydration);

  html = injectHeadTags(html, route, meta);
  fs.writeFileSync(file, html, 'utf8');

  const label = meta?.title ? `"${meta.title.slice(0, 40)}"` : '(no CMS data — canonical only)';
  console.log(`[seo] ✅ injected  ${route}  →  ${label}`);
  injected++;
}

console.log(`\n[seo] Done — injected:${injected}  skipped:${skipped}  total:${pages.length}`);
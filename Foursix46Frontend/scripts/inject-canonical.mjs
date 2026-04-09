// scripts/inject-seo.mjs
// Post-build SSG SEO injector
// Fixes: title, description, canonical, og:*, twitter:*, preload — for every page in dist/
// Run: node scripts/inject-seo.mjs   (called automatically from "build" script in package.json)

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname  = fileURLToPath(new URL('.', import.meta.url))
const DIST       = join(__dirname, '../dist')
const BASE_URL   = 'https://www.route46couriers.co.uk'

// Routes to skip entirely (no canonical, no SEO injection)
const SKIP_PREFIXES = ['/admin', '/send-parcel', '/pay']

const counts = { injected: 0, replaced: 0, skipped: 0, total: 0 }

// ─── File helpers ────────────────────────────────────────────────────────────

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    e.isDirectory() ? walk(p, out) : e.name.endsWith('.html') && out.push(p)
  }
  return out
}

function routeFrom(file) {
  const rel = relative(DIST, file).replace(/\\/g, '/')
  const r   = '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '')
  return r === '' ? '/' : r
}

// ─── Data extraction from hydration JSON ─────────────────────────────────────
//
// vite-react-ssg writes window.staticRouterHydrationData = JSON.parse('...')
// at the bottom of every SSG page. We pull seoTitle, seoDescription,
// canonicalUrl, ogImage, noindex from that serialised JSON.

function extractField(html, field) {
  const re = new RegExp(`"${field}"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`)
  const m  = html.match(re)
  if (!m) return null
  try   { return JSON.parse(`"${m[1]}"`) }
  catch { return m[1].replace(/\\u003c/g, '<').replace(/\\u003e/g, '>').replace(/\\"/g, '"') }
}

function extractBoolField(html, field) {
  const re = new RegExp(`"${field}"\\s*:\\s*(true|false)`)
  const m  = html.match(re)
  return m ? m[1] === 'true' : false
}

// Grab the first hero image (large, S3 or absolute URL) from the rendered body
function extractHeroImage(html) {
  // Match src on the hero <img> that also carries object-cover / absolute classes
  const m = html.match(
    /<img[^>]+src=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["'][^>]*class=["'][^"']*(?:absolute|object-cover)[^"']*["']/i
  ) || html.match(
    /<img[^>]+class=["'][^"']*(?:absolute|object-cover)[^"']*["'][^>]+src=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i
  )
  return m?.[1] ?? null
}

// ─── Strip Helmet-commented blocks ───────────────────────────────────────────
//
// vite-react-ssg + react-helmet-async sometimes outputs SEO tags wrapped in
// HTML comments instead of live tags, e.g.:
//   <!-- <title>...</title>
//        <meta name="description" content="...">
//        <meta name="author" content="..."> -->
// This function removes those dead comment blocks from <head>.

function stripCommentedSeoBlocks(html) {
  // Any HTML comment block that contains <title> or an SEO <meta> tag
  return html.replace(
    /<!--(?:(?!-->)[\s\S])*?<(?:title|meta[^>]*(?:name|property)\s*=\s*["'](?:description|author|og:|twitter:))[^]*?-->/gi,
    ''
  )
}

// ─── Tag upsert helper ────────────────────────────────────────────────────────

function upsert(html, pattern, tag) {
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', `  ${tag}\n</head>`)
}

function esc(s) { return s?.replace(/"/g, '&quot;') ?? '' }

// ─── Core processor ──────────────────────────────────────────────────────────

function processFile(filePath) {
  const route = routeFrom(filePath)

  if (SKIP_PREFIXES.some(p => route.startsWith(p))) {
    console.log(`[seo] ⏭  skip       ${route}`)
    counts.skipped++
    return
  }

  let html     = readFileSync(filePath, 'utf-8')
  const before = html

  // ── Extract SEO data from hydration JSON ──────────────────────────────
  const seoTitle    = extractField(html, 'seoTitle')       || extractField(html, 'heroTitle')
  const seoDesc     = extractField(html, 'seoDescription')
  const canonicalRaw= extractField(html, 'canonicalUrl')
  const ogImageRaw  = extractField(html, 'ogImage')
  const noindex     = extractBoolField(html, 'noindex')

  const canonical   = canonicalRaw || `${BASE_URL}${route === '/' ? '' : route}`
  const heroImg     = extractHeroImage(html)
  const ogImage     = ogImageRaw || heroImg || `${BASE_URL}/route46logo.png`

  // ── Step 1: Remove Helmet-commented SEO blocks ────────────────────────
  html = stripCommentedSeoBlocks(html)

  // ── Step 2: Title ─────────────────────────────────────────────────────
  if (seoTitle) {
    html = upsert(html, /<title>[^<]*<\/title>/i, `<title>${esc(seoTitle)}</title>`)
  }

  // ── Step 3: Meta description ──────────────────────────────────────────
  if (seoDesc) {
    html = upsert(html,
      /<meta[^>]+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${esc(seoDesc)}">`
    )
  }

  // ── Step 4: Robots ────────────────────────────────────────────────────
  html = upsert(html,
    /<meta[^>]+name=["']robots["'][^>]*>/i,
    noindex
      ? `<meta name="robots" content="noindex,nofollow">`
      : `<meta name="robots" content="index, follow">`
  )

  // ── Step 5: Canonical ─────────────────────────────────────────────────
  html = upsert(html,
    /<link[^>]+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonical}">`
  )

  // ── Step 6: Open Graph ────────────────────────────────────────────────
  if (seoTitle) {
    html = upsert(html,
      /<meta[^>]+property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${esc(seoTitle)}">`
    )
  }
  if (seoDesc) {
    html = upsert(html,
      /<meta[^>]+property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${esc(seoDesc)}">`
    )
  }
  html = upsert(html,
    /<meta[^>]+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonical}">`
  )
  html = upsert(html,
    /<meta[^>]+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${ogImage}">`
  )

  // ── Step 7: Twitter Card ──────────────────────────────────────────────
  if (seoTitle) {
    html = upsert(html,
      /<meta[^>]+name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${esc(seoTitle)}">`
    )
  }
  if (seoDesc) {
    html = upsert(html,
      /<meta[^>]+name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${esc(seoDesc)}">`
    )
  }
  html = upsert(html,
    /<meta[^>]+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${ogImage}">`
  )

  // ── Step 8: Fix <link rel="preload"> to match actual hero image ───────
  // index.html ships with route462.jpeg as a placeholder preload.
  // For SSG pages the real hero is a .webp from S3 — fix it.
  if (heroImg) {
    html = html.replace(
      /<link[^>]+rel=["']preload["'][^>]+as=["']image["'][^>]*>/i,
      `<link rel="preload" as="image" href="${heroImg}" fetchpriority="high">`
    )
  }

  // ── Write back if changed ─────────────────────────────────────────────
  if (html !== before) {
    writeFileSync(filePath, html, 'utf-8')

    const hadCanonical = /<link[^>]+rel=["']canonical["'][^>]*>/i.test(before)
    if (hadCanonical) {
      console.log(`[seo] ✏️  replaced   ${route}${seoTitle ? `  →  "${seoTitle.slice(0, 55)}"` : ''}`)
      counts.replaced++
    } else {
      console.log(`[seo] ✅ injected   ${route}${seoTitle ? `  →  "${seoTitle.slice(0, 55)}"` : ''}`)
      counts.injected++
    }
  } else {
    console.log(`[seo] ✓  no-change  ${route}`)
  }

  counts.total++
}

// ─── Run ─────────────────────────────────────────────────────────────────────

const files     = walk(DIST)
counts.total    = files.length
files.forEach(processFile)

console.log(
  `\n[seo] Done ─── injected: ${counts.injected}  replaced: ${counts.replaced}  skipped: ${counts.skipped}  total: ${counts.total}`
)
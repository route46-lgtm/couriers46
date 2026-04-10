// import { readFileSync, writeFileSync, readdirSync } from 'fs'
// import { join, relative } from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = fileURLToPath(new URL('.', import.meta.url))
// const DIST      = join(__dirname, '../dist')
// const BASE_URL  = 'https://www.route46couriers.co.uk'

// const SKIP_PREFIXES = ['/admin', '/send-parcel', '/pay']
// const counts = { injected: 0, replaced: 0, skipped: 0, noData: 0, total: 0 }

// // ─── File walk ───────────────────────────────────────────────────────────────
// function walk(dir, out = []) {
//   for (const e of readdirSync(dir, { withFileTypes: true })) {
//     const p = join(dir, e.name)
//     e.isDirectory() ? walk(p, out) : e.name.endsWith('.html') && out.push(p)
//   }
//   return out
// }

// function routeFrom(file) {
//   const rel = relative(DIST, file).replace(/\\/g, '/')
//   const r   = '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '')
//   return r === '' ? '/' : r
// }

// // ─── Hydration data extraction ───────────────────────────────────────────────
// //
// // vite-react-ssg injects at bottom of page:
// //   window.staticRouterHydrationData = JSON.parse('...')   ← single-quoted (most common)
// //   window.staticRouterHydrationData = JSON.parse("...")   ← double-quoted (escaped inner JSON)
// //
// // We try BOTH patterns to handle either format robustly.

// function extractHydrationData(html) {
//   let parsed = null

//   // Pattern 1: single-quoted  → JSON.parse('{"key":"val"}')
//   const m1 = html.match(
//     /window\.staticRouterHydrationData\s*=\s*JSON\.parse\('((?:[^'\\]|\\.)*)'\)/s
//   )
//   if (m1) {
//     try { parsed = JSON.parse(m1[1]) } catch (_) {}
//   }

//   // Pattern 2: double-quoted  → JSON.parse("{\"key\":\"val\"}")
//   // Inner double quotes are escaped as \" in the raw HTML
//   if (!parsed) {
//     const m2 = html.match(
//       /window\.staticRouterHydrationData\s*=\s*JSON\.parse\("((?:[^"\\]|\\.)*)"\)/s
//     )
//     if (m2) {
//       // Unescape inner \" → " so we get valid JSON
//       try { parsed = JSON.parse(m2[1].replace(/\\"/g, '"')) } catch (_) {}
//     }
//   }

//   return parsed
// }

// // Recursively find the first object that looks like a page's SEO data
// function findPageSeoData(obj, depth = 0) {
//   if (!obj || typeof obj !== 'object' || Array.isArray(obj) || depth > 8) return null
//   // A page-data object always has seoTitle (or heroTitle) + seoDescription together
//   if ((obj.seoTitle || obj.heroTitle) && obj.seoDescription) return obj
//   for (const v of Object.values(obj)) {
//     const r = findPageSeoData(v, depth + 1)
//     if (r) return r
//   }
//   return null
// }

// // Grab the first absolute-URL hero image rendered in the body
// function extractHeroImage(html) {
//   const m = html.match(
//     /<img[^>]+src=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["'][^>]*class=["'][^"']*(?:absolute|object-cover)[^"']*["']/i
//   ) || html.match(
//     /<img[^>]+class=["'][^"']*(?:absolute|object-cover)[^"']*["'][^>]+src=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i
//   )
//   return m?.[1] ?? null
// }

// // ─── Strip Helmet comment-wrapped SEO blocks ──────────────────────────────────
// // react-helmet-async + vite-react-ssg sometimes wraps injections in HTML comments:
// //   <!-- <title>…</title> <meta name="description" …> <meta name="author" …> -->
// function stripCommentedSeoBlocks(html) {
//   return html.replace(
//     /<!--(?:(?!-->)[\s\S])*?<(?:title|meta[^>]*(?:name|property)\s*=\s*["'](?:description|author|og:|twitter:))[^]*?-->/gi,
//     ''
//   )
// }

// // ─── Tag upsert ───────────────────────────────────────────────────────────────
// function upsert(html, pattern, tag) {
//   return pattern.test(html)
//     ? html.replace(pattern, tag)
//     : html.replace('</head>', `  ${tag}\n</head>`)
// }

// function esc(s) { return (s ?? '').replace(/"/g, '&quot;') }

// // ─── Core processor ───────────────────────────────────────────────────────────
// function processFile(filePath) {
//   const route = routeFrom(filePath)
//   counts.total++

//   if (SKIP_PREFIXES.some(p => route.startsWith(p))) {
//     console.log(`[seo] ⏭  skip       ${route}`)
//     counts.skipped++
//     return
//   }

//   let html     = readFileSync(filePath, 'utf-8')
//   const before = html

//   // ── Extract page data from hydration JSON ─────────────────────────────
//   const hydration = extractHydrationData(html)
//   const pageData  = hydration ? findPageSeoData(hydration) : null

//   if (!pageData) {
//     console.log(`[seo] ⚠️  no-data   ${route}  (no hydration seoTitle found — title left as-is)`)
//     counts.noData++
//     // Still fix canonical and og:url from route path even if no page data
//   }

//   const seoTitle  = pageData?.seoTitle    || pageData?.heroTitle
//   const seoDesc   = pageData?.seoDescription
//   const canonical = pageData?.canonicalUrl || `${BASE_URL}${route === '/' ? '' : route}`
//   const heroImg   = extractHeroImage(html)
//   const ogImage   = pageData?.ogImage      || heroImg || `${BASE_URL}/route46logo.png`
//   const noindex   = pageData?.noindex === true

//   // ── Step 1: Strip commented-out Helmet SEO blocks ─────────────────────
//   html = stripCommentedSeoBlocks(html)

//   // ── Step 2: Title ─────────────────────────────────────────────────────
//   if (seoTitle) {
//     html = upsert(html, /<title>[^<]*<\/title>/i, `<title>${esc(seoTitle)}</title>`)
//   }

//   // ── Step 3: Meta description ──────────────────────────────────────────
//   if (seoDesc) {
//     html = upsert(html,
//       /<meta[^>]+name=["']description["'][^>]*>/i,
//       `<meta name="description" content="${esc(seoDesc)}">`
//     )
//   }

//   // ── Step 4: Robots ────────────────────────────────────────────────────
//   html = upsert(html,
//     /<meta[^>]+name=["']robots["'][^>]*>/i,
//     noindex
//       ? `<meta name="robots" content="noindex,nofollow">`
//       : `<meta name="robots" content="index, follow">`
//   )

//   // ── Step 5: Canonical ─────────────────────────────────────────────────
//   html = upsert(html,
//     /<link[^>]+rel=["']canonical["'][^>]*>/i,
//     `<link rel="canonical" href="${canonical}">`
//   )

//   // ── Step 6: Open Graph ────────────────────────────────────────────────
//   if (seoTitle) {
//     html = upsert(html,
//       /<meta[^>]+property=["']og:title["'][^>]*>/i,
//       `<meta property="og:title" content="${esc(seoTitle)}">`
//     )
//   }
//   if (seoDesc) {
//     html = upsert(html,
//       /<meta[^>]+property=["']og:description["'][^>]*>/i,
//       `<meta property="og:description" content="${esc(seoDesc)}">`
//     )
//   }
//   html = upsert(html,
//     /<meta[^>]+property=["']og:url["'][^>]*>/i,
//     `<meta property="og:url" content="${canonical}">`
//   )
//   html = upsert(html,
//     /<meta[^>]+property=["']og:image["'][^>]*>/i,
//     `<meta property="og:image" content="${ogImage}">`
//   )

//   // ── Step 7: Twitter Card ──────────────────────────────────────────────
//   if (seoTitle) {
//     html = upsert(html,
//       /<meta[^>]+name=["']twitter:title["'][^>]*>/i,
//       `<meta name="twitter:title" content="${esc(seoTitle)}">`
//     )
//   }
//   if (seoDesc) {
//     html = upsert(html,
//       /<meta[^>]+name=["']twitter:description["'][^>]*>/i,
//       `<meta name="twitter:description" content="${esc(seoDesc)}">`
//     )
//   }
//   html = upsert(html,
//     /<meta[^>]+name=["']twitter:image["'][^>]*>/i,
//     `<meta name="twitter:image" content="${ogImage}">`
//   )

//   // ── Step 8: Fix stale preload → real hero image ───────────────────────
//   if (heroImg) {
//     html = html.replace(
//       /<link[^>]+rel=["']preload["'][^>]+as=["']image["'][^>]*>/i,
//       `<link rel="preload" as="image" href="${heroImg}" fetchpriority="high">`
//     )
//   }

//   // ── Write ─────────────────────────────────────────────────────────────
//   if (html !== before) {
//     writeFileSync(filePath, html, 'utf-8')
//     const hadCanonical = /<link[^>]+rel=["']canonical["'][^>]*>/i.test(before)
//     if (hadCanonical) {
//       console.log(`[seo] ✏️  replaced   ${route}${seoTitle ? `\n          title: "${seoTitle.trim()}"` : ''}`)
//       counts.replaced++
//     } else {
//       console.log(`[seo] ✅ injected   ${route}${seoTitle ? `\n          title: "${seoTitle.trim()}"` : ''}`)
//       counts.injected++
//     }
//   } else {
//     console.log(`[seo] ✓  no-change  ${route}`)
//   }
// }

// // ─── Run ─────────────────────────────────────────────────────────────────────
// console.log(`[seo] Scanning: ${DIST}\n`)
// walk(DIST).forEach(processFile)
// console.log(
//   `\n[seo] Done ─── injected:${counts.injected}  replaced:${counts.replaced}  no-data:${counts.noData}  skipped:${counts.skipped}  total:${counts.total}`
// )
// console.log(
//   `\n[seo] TIP: If you see "no-data" for CMS pages, the JSON.parse format changed.\n` +
//   `      Add a console.log(html.slice(html.indexOf('staticRouterHydration'), html.indexOf('</script>', html.indexOf('staticRouterHydration')))) in processFile to inspect the raw script block.`
// )
// scripts/inject-seo.mjs
// scripts/inject-seo.mjs
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST      = join(__dirname, '../dist')
const BASE_URL  = 'https://www.route46couriers.co.uk'

// ─── API base — paste your full base URL here (no trailing slash) ─────────────
const API = 'https://europe-west2-foursix46-production-4a43f.cloudfunctions.net/api/api'
// Endpoints become: ${API}/services, ${API}/services/same-day-courier, etc.

const SKIP = ['/admin', '/send-parcel', '/pay']
const counts = { ok: 0, fallback: 0, skipped: 0, noData: 0, total: 0 }


// ─── Utilities ────────────────────────────────────────────────────────────────
function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    e.isDirectory() ? walk(p, out) : e.name.endsWith('.html') && out.push(p)
  }
  return out
}

function routeFrom(file) {
  const rel = relative(DIST, file).replace(/\\/g, '/')
  if (rel === 'index.html') return '/'
  const r = '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '')
  return r === '' ? '/' : r
}

function esc(s) { return (s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;') }

function fixCanonical(url) {
  if (!url) return null
  return url.replace(/^https?:\/\/(?:www\.)?route46couriers\.co\.uk/, BASE_URL)
}


// ─── Fetch helpers ────────────────────────────────────────────────────────────
async function get(url) {
  try {
    const r = await fetch(url)
    if (!r.ok) { console.error(`  [HTTP ${r.status}] ${url}`); return null }
    return await r.json()
  } catch (e) {
    console.error(`  [FAIL] ${url} — ${e.message}`)
    return null
  }
}

// Unwrap { data: [...] } or plain [...]
function asList(r) {
  if (!r) return []
  if (Array.isArray(r)) return r
  for (const v of Object.values(r)) if (Array.isArray(v)) return v
  return []
}

// Unwrap { data: {...} } or plain item object
function asItem(r) {
  if (!r) return null
  if (r.slug || r.seoTitle || r.heroTitle || r.name) return r
  if (r.data && !Array.isArray(r.data)) return r.data
  return r
}


// ─── Build route → SEO map ────────────────────────────────────────────────────
async function buildMap() {
  const map = new Map()

  // ── 1. Fetch all four slug lists in parallel ─────────────────────────────
  console.log('\n[seo] Fetching slug lists...')
  const [svcsRaw, sctsRaw, locsRaw, blogsRaw] = await Promise.all([
    get(`${API}/services`),
    get(`${API}/sectors`),
    get(`${API}/locations`),
    get(`${API}/blog`),
  ])

  const svcs  = asList(svcsRaw).filter(i => i.slug)
  const scts  = asList(sctsRaw).filter(i => i.slug)
  const locs  = asList(locsRaw).filter(i => i.slug)
  const blogs = asList(blogsRaw).filter(i => i.slug && i.status === 'published')

  console.log(`  services:${svcs.length}  sectors:${scts.length}  locations:${locs.length}  blogs:${blogs.length}`)

  // ── 2. Fetch every individual item for full SEO fields ───────────────────
  console.log('[seo] Fetching individual items...')

  const fetchAll = (type, items) =>
    Promise.all(items.map(i => get(`${API}/${type}/${i.slug}`).then(asItem)))

  const [svcItems, sctItems, locItems, blogItems] = await Promise.all([
    fetchAll('services',  svcs),
    fetchAll('sectors',   scts),
    fetchAll('locations', locs),
    fetchAll('blog',      blogs),
  ])

  // ── 3. Populate map ──────────────────────────────────────────────────────
  const add = (route, item) => {
    if (!item) return
    const entry = {
      seoTitle:    item.seoTitle    || item.heroTitle || item.name  || item.title || null,
      seoDesc:     item.seoDescription || item.description          || null,
      canonical:   fixCanonical(item.canonicalUrl) || `${BASE_URL}${route}`,
      ogImage:     item.ogImage  || item.heroImage  || item.image   || `${BASE_URL}/route46logo.png`,
      noindex:     item.noindex === true,
    }
    if (entry.seoTitle) {
      map.set(route, entry)
      console.log(`  ✔ ${route}`)
      console.log(`      title: "${entry.seoTitle}"`)
      console.log(`      canonical: ${entry.canonical}`)
    } else {
      console.warn(`  ✘ ${route} — item has no seoTitle/heroTitle/name`)
    }
  }

  svcItems.forEach( (item, i) => add(`/services/${svcs[i].slug}`,   item))
  sctItems.forEach( (item, i) => add(`/sectors/${scts[i].slug}`,    item))
  locItems.forEach( (item, i) => add(`/locations/${locs[i].slug}`,  item))
  blogItems.forEach((item, i) => add(`/blog/${blogs[i].slug}`,      item))

  // location × service combo pages
  for (const loc of locs) {
    for (const svc of svcs) {
      const key = `/locations/${loc.slug}/${svc.slug}`
      if (map.has(key)) continue
      const svcEntry = map.get(`/services/${svc.slug}`)
      const locEntry = map.get(`/locations/${loc.slug}`)
      const svcName  = svcEntry?.seoTitle?.split('|')[0].trim() || svc.name || svc.slug
      const locName  = locEntry?.seoTitle?.split('|')[0].trim() || loc.name || loc.slug
      map.set(key, {
        seoTitle:  `${svcName} in ${locName} | Route46 Couriers`,
        seoDesc:   null,
        canonical: `${BASE_URL}${key}`,
        ogImage:   svcEntry?.ogImage || `${BASE_URL}/route46logo.png`,
        noindex:   false,
      })
    }
  }

  console.log(`\n[seo] Map ready — ${map.size} dynamic routes\n`)
  return map
}


// ─── HTML manipulation ────────────────────────────────────────────────────────
function strip(html) {
  return html
    // Helmet comment-wrapped blocks
    .replace(/<!--(?:(?!-->)[\s\S])*?<(?:title|meta[^>]*(?:name|property)\s*=\s*["'](?:description|robots|og:|twitter:))[^]*?-->/gi, '')
    // Individual SEO tags — ALL occurrences
    .replace(/<title[^>]*>[^<]*<\/title>/gi, '')
    .replace(/<meta[^>]+name=["']description["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+name=["']robots["'][^>]*\/?>/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+property=["']og:title["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+property=["']og:description["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+property=["']og:url["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+property=["']og:image["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+name=["']twitter:title["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+name=["']twitter:description["'][^>]*\/?>/gi, '')
    .replace(/<meta[^>]+name=["']twitter:image["'][^>]*\/?>/gi, '')
    .replace(/\n{3,}/g, '\n\n')
}

function buildBlock({ seoTitle, seoDesc, canonical, ogImage, noindex }) {
  return [
    seoTitle ? `  <title>${esc(seoTitle)}</title>` : '',
    seoDesc  ? `  <meta name="description" content="${esc(seoDesc)}">` : '',
    `  <meta name="robots" content="${noindex ? 'noindex,nofollow' : 'index, follow'}">`,
    `  <link rel="canonical" href="${canonical}">`,
    seoTitle ? `  <meta property="og:title" content="${esc(seoTitle)}">` : '',
    seoDesc  ? `  <meta property="og:description" content="${esc(seoDesc)}">` : '',
    `  <meta property="og:url" content="${canonical}">`,
    `  <meta property="og:image" content="${ogImage}">`,
    seoTitle ? `  <meta name="twitter:title" content="${esc(seoTitle)}">` : '',
    seoDesc  ? `  <meta name="twitter:description" content="${esc(seoDesc)}">` : '',
    `  <meta name="twitter:image" content="${ogImage}">`,
  ].filter(Boolean).join('\n')
}

// Insert right after <meta name="viewport"> — correct position in <head>
function inject(html, block) {
  const vp = html.match(/<meta[^>]+name=["']viewport["'][^>]*>/i)
  if (vp) {
    const idx = html.indexOf(vp[0]) + vp[0].length
    return html.slice(0, idx) + '\n' + block + html.slice(idx)
  }
  return html.replace(/(<head[^>]*>)/i, `$1\n${block}`)
}


// ─── Process one HTML file ────────────────────────────────────────────────────
function processFile(filePath, map) {
  const route = routeFrom(filePath)
  counts.total++

  if (SKIP.some(p => route.startsWith(p))) {
    console.log(`⏭  skip     ${route}`)
    counts.skipped++
    return
  }

  let html = readFileSync(filePath, 'utf-8')

  // ── Resolve SEO data ───────────────────────────────────────────────────
  let entry = map.get(route)
  let src   = 'api'

  if (!entry) {
    // Fallback: read existing <title> + <meta description> from the HTML itself
    const titleM = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    const descM  = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
                || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)

    if (titleM) {
      entry = {
        seoTitle:  titleM[1].trim(),
        seoDesc:   descM ? descM[1].trim() : null,
        canonical: `${BASE_URL}${route === '/' ? '' : route}`,
        ogImage:   `${BASE_URL}/route46logo.png`,
        noindex:   false,
      }
      src = 'html-fallback'
    } else {
      console.log(`⚠️  no-data  ${route}`)
      counts.noData++
      return
    }
  }

  // ── Strip old, inject fresh ────────────────────────────────────────────
  const before = html
  html = inject(strip(html), buildBlock(entry))

  if (html !== before) {
    writeFileSync(filePath, html, 'utf-8')
    console.log(`✅ ${src === 'api' ? 'API    ' : 'FALLBK '} ${route}`)
    console.log(`       "${entry.seoTitle}"`)
    console.log(`        ${entry.canonical}`)
    src === 'api' ? counts.ok++ : counts.fallback++
  } else {
    console.log(`✓  unchanged ${route}`)
  }
}


// ─── Run ──────────────────────────────────────────────────────────────────────
console.log(`\n[seo] Scanning dist: ${DIST}`)
console.log(`[seo] API base:      ${API}\n`)

buildMap().then(map => {
  walk(DIST).forEach(f => processFile(f, map))
  console.log(`\n[seo] Done — api:${counts.ok}  fallback:${counts.fallback}  no-data:${counts.noData}  skipped:${counts.skipped}  total:${counts.total}\n`)
})
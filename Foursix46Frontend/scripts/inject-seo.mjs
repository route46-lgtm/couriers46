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
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST      = join(__dirname, '../dist')
const BASE_URL  = 'https://www.route46couriers.co.uk'
const API_URL   = process.env.VITE_API_URL || ''

const SKIP_PREFIXES = ['/admin', '/send-parcel', '/pay']
const counts = { injected: 0, replaced: 0, skipped: 0, noData: 0, total: 0 }


// ─── File walk ────────────────────────────────────────────────────────────────
function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    e.isDirectory() ? walk(p, out) : e.name.endsWith('.html') && out.push(p)
  }
  return out
}


// ─── routeFrom ────────────────────────────────────────────────────────────────
// FIX: bare 'index.html' at dist root produced '/index' with the old regex.
function routeFrom(file) {
  const rel = relative(DIST, file).replace(/\\/g, '/')
  if (rel === 'index.html') return '/'
  const r = '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '')
  return r === '' ? '/' : r
}


// ─── API route map ────────────────────────────────────────────────────────────
async function buildRouteMap() {
  const map = new Map()

  if (!API_URL) {
    console.warn('[seo] ⚠️  VITE_API_URL not set — dynamic-route SEO will show as no-data.')
    return map
  }

  const safeFetch = async (url) => {
    try {
      const res = await fetch(url)
      if (!res.ok) { console.warn(`[seo] API ${url} → HTTP ${res.status}`); return [] }
      const json = await res.json()
      return json?.data ?? json ?? []
    } catch (e) {
      console.warn(`[seo] fetch failed: ${url} —`, e.message)
      return []
    }
  }

  const [rawSvcs, rawScts, rawLocs, rawBlgs] = await Promise.all([
    safeFetch(`${API_URL}/api/services`),
    safeFetch(`${API_URL}/api/sectors`),
    safeFetch(`${API_URL}/api/locations`),
    safeFetch(`${API_URL}/api/blog`),
  ])

  const normalize = (r) =>
    Array.isArray(r?.data) ? r.data : Array.isArray(r) ? r : []

  const svcs = normalize(rawSvcs)
  const scts = normalize(rawScts)
  const locs = normalize(rawLocs)
  const blgs = normalize(rawBlgs).filter((b) => b.status === 'published' && b.slug)

  const addItems = (items, prefix) => {
    for (const item of items) {
      if (!item.slug) continue
      map.set(`${prefix}/${item.slug}`, {
        seoTitle:       item.seoTitle       || item.heroTitle    || item.title       || null,
        seoDescription: item.seoDescription || item.description                      || null,
        noindex:        item.noindex === true,
        ogImage:        item.ogImage        || item.image                             || null,
        canonicalUrl:   item.canonicalUrl                                             || null,
      })
    }
  }

  addItems(svcs, '/services')
  addItems(scts, '/sectors')
  addItems(locs, '/locations')
  addItems(blgs, '/blog')

  // location × service combos
  for (const loc of locs) {
    for (const svc of svcs) {
      const key = `/locations/${loc.slug}/${svc.slug}`
      if (!map.has(key)) {
        map.set(key, {
          seoTitle:       `${svc.title || svc.slug} in ${loc.title || loc.slug} | Route46 Couriers`,
          seoDescription: null,
          noindex:        false,
          ogImage:        null,
          canonicalUrl:   null,
        })
      }
    }
  }

  console.log(`[seo] API route map built: ${map.size} dynamic routes\n`)
  return map
}


// ─── Hydration data extraction ────────────────────────────────────────────────
// FIX: vite-react-ssg now uses window.__staticRouterHydrationData (double
// underscores). (?:__)?  makes the prefix optional so both forms are matched.
function extractHydrationData(html) {
  let parsed = null

  // Pattern 1: single-quoted
  const m1 = html.match(
    /window\.(?:__)?staticRouterHydrationData\s*=\s*JSON\.parse\('((?:[^'\\]|\\.)*)'\)/s
  )
  if (m1) {
    try { parsed = JSON.parse(m1[1]) } catch (_) {}
  }

  // Pattern 2: double-quoted (what vite-react-ssg currently injects)
  if (!parsed) {
    const m2 = html.match(
      /window\.(?:__)?staticRouterHydrationData\s*=\s*JSON\.parse\("((?:[^"\\]|\\.)*)"\)/s
    )
    if (m2) {
      try { parsed = JSON.parse(m2[1].replace(/\\"/g, '"')) } catch (_) {}
    }
  }

  return parsed
}


// Recursively find the first object with seoTitle + seoDescription
function findPageSeoData(obj, depth = 0) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj) || depth > 8) return null
  if ((obj.seoTitle || obj.heroTitle) && obj.seoDescription) return obj
  for (const v of Object.values(obj)) {
    const r = findPageSeoData(v, depth + 1)
    if (r) return r
  }
  return null
}


// ─── FIX: extract existing <title> and <meta name="description"> from HTML ───
// Used as final fallback for static routes (/, /about, /contact, /privacy …)
// so their OG and Twitter tags are always synced — even when no API data exists.
// This also fixes the truncated og:description ("...") that comes from the
// index.html template fallback block: the full description is always in the
// <meta name="description"> tag, so we read that and use it everywhere.
function extractExistingMeta(html) {
  // <title>…</title>
  const titleM = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  const title  = titleM ? titleM[1].trim() : null

  // <meta name="description" content="…"> — attribute order may vary
  const descM =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["'][^>]*>/i)
  const desc = descM ? descM[1].trim() : null

  return { title, desc }
}


// Grab the first absolute-URL hero image in the rendered body
function extractHeroImage(html) {
  const m =
    html.match(
      /<img[^>]+src=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["'][^>]*class=["'][^"']*(?:absolute|object-cover)[^"']*["']/i
    ) ||
    html.match(
      /<img[^>]+class=["'][^"']*(?:absolute|object-cover)[^"']*["'][^>]+src=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i
    )
  return m?.[1] ?? null
}


// Strip Helmet comment-wrapped SEO blocks
function stripCommentedSeoBlocks(html) {
  return html.replace(
    /<!--(?:(?!-->)[\s\S])*?<(?:title|meta[^>]*(?:name|property)\s*=\s*["'](?:description|author|og:|twitter:))[^]*?-->/gi,
    ''
  )
}


// ─── upsertTag ────────────────────────────────────────────────────────────────
// FIX: removes ALL matching tags globally (not just the first) before inserting
// one clean copy before </head>. Prevents stale duplicate tags.
function upsertTag(html, pattern, tag) {
  const globalPattern = new RegExp(pattern.source, 'gi')
  const stripped = html.replace(globalPattern, '')
  return stripped.replace('</head>', `  ${tag}\n</head>`)
}

function esc(s) { return (s ?? '').replace(/"/g, '&quot;') }


// ─── Core processor ───────────────────────────────────────────────────────────
function processFile(filePath, routeMap) {
  const route = routeFrom(filePath)
  counts.total++

  if (SKIP_PREFIXES.some((p) => route.startsWith(p))) {
    console.log(`[seo] ⏭  skip       ${route}`)
    counts.skipped++
    return
  }

  let html     = readFileSync(filePath, 'utf-8')
  const before = html

  // ── Resolve SEO data: API → hydration → existing HTML ─────────────────
  const apiData        = routeMap.get(route)
  const hydration      = extractHydrationData(html)
  const hydraPage      = hydration ? findPageSeoData(hydration) : null
  // FIX: always read the existing <title>/<meta description> as final fallback.
  // This ensures static pages (/, /about etc.) keep their OG tags in sync with
  // the real <title> and fixes truncated og:description in the template block.
  const { title: htmlTitle, desc: htmlDesc } = extractExistingMeta(html)

  const seoTitle  = apiData?.seoTitle       || hydraPage?.seoTitle       || hydraPage?.heroTitle || htmlTitle || null
  const seoDesc   = apiData?.seoDescription || hydraPage?.seoDescription                         || htmlDesc  || null
  const canonical = apiData?.canonicalUrl   || hydraPage?.canonicalUrl
    || `${BASE_URL}${route === '/' ? '' : route}`
  const heroImg   = extractHeroImage(html)
  const ogImage   = apiData?.ogImage || hydraPage?.ogImage || heroImg || `${BASE_URL}/route46logo.png`
  const noindex   = apiData?.noindex === true || hydraPage?.noindex === true

  const sourceLabel = apiData ? 'api' : hydraPage ? 'hydration' : htmlTitle ? 'html-fallback' : 'none'

  if (!seoTitle) {
    console.log(`[seo] ⚠️  no-data   ${route}  (no seoTitle anywhere — title unchanged)`)
    counts.noData++
  }

  // ── Step 1: Strip commented-out Helmet SEO blocks ─────────────────────
  html = stripCommentedSeoBlocks(html)

  // ── Step 2: Title — strip ALL existing, insert one ────────────────────
  if (seoTitle) {
    html = html.replace(/<title[^>]*>[^<]*<\/title>/gi, '')
    html = html.replace('</head>', `  <title>${esc(seoTitle)}</title>\n</head>`)
  }

  // ── Step 3: Meta description ──────────────────────────────────────────
  if (seoDesc) {
    html = upsertTag(html,
      /<meta[^>]+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${esc(seoDesc)}">`
    )
  }

  // ── Step 4: Robots ────────────────────────────────────────────────────
  html = upsertTag(html,
    /<meta[^>]+name=["']robots["'][^>]*>/i,
    noindex
      ? `<meta name="robots" content="noindex,nofollow">`
      : `<meta name="robots" content="index, follow">`
  )

  // ── Step 5: Canonical ─────────────────────────────────────────────────
  html = upsertTag(html,
    /<link[^>]+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonical}">`
  )

  // ── Step 6: Open Graph ────────────────────────────────────────────────
  if (seoTitle) {
    html = upsertTag(html,
      /<meta[^>]+property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${esc(seoTitle)}">`
    )
  }
  if (seoDesc) {
    html = upsertTag(html,
      /<meta[^>]+property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${esc(seoDesc)}">`
    )
  }
  html = upsertTag(html,
    /<meta[^>]+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonical}">`
  )
  html = upsertTag(html,
    /<meta[^>]+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${ogImage}">`
  )

  // ── Step 7: Twitter Card ──────────────────────────────────────────────
  if (seoTitle) {
    html = upsertTag(html,
      /<meta[^>]+name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${esc(seoTitle)}">`
    )
  }
  if (seoDesc) {
    html = upsertTag(html,
      /<meta[^>]+name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${esc(seoDesc)}">`
    )
  }
  html = upsertTag(html,
    /<meta[^>]+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${ogImage}">`
  )

  // ── Step 8: Fix stale preload → real hero image ───────────────────────
  if (heroImg) {
    html = html.replace(
      /<link[^>]+rel=["']preload["'][^>]+as=["']image["'][^>]*>/i,
      `<link rel="preload" as="image" href="${heroImg}" fetchpriority="high">`
    )
  }

  // ── Write ─────────────────────────────────────────────────────────────
  if (html !== before) {
    writeFileSync(filePath, html, 'utf-8')
    const hadCanonical = /<link[^>]+rel=["']canonical["'][^>]*>/i.test(before)
    if (hadCanonical) {
      console.log(`[seo] ✏️  replaced   ${route}  [${sourceLabel}]${seoTitle ? `\n          title: "${seoTitle.trim()}"` : ''}`)
      counts.replaced++
    } else {
      console.log(`[seo] ✅ injected   ${route}  [${sourceLabel}]${seoTitle ? `\n          title: "${seoTitle.trim()}"` : ''}`)
      counts.injected++
    }
  } else {
    console.log(`[seo] ✓  no-change  ${route}`)
  }
}


// ─── Run ──────────────────────────────────────────────────────────────────────
console.log(`[seo] Scanning: ${DIST}\n`)

buildRouteMap().then((routeMap) => {
  walk(DIST).forEach((f) => processFile(f, routeMap))

  console.log(
    `\n[seo] Done ─── injected:${counts.injected}  replaced:${counts.replaced}  no-data:${counts.noData}  skipped:${counts.skipped}  total:${counts.total}`
  )

  if (counts.noData > 0) {
    console.log(`\n[seo] TIP: ${counts.noData} route(s) had no SEO data.`)
    console.log(`      • This should now be 0 — every page falls back to its own <title>/<meta description>.`)
    console.log(`      • If still > 0, the HTML file has no <title> tag at all.`)
    console.log(`      • VITE_API_URL is currently: ${API_URL || '(not set)'}`)
  }
})
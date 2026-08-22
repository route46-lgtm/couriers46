/* ─────────────────────────────────────────────────────────────────────────────
   scripts/inject-seo.mjs
   Post-build pass over dist/**.html. Runs after `vite-react-ssg build`.

   vite-react-ssg already bakes react-helmet-async output into each page, so
   this pass exists for one reason: CMS-driven routes (services, sectors,
   locations, blog) whose SEO copy is edited in Firestore. For those it pulls
   the live values from the API and overwrites the built-in ones.

   Rules it follows:
     • The page's own rendered tags are the baseline — never replaced with
       generic filler. The API only wins where it actually has a value.
     • noindex wins from EITHER side: the CMS flag, the page's own rendered
       robots meta, or the NOINDEX list below. A page can never be flipped
       back to index,follow by this script.
     • JSON-LD <script> blocks are left completely alone. They come from the
       page components and src/lib/seo.ts.

   Run with: node scripts/inject-seo.mjs
───────────────────────────────────────────────────────────────────────────── */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, relative } from 'path'
import { fileURLToPath } from 'url'
import https from 'https'
import http from 'http'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST      = join(__dirname, '../dist')
const BASE_URL  = 'https://www.route46couriers.co.uk'
const API       = 'https://europe-west2-foursix46-production-4a43f.cloudfunctions.net/api/api'

const ROBOTS_INDEX =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

// Files this script does not touch at all.
const SKIP = ['/admin', '/send-parcel']

// Routes that must never be indexed. The page components already emit noindex
// via <Seo>, but the list is duplicated here as a hard backstop.
const NOINDEX = [
  '/pay',
  '/driver-thank-you',
  '/shipper-thank-you',
  '/contact-thank-you',
  '/booking-thank-you',
  '/get-a-quote/thank-you',
  '/404',
]

const counts = { api: 0, rendered: 0, skipped: 0, noindex: 0, total: 0 }

// ─── HTTP FETCH ──────────────────────────────────────────────────────────────
function get(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http
    const req = mod.get(url, { timeout: 20000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location))
      }
      if (res.statusCode !== 200) {
        res.resume()
        return resolve(null)
      }
      let body = ''
      res.setEncoding('utf8')
      res.on('data', (c) => (body += c))
      res.on('end', () => {
        try {
          resolve(JSON.parse(body))
        } catch {
          resolve(null)
        }
      })
    })
    req.on('error', () => resolve(null))
    req.on('timeout', () => {
      req.destroy()
      resolve(null)
    })
  })
}

// ─── UTILS ───────────────────────────────────────────────────────────────────
function walk(dir, out = []) {
  if (!existsSync(dir)) return out
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

function esc(s) {
  return (s ?? '')
    .replace(/&(?!(amp|quot|lt|gt|apos);)/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function asList(r) {
  if (!r) return []
  if (Array.isArray(r)) return r
  if (r.data && Array.isArray(r.data)) return r.data
  return []
}

function first(re, html) {
  const m = html.match(re)
  return m ? m[1].trim() : undefined
}

// Canonicals stored in the CMS sometimes use the bare apex host or an old
// domain. Everything else on the site canonicalises to BASE_URL, and a
// canonical pointing at a different host splits the indexing signal — so
// rewrite any known host to BASE_URL, and drop a trailing slash.
function normaliseCanonical(url) {
  if (!url) return url
  return url
    .replace(
      /^https?:\/\/(?:www\.)?(?:route46couriers\.co\.uk|couriers\.foursix46\.com)/i,
      BASE_URL,
    )
    .replace(/\/+$/, '')
}

// ─── MAP BUILDER — live SEO copy for CMS-driven routes ───────────────────────
async function buildMap() {
  const map = new Map()
  console.log('\n[INIT] Fetching API data…')

  const [svcsR, sctsR, locsR, blogsR] = await Promise.all([
    get(`${API}/services`),
    get(`${API}/sectors`),
    get(`${API}/locations`),
    get(`${API}/blog`),
  ])

  const svcs  = asList(svcsR).filter((i) => i.slug)
  const scts  = asList(sctsR).filter((i) => i.slug)
  const locs  = asList(locsR).filter((i) => i.slug)
  const blogs = asList(blogsR).filter((i) => i.slug)

  console.log(
    `[DATA] ${svcs.length} services, ${scts.length} sectors, ${locs.length} locations, ${blogs.length} blog posts`,
  )

  const fetchAll = (type, items) =>
    Promise.all(items.map((i) => get(`${API}/${type}/${i.slug}`)))

  const [svcItems, sctItems, locItems, blogItems] = await Promise.all([
    fetchAll('services', svcs),
    fetchAll('sectors', scts),
    fetchAll('locations', locs),
    fetchAll('blog', blogs),
  ])

  const add = (route, raw) => {
    if (!raw) return
    const item = raw.data || raw
    map.set(route, {
      seoTitle: item.seoTitle || item.heroTitle || item.name || item.title || null,
      seoDesc: item.seoDescription || item.heroSubtitle || item.description || null,
      canonical: item.canonicalUrl || null,
      ogImage: item.ogImage || item.heroImage || null,
      noindex: item.noindex === true,
    })
  }

  svcItems.forEach((item, i) => add(`/services/${svcs[i].slug}`, item))
  sctItems.forEach((item, i) => add(`/sectors/${scts[i].slug}`, item))
  locItems.forEach((item, i) => add(`/locations/${locs[i].slug}`, item))
  blogItems.forEach((item, i) => add(`/blog/${blogs[i].slug}`, item))

  // Location × service landing pages — titled from the two parents.
  for (const loc of locs) {
    for (const svc of svcs) {
      const key = `/locations/${loc.slug}/${svc.slug}`
      if (map.has(key)) continue
      map.set(key, {
        seoTitle: `${svc.name || 'Courier Service'} in ${loc.name || 'the UK'} | Route46 Couriers`,
        seoDesc: `${svc.name || 'Same day courier'} in ${loc.name || 'the UK'} — fast collection, secure transport and live tracking from Route46 Couriers.`,
        canonical: null,
        ogImage: null,
        noindex: false,
      })
    }
  }

  return map
}

// ─── PROCESSING ──────────────────────────────────────────────────────────────
function processFile(filePath, map) {
  const route = routeFrom(filePath)
  counts.total++

  if (SKIP.some((p) => route === p || route.startsWith(p + '/'))) {
    console.log(`[-] skip     ${route}`)
    counts.skipped++
    return
  }

  const html = readFileSync(filePath, 'utf-8')

  // What the React page itself rendered — this is the baseline, not a fallback.
  const rendered = {
    title: first(/<title[^>]*>([\s\S]*?)<\/title>/i, html),
    desc:
      first(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i, html) ||
      first(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i, html),
    canonical: first(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i, html),
    ogImage: first(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i, html),
    noindex: /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html),
  }

  const api = map.get(route)
  const source = api ? 'api' : 'rendered'

  const entry = {
    seoTitle: api?.seoTitle || rendered.title || 'Route46 Couriers',
    seoDesc: api?.seoDesc || rendered.desc || '',
    canonical:
      normaliseCanonical(api?.canonical) ||
      normaliseCanonical(rendered.canonical) ||
      `${BASE_URL}${route === '/' ? '' : route}`,
    ogImage: api?.ogImage || rendered.ogImage || `${BASE_URL}/route46logo.png`,
    // noindex wins from any source — never flipped back to index.
    noindex:
      api?.noindex === true ||
      rendered.noindex ||
      NOINDEX.some((p) => route === p || route.startsWith(p + '/')),
  }

  const ogType = route.startsWith('/blog/') ? 'article' : 'website'

  // 1. Strip the tags we are about to re-emit. JSON-LD is untouched.
  const cleaned = html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta[^>]+(?:name|property)=["'](?:description|robots|og:|twitter:)[^>]*\/?>/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*\/?>/gi, '')

  // 2. One canonical SEO block per page.
  const block = `
  <title>${esc(entry.seoTitle)}</title>
  <meta name="description" content="${esc(entry.seoDesc)}">
  <link rel="canonical" href="${entry.canonical}">
  <meta name="robots" content="${entry.noindex ? 'noindex, nofollow' : ROBOTS_INDEX}">
  <meta property="og:site_name" content="Route46 Couriers">
  <meta property="og:locale" content="en_GB">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${esc(entry.seoTitle)}">
  <meta property="og:description" content="${esc(entry.seoDesc)}">
  <meta property="og:url" content="${entry.canonical}">
  <meta property="og:image" content="${entry.ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@Route46Couriers">
  <meta name="twitter:title" content="${esc(entry.seoTitle)}">
  <meta name="twitter:description" content="${esc(entry.seoDesc)}">
  <meta name="twitter:image" content="${entry.ogImage}">
  `

  writeFileSync(filePath, cleaned.replace(/(<head[^>]*>)/i, `$1${block}`), 'utf-8')

  console.log(
    `[${source.padEnd(8)}]${entry.noindex ? ' [noindex]' : '          '} ${route.padEnd(38)} ${entry.seoTitle.slice(0, 45)}`,
  )

  if (entry.noindex) counts.noindex++
  source === 'api' ? counts.api++ : counts.rendered++
}

// ─── RUN ─────────────────────────────────────────────────────────────────────
async function run() {
  if (!existsSync(DIST)) {
    console.error('\n❌ dist not found — run the build first.\n')
    process.exit(1)
  }

  const map = await buildMap()
  const files = walk(DIST)

  console.log(`\n[RUN] Injecting into ${files.length} HTML files…\n`)
  files.forEach((f) => processFile(f, map))

  console.log(
    `\nDONE — ${counts.api} from API, ${counts.rendered} from rendered output, ` +
      `${counts.noindex} noindex, ${counts.skipped} skipped, ${counts.total} total\n`,
  )
}

run().catch((err) => {
  console.error('[FATAL]', err)
  process.exit(1)
})

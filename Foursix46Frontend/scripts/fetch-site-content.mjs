/* ─────────────────────────────────────────────────────────────────────────────
   scripts/fetch-site-content.mjs
   Runs before `vite-react-ssg build`. Downloads the Site Content CMS document
   (GET /api/site-content) into .site-content.json, which vite.config.ts bakes
   into the bundle so the static HTML already contains the CMS text, stats,
   social links and SEO overrides.

   Never fails the build: if the API is down or the endpoint is not deployed
   yet, it writes {} and the site renders with its built-in defaults (the
   browser still fetches the live content after load).
───────────────────────────────────────────────────────────────────────────── */

import { writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const OUT = join(__dirname, '../.site-content.json')

// Same production API inject-seo.mjs uses; VITE_API_URL wins when set.
const API_BASE = (
  process.env.VITE_API_URL ||
  'https://europe-west2-foursix46-production-4a43f.cloudfunctions.net/api'
).replace(/\/+$/, '')

async function run() {
  let data = {}
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 15000)
    const res = await fetch(`${API_BASE}/api/site-content`, { signal: ctrl.signal })
    clearTimeout(timer)
    if (res.ok) {
      const json = await res.json()
      if (json && typeof json === 'object') data = json
      console.log('[site-content] ✅ snapshot fetched')
    } else {
      console.warn(`[site-content] ⚠ HTTP ${res.status} — building with defaults`)
    }
  } catch (err) {
    console.warn(`[site-content] ⚠ ${err?.message || err} — building with defaults`)
  }
  writeFileSync(OUT, JSON.stringify(data), 'utf-8')
}

run()

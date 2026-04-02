/**
 * Route46 Couriers — Consent Manager
 *
 * Listens to CookieYes events and conditionally loads
 * Google Analytics and Meta Pixel only after the user grants consent.
 *
 * CookieYes internal category slugs (fixed regardless of display name):
 *   necessary | functional | analytics | advertisement
 *
 * Consent Mode v2 mapping (per Google docs):
 *   analytics_storage       → analytics
 *   ad_storage              → advertisement
 *   ad_user_data            → advertisement
 *   ad_personalization      → advertisement
 *   functionality_storage   → functional
 *   personalization_storage → functional
 *   security_storage        → necessary (always granted)
 */

const GA_ID        = import.meta.env.VITE_GA_MEASUREMENT_ID;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let gaLoaded    = false;
let pixelLoaded = false;

// ─── Google Analytics ──────────────────────────────────────────────────────
function loadGA() {
  if (gaLoaded || !GA_ID) return;
  gaLoaded = true;

  const s    = document.createElement('script');
  s.async    = true;
  s.src      = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  // gtag is already defined in index.html — just configure the GA property
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });

  console.log('[Consent] ✅ Google Analytics loaded:', GA_ID);
}

// ─── Meta Pixel ────────────────────────────────────────────────────────────
function loadMetaPixel() {
  if (pixelLoaded || !META_PIXEL_ID) return;
  pixelLoaded = true;

  /* eslint-disable */
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init',  META_PIXEL_ID);
  window.fbq('track', 'PageView');

  console.log('[Consent] ✅ Meta Pixel loaded:', META_PIXEL_ID);
}

// ─── Update Consent Mode v2 signals ────────────────────────────────────────
function updateGoogleConsent({ analytics, marketing, functional }) {
  window.gtag('consent', 'update', {
    analytics_storage:       analytics  ? 'granted' : 'denied',
    ad_storage:              marketing  ? 'granted' : 'denied',
    ad_user_data:            marketing  ? 'granted' : 'denied',
    ad_personalization:      marketing  ? 'granted' : 'denied',
    functionality_storage:   functional ? 'granted' : 'denied',
    personalization_storage: functional ? 'granted' : 'denied',
  });
}

// ─── Parse and act on an accepted[] array from CookieYes ───────────────────
function processConsent(accepted = []) {
  const analytics  = accepted.includes('analytics');
  const marketing  = accepted.includes('advertisement'); // CookieYes slug for Marketing
  const functional = accepted.includes('functional');

  updateGoogleConsent({ analytics, marketing, functional });

  if (analytics) loadGA();
  if (marketing) loadMetaPixel();
}

// ─── Read consent already stored in the CookieYes cookie (returning visitors)
// Cookie format: cookieyes-consent=...,analytics:yes,advertisement:no,...
function getStoredConsent() {
  const entry = document.cookie
    .split('; ')
    .find(row => row.startsWith('cookieyes-consent='));

  if (!entry) return null;

  // The cookie value is a comma-separated key:value string
  const pairs = entry.split('=').slice(1).join('=');
  const map   = Object.fromEntries(
    pairs.split(',').map(p => p.split(':'))
  );

  return Object.entries(map)
    .filter(([, v]) => v === 'yes')
    .map(([k]) => k);
}

// ─── Initialise — call once at app startup ─────────────────────────────────
export function initConsentManager() {
  // Returning visitors: consent cookie already set, banner won't show again
  const stored = getStoredConsent();
  if (stored && stored.length > 0) {
    processConsent(stored);
  }

  // New interactions: Accept All / Reject All / Customise saved
  document.addEventListener('cookieyes_consent_update', (event) => {
    const { accepted = [] } = event.detail || {};
    processConsent(accepted);
  });
}
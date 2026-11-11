/* Service worker of the F1 Timeline site (GitHub Pages build). Filled in by scripts/build_site.py.
   It caches only files of this site. Requests to the data APIs (Jolpica, OpenF1, Open-Meteo, Wikipedia) are not touched:
   the app has its own queue, limits and caches for them. */
const VERSION = '52d803d90d';
const SHELL = ["./","assets/app.74126fe061.css","assets/chart.548863aac1.js","assets/app.1a6fc31758.js","assets/more.09af0493d4.js","data/core.a530e58b83.js","assets/exo2-1.f6117b252d.woff2","assets/exo2-2.74c8522938.woff2"];
const SEASONS = ["data/seasons/2016.75bcdc85f0.json","data/seasons/2017.d8b18b1062.json","data/seasons/2018.6501bb63f8.json","data/seasons/2019.a914ff17f8.json","data/seasons/2020.f028e95978.json","data/seasons/2021.bd35e0aecc.json","data/seasons/2022.f23f728793.json","data/seasons/2023.ab657078e2.json","data/seasons/2024.8383abedbc.json","data/seasons/2025.d2800b6f14.json"];
const C_SHELL = 'f1-shell-' + VERSION;
const C_DATA = 'f1-data';
const BASE = new URL('./', self.location).pathname;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(C_SHELL).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('f1-shell-') && k !== C_SHELL) await caches.delete(k);
    const data = await caches.open(C_DATA);
    const keep = new Set(SEASONS.map(u => new URL(u, self.location).href));
    for (const r of await data.keys()) if (!keep.has(r.url)) await data.delete(r);
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) cache.put(req, res.clone());
  return res;
}

async function page(req) {
  const cache = await caches.open(C_SHELL);
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 4000);
    const res = await fetch(req, { signal: ctl.signal });
    clearTimeout(timer);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    // no network: the page as it was last seen, or the home page (the app reads the tab from the address)
    return (await cache.match(req, { ignoreSearch: true })) || (await cache.match(BASE)) || (await cache.match('./')) || Response.error();
  }
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  const rel = url.pathname.slice(BASE.length);
  if (req.mode === 'navigate') { e.respondWith(page(req)); return; }
  if (rel.startsWith('data/seasons/')) { e.respondWith(cacheFirst(req, C_DATA)); return; }
  if (rel.startsWith('assets/') || rel.startsWith('data/core.') || rel.startsWith('icons/') || rel.startsWith('champions/') || rel === 'manifest.webmanifest') {
    e.respondWith(cacheFirst(req, C_SHELL));
  }
});

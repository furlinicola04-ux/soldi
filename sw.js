// Tiene una copia dell'app sul telefono: si apre anche senza rete.
// Quando pubblichi una nuova versione cambia VERSIONE, così il telefono scarica i file nuovi.
const VERSIONE = 'soldi-v4';
const FILE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(FILE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSIONE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // la pagina: prima la rete (così prendi gli aggiornamenti), senza rete la copia salvata
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req)
      .then(r => { const copia = r.clone(); caches.open(VERSIONE).then(c => c.put('./index.html', copia)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }

  // file dell'app e caratteri di Google Fonts: dalla copia salvata, aggiornata in sottofondo
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(VERSIONE).then(async c => {
      const salvato = await c.match(req);
      const rete = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => salvato);
      return salvato || rete;
    }));
  }
});

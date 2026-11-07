// Web app: la pagina (cifrata) si prende sempre fresca dalla rete; senza rete si apre l'ultima scaricata.
const C = "vd-v1";
const SHELL = ["./", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(C.split("-")[0] + "-") && k !== C).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;  // mappe e librerie esterne: niente cache qui
  const page = r.mode === "navigate" || u.pathname.endsWith("/") || u.pathname.endsWith("/index.html");
  if (page) {
    e.respondWith(fetch(r, { cache: "no-store" }).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put("./", cp)); }
      return res;
    }).catch(() => caches.match("./")));
  } else {
    e.respondWith(caches.match(r).then(hit => hit || fetch(r)));
  }
});

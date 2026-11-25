const CACHE_NAME="quran-portal-shell-v1";
const SHELL=["./","./index.html","./assets/css/styles.css","./assets/js/app.js","./assets/images/icon.svg","./manifest.webmanifest"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{const req=event.request,url=new URL(req.url);if(req.method!=="GET"||url.origin!==self.location.origin||url.pathname.includes("/api/"))return;event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy))}return res}).catch(()=>caches.match("./index.html"))))});

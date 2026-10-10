// Basit bir service worker - oyunun çevrimdışı da açılmasını sağlar
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('smdcraft-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json'
        // Eğer başka dosyaların varsa (resim, ses vb.) onları da buraya ekle
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
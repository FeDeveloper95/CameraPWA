self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('camera-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/manifest.json',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

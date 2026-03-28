const CACHE_NAME = 'sdg-alarm-v1';
const urlsToCache = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SCHEDULE_ALARM') {
    const { delay, sdgs, alarmLabel } = event.data;
    setTimeout(() => {
      const sdgNames = {
        1: 'No Poverty', 2: 'Zero Hunger', 3: 'Good Health & Well-being',
        4: 'Quality Education', 5: 'Gender Equality', 6: 'Clean Water & Sanitation',
        7: 'Affordable & Clean Energy', 8: 'Decent Work & Economic Growth',
        9: 'Industry, Innovation & Infrastructure', 10: 'Reduced Inequalities',
        11: 'Sustainable Cities & Communities', 12: 'Responsible Consumption & Production',
        13: 'Climate Action', 14: 'Life Below Water', 15: 'Life on Land',
        16: 'Peace, Justice & Strong Institutions', 17: 'Partnerships for the Goals'
      };
      const sdgList = sdgs.map(n => `SDG ${n}: ${sdgNames[n]}`).join('\n');
      self.registration.showNotification('SDG Recall — Can you name these?', {
        body: sdgList,
        icon: '/icon.png',
        badge: '/icon.png',
        tag: 'sdg-alarm-' + alarmLabel,
        requireInteraction: true,
        vibrate: [300, 100, 300, 100, 300],
        actions: [
          { action: 'got-it', title: 'Got it!' },
          { action: 'reschedule', title: 'Remind later' }
        ]
      });
    }, delay);
  }
});

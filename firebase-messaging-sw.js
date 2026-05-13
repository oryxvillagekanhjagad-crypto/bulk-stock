importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDp_tqtsmeEr3nGJ8D_xZVxLzcQ7fxPDe4",
  authDomain: "bulk-stock-notifications.firebaseapp.com",
  projectId: "bulk-stock-notifications",
  storageBucket: "bulk-stock-notifications.firebasestorage.app",
  messagingSenderId: "479042559644",
  appId: "1:479042559644:web:8a80c65ad479d0a3c81759"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'Bulk Stock', {
    body: body || 'Stock update received',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📦</text></svg>',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    tag: 'bulk-stock'
  });
});

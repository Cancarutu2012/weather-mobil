self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),  // Az üzenet, amit küldünk
    icon: "https://example.com/icon.png",
    badge: "https://example.com/badge.png"
  };

  event.waitUntil(
    self.registration.showNotification('How\'s the weather today?', options)
  );
});

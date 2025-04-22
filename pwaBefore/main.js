// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Register the service worker (it must be at the root of the site or one level up)
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  
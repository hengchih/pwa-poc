importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.routing.registerRoute(
        new RegExp('.*\.json'),
        workbox.strategies.networkFirst()
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
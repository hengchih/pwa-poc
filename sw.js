importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');
if ( !workbox ) {
    console.log("Workbox didn't load.");
    return;
}
workbox.setConfig({ debug: true });
workbox.skipWaiting();
workbox.clientsClaim();

window.addEventListener('beforeinstallprompt', function(event) {
    console.log("before install prompt");
    event.prompt();
});
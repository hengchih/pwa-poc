importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

window.addEventListener('beforeinstallprompt', function(event) {
    console.log("before install prompt");
    event.prompt();
});

if ( workbox ) {
    workbox.setConfig({ debug: true });
    workbox.skipWaiting();
    workbox.clientsClaim();

}else{
    console.log("Workbox didn't load.");
}


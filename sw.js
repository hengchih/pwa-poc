importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if ( workbox ) {
    workbox.setConfig({ debug: true });
    workbox.skipWaiting();
    workbox.clientsClaim();

}else{
    console.log("Workbox didn't load.");
}


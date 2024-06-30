// let cacheData = "opulentV1"

// this.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(cacheData).then((cache) => {
//             cache.addAll([
//                 "static/js/bundle.js",
//                 "static/js/main.chunk.js",
//                 // "static/js/0.chunk.js"
//                 "index.html",
//                 "/",
//             ])
//         })
//     )
// })

this.addEventListener("fetch", (event) => {

    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl)
            })
        )

    }
})


let cacheData = "opulentV1";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                // "/static/js/0.chunk.js" // Uncomment if needed
                "/index.html",
                "/",
                "/favicon.ico",
                "/manifest.json",
                "/css2?family=Luxurious+Script&display=swap",
                "/css2?family=Dosis:wght@300&family=Public+Sans:wght@100&display=swap",
                "/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMl2xMEbKsUPqjm.woff2",
                "/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuFpiJxAcofVotfzbj.woff2",
                "/Imagej3.54a2f95ff8fa4dd93b81.jpg",
                "/ImageexpertImage.4ad49926d5c3d99c0450.png",
                "/Imageos0ylwca9swryeieitg0.jpg",
                "/Imagewhhdrsjz9hwu9fkb0oep.jpg",
                "/Imagegfallczigbouzz5yvwjb.jpg",
                "/Imagegujzpd9p10nenw4bmkrr.jpg",
                "/logo192.png",
                "/static/media/expertImage.4ad49926d5c3d99c0450.png",
                "/static/media/j3.54a2f95ff8fa4dd93b81.jpg",
                // `${process.env.REACT_APP_BACKEND_URL}/api/v1/products?keyword=${keyword}&page=${currentPage}`
            ]);
        })
    );
});

// this.addEventListener("fetch", (event) => {

//     if (!navigator.onLine) {

//         const url = new URL(event.request.url);

//         if (url.pathname.startsWith('/api/v1/products')) {
//             event.respondWith(
//                 caches.open(cacheData).then((cache) => {
//                     return fetch(event.request).then((response) => {
//                         cache.put(event.request, response.clone());
//                         return response;
//                     }).catch(() => {
//                         return caches.match(event.request).then((cachedResponse) => {
//                             return cachedResponse || caches.match('/index.html');
//                         });
//                     });
//                 })
//             );
//         } else {
//             event.respondWith(
//                 caches.match(event.request).then((result) => {
//                     return result || fetch(event.request).catch(() => {
//                         if (event.request.mode === 'navigate') {
//                             return caches.match('/index.html');
//                         }
//                     });
//                 })
//             );
//         }

//     }

// });



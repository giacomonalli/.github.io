'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "be4b3a20ecae8015faacb21016657bc0",
"assets/assets/1_percorso.jpeg": "e281cd5841e11627c1b22dfba100dd49",
"assets/assets/camerino.png": "954a0119573658c481e839eb70daf66c",
"assets/assets/Camerino01.jpg": "47abfee21383c89a60c0c8223c25decb",
"assets/assets/camerino3.png": "74e6d5ad2b054570014f982892758355",
"assets/assets/camerino5.png": "d7de5d0ea92846eaee0f10fa266092ec",
"assets/assets/citta_camerino-min.png": "ae01bd64ac1cbbd508bc2ea29ca32c3d",
"assets/assets/dormire_2.jpeg": "55e2b8b45446fa17330a37dc3cc2692e",
"assets/assets/dormire_3.jpeg": "f6129f4a1fd82940202c8a47a9cc5d7d",
"assets/assets/home-2-min.jpg": "a5b0bf67c9bd3187232d8794c6b3d138",
"assets/assets/homepage.jpeg": "0dc23695d201a1d43438554fabce6220",
"assets/assets/home_.jpg": "6ed48ddf0da9b10a9c2c73fed98e4cfa",
"assets/assets/i.png": "58e5c53f0bcec052af3b18ff655aecc2",
"assets/assets/img1.jpg": "b153874850366ed1cfc80cc26a985d67",
"assets/assets/logo.png": "e0359e747f825e5c93d4c186e93c9967",
"assets/assets/logo2.png": "8cf117e43e2c688d362f327dde08e5d3",
"assets/assets/logo_unicam.png": "ee452935d8e0627922f2101b2bb4b649",
"assets/assets/mangiare.jpeg": "880c6c6136bfb8760ef66a34a79fdc76",
"assets/assets/mappa.png": "7a82dedc89502652d2a9f4b7e3208f86",
"assets/assets/meraviglia.png": "a6625d61e0298278b6326b3131acb93a",
"assets/assets/meraviglia_camerino-min.png": "102f604f8a46dd3e4fa5bb55919c4680",
"assets/assets/olive.jpeg": "42b44c7facb5e8dded293786f0790872",
"assets/assets/ordine.jpeg": "ffe4bf5246b0e083182983f0ba24ec44",
"assets/assets/percorso1-min.jpg": "f8c283093f5ccc50f87f7103a5eee0cd",
"assets/assets/percorso10-min.jpg": "f12609e51baae13d81311d7ff4d8f309",
"assets/assets/percorso11-min.jpg": "2b76de717ee0c230a3d294b7eeca4641",
"assets/assets/percorso12-min.jpg": "15bea94a44d3a7dd49395ce0964e7e39",
"assets/assets/percorso13-min.jpg": "971416c0927d7ea7ef08a9582069fc4a",
"assets/assets/percorso14-min.jpg": "3a4e2a02e010dde8df22efa02b4eed22",
"assets/assets/percorso15-min.jpg": "6778b6f5422773aff45dccd4a99fe040",
"assets/assets/percorso16-min.jpg": "49f68b5377c50fa3d3635d390fd6a703",
"assets/assets/percorso17-min.jpg": "ba92687c117664b8de4f03a923fa4468",
"assets/assets/percorso1_.jpg": "fa84ce566812552365926be3de1288e9",
"assets/assets/percorso2-min.jpg": "1036b2240cc30c36a2d9e1c95623eaf9",
"assets/assets/percorso3-min.jpg": "ef5091ba08688dbc2f8a5431ed5ea3a7",
"assets/assets/percorso4-min.jpg": "a4898d9a581ef0ae0ac69b3549efa2b9",
"assets/assets/percorso5-min.jpg": "6f624ebfb02e0e0ea5c70db33d1ba751",
"assets/assets/percorso6-min.jpg": "3010635267f526ac7a346035c09c0126",
"assets/assets/percorso7-min.jpg": "59938d6f41e7f6fcbb9097f517886a83",
"assets/assets/percorso8-min.jpg": "72018ac5b32cf28836e2b1c016208ea2",
"assets/assets/percorso9-min.jpg": "e69932afade92071afa788cb59405517",
"assets/assets/spiritualita-min.jpg": "30291d9f797b095ed1a1f569abc9bddf",
"assets/assets/spirit_cammino.jpeg": "8fb0e01d2c1fe6e6f851b8e20dd81fb9",
"assets/assets/sprit.jpeg": "cbe5e9f3b035ca51f2adb39cc0cdf853",
"assets/assets/storia-min.jpg": "1109ed38e4e243984f246879f03259a4",
"assets/assets/storia_cappuccini.jpeg": "6636bd30ec9169c2a431cf3116139b4f",
"assets/assets/storia_spirit-min.JPG": "7b90bfc85aa82927f936af1c14e7560c",
"assets/assets/touring.jpeg": "75e2a0d531b49c7c0171e264fe57d8e0",
"assets/assets/Touring_club-min.jpeg": "408aeedc35f266ebc9358f9bb5af3d07",
"assets/assets/Unicam_colore-min.png": "927f6be244c44318aa161af3f11a10a1",
"assets/assets/unicam_logo.png": "6d8255d49105921da943a0ace66a39a0",
"assets/assets/vino.jpeg": "880c6c6136bfb8760ef66a34a79fdc76",
"assets/assets/YOUTUBE-LOGOPNG1.png": "c34bfd2bfb9c3621adcd9fd230cb3741",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/locale/i18n_en.json": "34b8b61d2e56e4c9a63bacf6efc88d28",
"assets/locale/i18n_it.json": "07e44a43c0609375a7f2671e2cd045a6",
"assets/NOTICES": "acfb81765a5fab7024d735c2a5b520f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fbbabb68120202c28e76e0f7ee5ef663",
"/": "fbbabb68120202c28e76e0f7ee5ef663",
"main.dart.js": "5ed39db8a521b1fb59b7bbe10335b8fb",
"manifest.json": "71a68004a43d0fd4ebdd5cb829de3734",
"version.json": "d259f740bf54f01d98b57a71d0214284"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

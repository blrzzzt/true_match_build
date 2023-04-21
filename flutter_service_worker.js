'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e68f7204232703803bef17a8cbbc8ae3",
".git/config": "0fccdd62af948611c63e570d64846e45",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7d500af7571abf1dfbbbf71e6bab5b00",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0cb5a295a5ded1892f607183fcae86d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32cf48cfdff5cfc353fe0cc0704ba066",
".git/logs/refs/heads/master": "32cf48cfdff5cfc353fe0cc0704ba066",
".git/logs/refs/remotes/origin/HEAD": "8aaf2287acbded1269062babb6df477c",
".git/logs/refs/remotes/origin/master": "2d66d452114c16800bc4e4ccd6f005da",
".git/objects/05/832316cbc1da369b61fa8153ba6f8afdf1f70b": "08e9753dbddef0e76f2f801ba9a3a305",
".git/objects/0c/71db8ea57b09e0b87ec93ed7edcd3b86872c38": "c31df3564abdcb26e0d2580cdfd1158d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/2f/098e8b8f3e7c290017faef22aa58fd73db2052": "45eb78bec49da9db974f9fa7d33bdbd8",
".git/objects/34/36f043d6bd16ec05255215f95d4c01bb153eba": "f35138f76b298d8965aeaddfadfb3001",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ca52d2fad2106382b2cceaa2f708fe1ccac1f0": "bff77d4ba2ed958016d45c80ad903154",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/0a5a0ed45f11d5d8e9266371b1cd4bafb4ed78": "3db7d1dba8635ff9103ff14432a6cc41",
".git/objects/5d/fe460a783e14795a4e843b29c160f5ef98ac77": "460b73c87570498eef16715dd2c8b8f3",
".git/objects/64/dd904523bb30115f2d11b9a2e20bea8e354c1e": "637f488c1414af087a0782d4d10243ad",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/84ee8ce2a81289e603b9be09aa07ab3ceb5518": "f8d79c9041eeb0664525100d76d26a24",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/f820028b75b6029a090c16de31007530ec94ab": "7ce10c7b2476aafb7a28dd76a746ce90",
".git/objects/91/e4edb4b472f0b3e812896b6b791ba7886c78fd": "b28e7f89cbecf0dcd24f446655d109c4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/03b7be0fa3ce16be9df7ba4a87a05dc34f3fbd": "01bf51283b067585dfe333ef2f889140",
".git/objects/a8/fe588ca0fbe0db60748f9a2e23cd5ce57e72f4": "0b0ea0e333222efa8aa10b8094dcb7e3",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/b02241ec0a383c86e54b197c2ee2d8ab4442e6": "df8db3498160473d12e6f760b0795dce",
".git/objects/b4/c54e7f3defeb3a96f4fdde01667c59aabc8fad": "54b18270f49ab09ee43ad2bcc470ae59",
".git/objects/bb/9036a0a3a461eecb957ad0280829c69ddaf3c6": "ff500fed304d4779e34236b0950eb970",
".git/objects/d0/79040aec8dfa8ce2cba8a6166faf8448e31471": "7e14bd3189c64b85e6051a8067b16e80",
".git/objects/d0/b755a5e71c25e3aefadbfe9c564aad522813af": "216ddb8c8e3567e4cb6f28fb7af1303e",
".git/objects/d4/17fc8e5ce3c64c3b961b1867204aee020a6d85": "8f5d436ffefe8991f65027a8f5c50c97",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/refs/heads/master": "6526b8216fd1b79d063704abcd0e28ca",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "6526b8216fd1b79d063704abcd0e28ca",
"assets/AssetManifest.json": "944a7b0edad6921ade2ad12fc2f87baf",
"assets/assets/matcher.jpg": "38e8d263cce3bf11923c66d6a56b8bf0",
"assets/assets/me.jpg": "e1a4e41c5200dccb2999fdcaf65845cd",
"assets/assets/trueMatch.png": "e74b67345dfb960a87c21281eded8433",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7c71d0a437328267a81b196fa92e1c29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "ace93db3e3ffa29514e3acb38e0e88df",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "133f95740f4b2272d8ed8f5d71ab2670",
"icons/Icon-512.png": "8ba5ecadc3340c220eee0c8ebaf6442b",
"icons/Icon-maskable-192.png": "133f95740f4b2272d8ed8f5d71ab2670",
"icons/Icon-maskable-512.png": "8ba5ecadc3340c220eee0c8ebaf6442b",
"index.html": "d82055a3e00a445400b9390b60235c76",
"/": "d82055a3e00a445400b9390b60235c76",
"main.dart.js": "02858d182890e9f27daf57fed05e4a54",
"manifest.json": "753b25ca96dfa416d42049357005bfe8",
"version.json": "3ff05017ed6d804d296c293af6d61994"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4dbdecf32d754daba43502758f0185e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7f8640ccfa18958eff87071c9c529f33",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d918a4745a999e201db7cea3432558ff",
".git/logs/refs/heads/main": "77ef816cb375042d71f31055bd524e4b",
".git/logs/refs/remotes/origin/main": "f4e85cec62d88ecbe06c92706fbe4c3d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/a18584e6f017c32b3d64b2647157ea127aadb3": "d3b84ecc2ec015a7726e0798449e44b4",
".git/objects/0b/3921d46896a9045491f8dc496d47ae106f7535": "6c91d9b99f30ab7952c70f028a9d2388",
".git/objects/17/bf6c4c52a08156a9276d858fec052f023b597e": "bd87d33bdb437239b2267d0ba41a1e78",
".git/objects/21/a7667fa03816b06c4198cc49f9523cc4a4e974": "95c2d626f22e8175e7250576fd964322",
".git/objects/25/7be07bbe89a86a112c502114d25e04e3785568": "5289f963741d93ec204d74019eaa6ad0",
".git/objects/2a/645d2a20b9853c54e512c97a8cea1eef0e8dce": "3c40d137cc5fe9ab1c74526a37fda637",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/951835f60def72569e34dbd6fa2040b60c20f3": "58bde891b081394118d41d3bdb6153f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/93eb7d612a35e9f285089f116e0b4a7e0cc683": "52e7282788396a9800c2e5e947cd5d9e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/49/a1eb923139788a6ef4b8a5450678b10f90e635": "bee96abf1dc902e8b0a0fbb16d9040e8",
".git/objects/4f/50801902e7d121d0ad2784aae70ee1c606508e": "e5da7aff5f8ad15f963f9fe988962059",
".git/objects/5b/5279774e833793f067f340b2b2f4044c9f8e32": "0081753b84c828d9283ac4d491ad2ece",
".git/objects/5b/93ba521719dec4ba07ef74c4aa957876cda11b": "a88c5ee6a49c942ff540c8fb6e325dbf",
".git/objects/5e/8fe7c94e0a6068d69feb3929e604b4f42cde63": "ce6971a9a7e7d774470bc23809953a49",
".git/objects/5f/090944eaa6b9be9f3e1719936cf803703219b2": "a4948f50dbb748d9cb380a53183709bc",
".git/objects/67/c51b6e20ddc6f7cdd5bbf87cb9d13c68b3129b": "420277b9eb2662af63fc6c2b9edfd1ec",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/ccac296239ea6218794e16467d0d68deb5ab4e": "b3b21fc577dfd7f92aef0c268b75f481",
".git/objects/6f/24a4cb6d99a84edf7e01c4437fe915d9095220": "b8bf6db36d37025d06104ef31ebeabb3",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/81/05b5230dcce2358f288432eefe636de0404dcf": "86f4e80da706c086a10b2e201a5977f6",
".git/objects/83/8fc0b1ace82138d135ac70077275c296fea0ad": "18e46c1f92e14da332027e47b0a89ccf",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/87/ff0124b15f44e7ce0cad6db92f6d9b221a9442": "6f56beeb29303b376f2f0a6f80624688",
".git/objects/88/9b7d03d0f95ff1338325f2d3be5bf569d14904": "34b649e554bcbed28a37453019c3d237",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/21966ffc4203cbf39e5969685204c5a80c7561": "6787618934c6a1513efadeeb05247065",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/3d65fb99236d19f712ef8969bdb19fb0eccca2": "360c4e634569c43a4cf8d133aa177e1b",
".git/objects/9b/808fbd31b0846e0b2a05c718b4155f5b560c77": "4d3d2b17b8ba1e987f6e1ccb30e12bd4",
".git/objects/a2/1b8ed21e89e4c1efcd96e5aae35ae21eaf7078": "e82328c40c665686c947e086014b893e",
".git/objects/a5/48321af695352444a9f89c590177d13d0fa869": "1296d7c4b4b65dde4674c19ae3620b15",
".git/objects/b0/b3bc0241e8078d39a91897af71ca4dcacbc2a3": "77f313ce1b5de022355d80f378ad9e6e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b8/a44d2db0a18c12d7cf03c3763ef23991c3b5ab": "9007ecebc054d5607b15f4399b9d8979",
".git/objects/ba/4476248c7f5ff22f5e8e61f06d079716de37ee": "2a7452cc1fc29f75e7df82c34a213d82",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c9/ccd5db1543226e62463aa35b361c3c1b1ada0a": "c4ba4aa1865d7df052f506ff628d8a26",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d7/5fc703111ec05ca986e08dd7571a0f55b986de": "848108d4f6d9c4d0a4629bb95dc50b72",
".git/objects/d8/6d271d3c542554720a3fd1ead372fbf6076eea": "21fba939982d9ad905d262fd0f333cf1",
".git/objects/d8/f70c22ddd3d85d783ca818c8b871b48663b18b": "a4f837a20f7835087828e03104a11eec",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e7/1fb7f630e9770a4d07714055de0de53f5a1eea": "4560c7614cccd669046b9dae6b1f6e14",
".git/objects/e9/d1dd81243be6a7fba268cf81c9f4b56f9c0392": "2b7acaa8ea1fc1dfc95bde7679947b71",
".git/objects/ea/a9d618320c15f58414e8800a991eb8a168a3e7": "203d24bd52ab5d660bb61c5e28d67182",
".git/objects/ef/c8da422985346a12a497bc56579bfcd97a35fd": "68741b9b8b19e07665428c3f755281fe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/20a84c5411cbf6f3dd6c358ed77decbdc510ae": "8530935deb18a9d3d2932004676a316c",
".git/objects/f2/ce521bd5b6bb8796a464b36ce5dda1bdaf1a53": "4a5ffb40768b9d63412d2ec4e3db2e84",
".git/objects/f7/d616fd1cf4dfe0dd3fc212ef4becb9bd6e9a86": "a68cd619616ea7a124c9e4002bb5c7bb",
".git/refs/heads/main": "f56d9172f098c47953602ad8eec5eab9",
".git/refs/remotes/origin/main": "f56d9172f098c47953602ad8eec5eab9",
"assets/AssetManifest.bin": "bf9b14d9601b00fee36f35e01aed217a",
"assets/AssetManifest.bin.json": "c5c259abe73878a406a56328d07e27d4",
"assets/AssetManifest.json": "68df4a6ec6667922019cff4fd3915b7e",
"assets/assets/fonts/FiraCode-Bold.ttf": "016bcf67f409675ff98373081ba753dd",
"assets/assets/fonts/FiraCode-Light.ttf": "456f8f2a9dc64ad81c6fb84908aeb751",
"assets/assets/fonts/FiraCode-Regular.ttf": "301dd380625eb548238ae3c39ec9f12b",
"assets/assets/images/app_image1.jpg": "2eda2ef68fe5d15b3584519247c4addd",
"assets/assets/images/app_image2.jpg": "e90abf0a174dec5533849c64e2953fca",
"assets/assets/images/app_image3.jpg": "f57427f870c644828826a9963076eab6",
"assets/assets/images/app_image4.jpg": "eb88b053e22d286aa6481eeceb23dd0d",
"assets/assets/images/cloud-api.png": "f9cbe2cda7626ed15ece095d4a8d6e99",
"assets/assets/images/github.png": "2d14ec84fab050386d811975662cce8a",
"assets/assets/images/linkedin.png": "f2e1d824d4bd16243707d9ae4e5a99e3",
"assets/assets/images/medium.png": "588b396b5ad7d4ea61f3313d8bfc6718",
"assets/assets/images/mobile-development.png": "504aeb8a75f6b2ec0a15d81f6fd1c618",
"assets/assets/images/rocket.png": "daed3f7b2325e2cf08cd4ff7e2b4239e",
"assets/assets/loading_animation.json": "ca788a337e1042a9f5e8b0335d0325ac",
"assets/FontManifest.json": "cd369fbb328ec1834b0386724def8d17",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a8c88c6e3636d6e3a5186966ad6cd404",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "72223b06c708cbdecab9a0904d1ad3fb",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "16c031e266667187b81ce96832880199",
"icons/apple-touch-icon.png": "0284384156cac7fe6a3f72bc3106cf8f",
"icons/icon-192.png": "7c427c54919b9a2a35c1aea91713f864",
"icons/icon-512.png": "46dcf399499aa95b784705ee73da5ebb",
"index.html": "82913da9b27c8b7fd7f1edbd7d8db106",
"/": "82913da9b27c8b7fd7f1edbd7d8db106",
"main.dart.js": "ecebf011dff8636b56617956c27f398e",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

if (!self.define) {
  let e,
    c = {};
  const i = (i, s) => (
    (i = new URL(i + ".js", s).href),
    c[i] ||
      new Promise((c) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = c), document.head.appendChild(e);
        } else (e = i), importScripts(i), c();
      }).then(() => {
        let e = c[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, a) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (c[r]) return;
    let n = {};
    const f = (e) => i(e, r),
      t = { module: { uri: r }, exports: n, require: f };
    c[r] = Promise.all(s.map((e) => t[e] || f(e))).then((e) => (a(...e), n));
  };
}
define(["./workbox-2aa56743"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/1.jpg", revision: "aa40500496225d2fcfd212424fd3e7da" },
        {
          url: "/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",
          revision: "2b4c1ee4fbe3a7cf",
        },
        {
          url: "/_next/static/chunks/218.57a830a2c55ba802.js",
          revision: "57a830a2c55ba802",
        },
        {
          url: "/_next/static/chunks/447-2a57d7169651c349.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/4bd1b696-dc53661a9e7a1ea0.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-c85871f60a722705.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/app/layout-fd3ba4f25c44cfe7.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/app/page-768749e2bbb5034a.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/framework-6b27c2b7aa38af2d.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/main-5fe27f1d5ec611a0.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/main-app-1077fafb4d415640.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/pages/_app-430fec730128923e.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-b9cb49113c311c46.js",
          revision: "xOXZB98ix-DYdrgHrsrK2",
        },
        {
          url: "/_next/static/css/c539ba0220f16dc3.css",
          revision: "c539ba0220f16dc3",
        },
        {
          url: "/_next/static/media/569ce4b8f30dc480-s.p.woff2",
          revision: "ef6cefb32024deac234e82f932a95cbd",
        },
        {
          url: "/_next/static/media/747892c23ea88013-s.woff2",
          revision: "a0761690ccf4441ace5cec893b82d4ab",
        },
        {
          url: "/_next/static/media/8d697b304b401681-s.woff2",
          revision: "cc728f6c0adb04da0dfcb0fc436a8ae5",
        },
        {
          url: "/_next/static/media/93f479601ee12b01-s.p.woff2",
          revision: "da83d5f06d825c5ae65b7cca706cb312",
        },
        {
          url: "/_next/static/media/9610d9e46709d722-s.woff2",
          revision: "7b7c0ef93df188a852344fc272fc096b",
        },
        {
          url: "/_next/static/media/ba015fad6dcf6784-s.woff2",
          revision: "8ea4f719af3312a055caf09f34c89a77",
        },
        {
          url: "/_next/static/xOXZB98ix-DYdrgHrsrK2/_buildManifest.js",
          revision: "f2dfe0787adfd3e4dd8527626cfbd57f",
        },
        {
          url: "/_next/static/xOXZB98ix-DYdrgHrsrK2/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/become-merchant.png",
          revision: "b308d3ef0954e713b08a071361d64d7a",
        },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        {
          url: "/icon-128x128.png",
          revision: "c461c9adec81d4ecea2517214c2780b8",
        },
        {
          url: "/icon-144x144.png",
          revision: "c489027f22d9ca3de8065576d64ffba2",
        },
        {
          url: "/icon-152x152.png",
          revision: "0ebff66a927d11d6a7a1a792e3ea87dd",
        },
        {
          url: "/icon-192x192.png",
          revision: "6dc5f9425b47a4bf4031847584dda9a2",
        },
        {
          url: "/icon-256x256.png",
          revision: "89c7c49c2bc6be6ffc8cf786980f249a",
        },
        {
          url: "/icon-384x384.png",
          revision: "7d737321d6c2f2ad378ce5c3c5cc24ae",
        },
        {
          url: "/icon-48x48.png",
          revision: "d66c3a7c71c64226063b2859abefebe8",
        },
        {
          url: "/icon-512x512.png",
          revision: "85cf06ccf92753a39316963c0828fc40",
        },
        {
          url: "/icon-72x72.png",
          revision: "211312607a995f7f0067d31c7c883ffb",
        },
        {
          url: "/icon-96x96.png",
          revision: "e1de4d3eb6e21f69648f13562f88cc02",
        },
        { url: "/manifest.json", revision: "0c71a521bae18d5c799fad2c15df2ba8" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/offline.html", revision: "c7ef850365ad198c64e14ede4899ded3" },
        { url: "/post.svg", revision: "9c9bbe8fc4e6f7cee1a19c6fa2194093" },
        { url: "/ss.png", revision: "f1b714f8baf8d5c4034e47f7af5d5f35" },
        { url: "/support.svg", revision: "361003c4d7d64ef6aa555042a3e3e36a" },
        {
          url: "/swe-worker-5c72df51bb1f6ee0.js",
          revision: "5a47d90db13bb1309b25bdf7b363570e",
        },
        { url: "/trophy.svg", revision: "1a10f368c048b2d1bac38d64c29b0577" },
        { url: "/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: function (e) {
              return _ref.apply(this, arguments);
            },
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.*\.json$/,
      new e.NetworkFirst({
        cacheName: "next-data-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js|css|html)$/,
      new e.StaleWhileRevalidate({
        cacheName: "static-resources",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      new e.CacheFirst({
        cacheName: "image-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/your-api\.com\/.*$/,
      new e.NetworkFirst({
        cacheName: "api-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/,
      new e.StaleWhileRevalidate({
        cacheName: "general-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 200, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("/offline.html"))
    );
  }
});


/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6069a20055077bcdc24f65506f4ee852"
  },
  {
    "url": "About/index.html",
    "revision": "4835ec0d68710006672820f5e1d139c8"
  },
  {
    "url": "assets/css/0.styles.e33fcdb0.css",
    "revision": "6be922647efb8c65694c6d2fd2ede681"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f8d64ea8.js",
    "revision": "034cf50ea75db8ac9eb0a8c3590f3d75"
  },
  {
    "url": "assets/js/2.72731567.js",
    "revision": "e2638099de13e4bac092c8de1ac9ddc2"
  },
  {
    "url": "assets/js/3.75cd7776.js",
    "revision": "58faf2229b4161201217f2f23dde06a8"
  },
  {
    "url": "assets/js/4.d892ce39.js",
    "revision": "2293c86a2f7571ab5f7edf74e509dcc3"
  },
  {
    "url": "assets/js/5.2dd04340.js",
    "revision": "d113057e5d95a276efed0669638f6541"
  },
  {
    "url": "assets/js/6.95cbbf58.js",
    "revision": "226cd820afdd3670b8bef1a6c5573e54"
  },
  {
    "url": "assets/js/7.fc14adbd.js",
    "revision": "06d874af53ccae634038c8878d4e62fd"
  },
  {
    "url": "assets/js/8.dae4b004.js",
    "revision": "33d2dd1fbd8a5504c55243f9ba437111"
  },
  {
    "url": "assets/js/app.5959fe07.js",
    "revision": "396561b73468c9311c42d6c6850f95f3"
  },
  {
    "url": "Blogs/chart.html",
    "revision": "0382e50f13b49188d59b6021d72d111c"
  },
  {
    "url": "Blogs/cors-and-nginx.html",
    "revision": "dcdfa7b37597c53cf967510910c78114"
  },
  {
    "url": "Blogs/data-visiualization.html",
    "revision": "9ac9d35a93eb1da4173b151ce58a5265"
  },
  {
    "url": "Blogs/vue-skeleton.html",
    "revision": "8f0594099c3facacbc83f4c95c87f4ef"
  },
  {
    "url": "Blogs/webpack.html",
    "revision": "62ecc42bb04f8ed5f7e18184af7d0c33"
  },
  {
    "url": "imgs/logo.png",
    "revision": "17974b193ca7008bab569b62d22077b6"
  },
  {
    "url": "index.html",
    "revision": "bb9043ca0a26644f3bd8bd9f1b2a5459"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

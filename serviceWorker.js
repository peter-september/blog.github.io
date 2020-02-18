const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/blog1.png",
  "/images/blog2.png",
  "/images/blog3.png",
  "/images/blog4.png",
  "/images/blog5.png",
  "/images/blog6.png",
  "/images/blog7.png",
  "/images/blog8.png",
  "/images/blog9.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
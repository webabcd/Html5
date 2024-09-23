/*
 * 这个 worker.js 文件就是需要安装的 service worker
 * 本例用于演示 service worker 在拦截和处理网络请求方面的应用，通过此特性可以实现网络资源的缓存
 * 注：h5 以前的 Application Cache 已经被弃用了，官方建议通过 service worker 实现缓存需求
 *
 * 大概流程：
 * 1、注册指定的 service worker（本例就是这个 worker.js 文件）
 * 2、如果 service worker（本例就是这个 worker.js 文件）没有安装或者发生了变化，则走 install
 * 3、初次安装 service worker 成功后就会走到 activate
 * 4、更新 service worker 成功后则新 service worker 先进入等待状态，等老 service worker 被 terminate 后，新 service worker 才能走到 activate
 *    service worker 被 terminate 有以下几种方式
 *    a) 关闭浏览器一段时间
 *    b) 手动清除（比如 chrome 的话可以通过 chrome://inspect/#service-workers 来手动清除 service worker）
 *    c) 在新 service worker 的 install 的过程中调用 skipWaiting() 强行跳过新 service worker 的等待状态（老 service worker 会被强行 terminate）
 * 5、通过 fetch 拦截请求（拦截范围是在注册是指定的）
 *
 * 注：
 * 1、在 chrome 中可以通过 chrome://inspect/#service-workers 查看已安装的 service worker
 * 2、service worker 必须使用 https 协议（类似 127.0.0.1 的本地 url 例外 ）
 */


// 缓存的名称
var CACHE_NAME = 'v1.0';
// 需要被缓存的文件
var urlsToCache = [
    'js.js',
];

// 通过 navigator.serviceWorker.register() 注册后，浏览器就会安装 service worker，可以通过 install 事件监听
// 注：
// 1、只有当所有指定的文件全部缓存成功时，才说明 worker.js 被安装成功
// 2、worker.js 安装成功后再注册的话，则只有当 worker.js 文件发发生了变化时才会重新安装，才会触发 install 事件
self.addEventListener('install', function(event) {
    console.log("install");

    // 强行跳过新 service worker 的等待状态
    self.skipWaiting();

    // 通过 caches.open() 打开指定名称的缓存，然后通过 return cache.addAll() 指定需要缓存的文件
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});


// 拦截所有请求（拦截范围是在注册是指定的）
self.addEventListener('fetch', function(event) {
    console.log("fetch");

    event.respondWith(
        caches.match(event.request).then(function(response) {
            // 缓存命中，则返回缓存中的数据
            if (response) {
                console.info("from cache", event.request.url);
                return response;
            }

            // 缓存未命中，则通过网络请求返回数据
            console.info("from remote", event.request.url);
            return fetch(event.request);

            // 如果想通过编程的方式将缓存未命中的 url 添加进缓存中，可以参考下面这段代码
            /*
            return fetch(event.request).then(
                function(response) {
                    // 检查一下，如果是无效的响应，则不缓存
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // 克隆一个响应流，然后一个用于缓存，另一个用于返回
                    var responseToCache = response.clone();

                    // 手动将克隆出的响应流添加进缓存
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    // 原始响应流用于返回
                    return response;
                }
            );
            */
        })
    );
});


// 新 service worker 取得控制权时，会触发 activate 事件
// 一般在这里做缓存管理，下面的例子演示了如何清理非白名单的缓存
self.addEventListener('activate', function(event) {
    console.info("activate");

    // 将缓存名称不是 CACHE_NAME 的缓存全部清理掉
    var cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.info("delete cache", cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

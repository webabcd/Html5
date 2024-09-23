/**
 * Fetch API - es6 的异步请求接口
 *
 * 注：
 * 1、fetch() 返回的是 Promise 对象
 * 2、fetch() 的跨域请求遵循 CORS 标准
 *
 * CORS - Cross-origin resource sharing（跨域请求）
 * 所谓的跨域就是协议不同，或者域名不同，或者端口号不同
 * 为了支持跨域请求需要服务端对 response header 做如下配置
 *     Access-Control-Allow-Origin: *       // 配置允许访问的域名（默认无法跨域访问）
 *     Access-Control-Allow-Headers: *      // 配置支持的自定义的 request header
 *     Access-Control-Request-Method: *     // 配置支持的 http method（跨域时默认只支持 head, get, post）
 *     Access-Control-Expose-Headers: *     // 配置有权限获取的 response header（跨域时默认只能获取到 Cache-Control, Content-Language, Content-Type, Expires, Last-Modified, Pragma）
 */

fetch('http://localhost:42858/fetch').then(res => {
    // 可以去控制台看看这个 response 对象具体是啥
    console.log('response:', res);

    // 拿到 http 请求响应的状态码
    const { status, statusText} = res;
    console.log(`status:${status}, statusText:${statusText}`);

    // 拿到 http 请求响应的 header
    console.log("Content-Type:" + res.headers.get('Content-Type'));

    // 获取响应数据，并将其转换为文本数据（这个是异步的，返回的是一个 Promise 对象）
    // res.text();
    // 获取响应数据，并将其转换为 json 对象（这个是异步的，返回的是一个 Promise 对象）
    // res.json();
    // 获取响应数据，并将其转换为 Binary Large Object（这个是异步的，返回的是一个 Promise 对象）
    // res.blob();
    // 获取响应数据，并将其转换为 ArrayBuffer 对象（这个是异步的，返回的是一个 Promise 对象）
    // res.arrayBuffer();
}, err => {
    console.log('error:' + err);
});


fetch('http://localhost:42858/fetch').then(res => res.json()).then(json => {
    // 拿到 http 请求响应的 json 数据
    console.log('json:', json);
}, err => {
    console.log('error:' + err);
});


// 自定义 http 请求的方法，请求的数据，请求的 header
fetch('http://localhost:42858/fetch', {
    method: 'POST',
    body: '{"name":"webabcd"}',
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}).then(res => res.json()).then(json => {
    console.log('json:', json);
}, err => {
    console.log('error:' + err);
});


// 通过 async/await 获取 http 请求的响应数据
(async () => {
    try {
        let res = await fetch('http://localhost:42858/fetch');
        let json = await res.json();
        console.log('json:', json);
    } catch (err) {
        console.log('error:' + err);
    }
})();





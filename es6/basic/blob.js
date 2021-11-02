/**
 * blob - Binary Large Object
 *
 * arrayBuffer - 内存中的一段二进制数据，可以以字节为单位对其处理
 * blob - 一个不可变的文件对象，只能作为一个整体处理
 *
 *
 */

let a = ['webabcd'];
// 自己构造 blob 对象时，第一个参数是一个数组，其成员可以是字符串或 arrayBuffer 或 blob 等
// 一般是不需要自己构造 blob 对象的，通常都是从 XMLHttpRequest 或 fetch() 或 <input type='file' /> 获取 blob 对象，然后再做相关处理的
let b = new Blob(a, {type : 'text/plain'});
console.log(b.type, b.size);

// blob 就是一个文件对象，需要通过 FileReader 处理
let reader = new FileReader();
// 读取 blob 完成了
reader.onload = (e) => {
    console.log("onload", e);
    console.log("reader.result", reader.result);
};
// 读取 blob 出错了
reader.onerror = (e) => {
    console.log("onerror", e);
};
// 读取 blob 时，读取进度更新了
reader.onprogress = (e) => {
    console.log("onprogress", e);
};
/**
 * reader.readAsText(blob);         将 blob 对象转换为文本数据，然后在 onload 中通过 reader.result 获取结果
 * reader.readAsArrayBuffer(blob);  将 blob 对象转换为 arrayBuffer 数据，然后在 onload 中通过 reader.result 获取结果
 * reader.readAsDataURL(blob);      将 blob 对象转换为 base64 数据，然后在 onload 中通过 reader.result 获取结果（结果类似 data:text/plain;base64,d2ViYWJjZA==）
 * reader.readAsBinaryString(blob); 将 blob 对象转换为二进制字符串数据，然后在 onload 中通过 reader.result 获取结果
 */
reader.readAsText(b);


/**
 * window.URL.createObjectURL(blob) - 浏览器可以为指定的 blob 对象生成一个临时 url 以便使用
 */
let c = window.URL.createObjectURL(b); // 结果类似 blob:http://localhost:63342/241ccac3-7f5c-42d1-a2b0-e539c99235ee
document.write(`<a href='${c}'>click me</a>`); // 浏览器跳转到这个 url 后会显示 webabcd

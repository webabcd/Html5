// worker 线程不能操作 DOM

let workerId = (Math.floor(Math.random() * 1000000)).toString().padStart(6, "0");
console.log("worker 线程启动了，workerId: " + workerId);

// 在 worker 中 直接写 onmessage 方法即可
// 收到 UI 线程发过来的数据
onmessage = function(event) {
    let data = event.data;
    console.log("从 UI 线程收到数据", data);
    console.time("时长");
    let now = new Date().getTime();
    let cur = new Date().getTime();
    do {
        cur = new Date().getTime();
    } while (cur - now < 1000)
    console.timeEnd("时长");

    // worker 给 UI 线程传递数据
    postMessage(`线程 ${workerId} 返回的数据`);
};
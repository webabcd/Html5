// Proxy - 代理（拦截目标对象的属性操作和函数操作）
let target = {
    name: 'webabcd',
    age: 40,
    get hello() {
        return this.name + this.age;
    }
}
let handler = {
    get: function(target, propertyKey, receiver) { // receiver 就是 Proxy 实例本身
        console.log("get: "+ propertyKey);
        return target[propertyKey];
    },
    set: function(target, propertyKey, value, receiver) { // receiver 就是 Proxy 实例本身
        console.log("set: " + propertyKey);
        target[propertyKey] = value;
        return true; // 对于 handler 的 set() 来说，必须要有 return true
    },
    has: function(target, propertyKey){
        console.log("has: " + propertyKey);
        return propertyKey in target;
    }
    /*
     * 其他可代理的方法如下：
     * construct() - 执行 new Proxy() 时
     * getPrototypeOf() - 执行 Object.getPrototypeOf(proxy) 时
     * setPrototypeOf() - 执行 Object.setPrototypeOf(proxy) 时
     * preventExtensions() - 执行 Object.preventExtensions(proxy) 时
     * isExtensible() - 执行 Object.isExtensible(proxy) 时
     * defineProperty() - 执行 Object.defineProperty(proxy) 时
     * ownKeys() - 执行 Object.getOwnPropertyNames(proxy) 时
     * deleteProperty() - 执行 delete proxy.prop 时
     */
}
// Proxy - 让 handler 处理 target 的属性和方法
let proxy = new Proxy(target, handler);
proxy.name = "wanglei"; // 会走到 handler 的 set()
console.log(proxy.name); // 会走到 handler 的 get()
console.log("name" in proxy); // 会走到 handler 的 has()


// 通过 handler 的 apply() 代理函数的调用
function target2(a, b) {
    return a + b;
}
let handler2 = {
    apply: function(target, ctx, args) {
        console.log("apply: " + args.join(","));
        return target(...args);
    }
};
let proxy2 = new Proxy(target2, handler2);
console.log(proxy2(100, 50)); // 150


// 通过 handler 的 construct() 代理构造函数
function target3(a, b) {
    this.a = a;
    this.b = b;
    this.hello = function() {
        return this.a + this.b;
    }
}
let handler3 = {
    construct(target, argArray, newTarget) {
        console.log("construct: "+argArray.join(","));
        return new target(...argArray);
    }
};
let proxy3 = new Proxy(target3, handler3);
console.log(new proxy3(100, 50).hello()); // 150




// Reflect - 反射
let target4 = {
    name: 'webabcd',
    age: 40,
    get hello() {
        return this.name + this.age;
    }
}
// Reflect.get() - 获取指定对象的指定属性
console.log(Reflect.get(target4, "hello")); // wanglei40
// Reflect.get() - 获取指定对象的指定属性（对象中的 this 会指向 Reflect.get() 的第 3 个参数）
console.log(Reflect.get(target4, "hello", {name: "xyz"})); // xyzundefined
// Reflect.set() - 设置指定对象的指定属性
Reflect.set(target4, 'name', "abc");
console.log(Reflect.get(target4, "name")); // abc


function target5(a, b) {
    return a + b + this.x;
}
// Reflect.apply() - 调用指定的函数
//     第 1 个参数：目标函数
//     第 2 个参数：目标函数的 this 指向的对象
//     第 3 个参数：传入目标函数的参数列表
console.log(Reflect.apply(target5, {x:100}, [100, 50])); // 250


function target6(a, b) {
    this.a = a;
    this.b = b;
    this.hello = function() {
        return this.a + this.b;
    }
}
// Reflect.construct() - 调用构造函数并传参
let obj = Reflect.construct(target6, [100, 50]); // 150
console.log(obj.hello());


/*
 * 关于 Reflect 除了上面说的，还有如下：
 * 注：这些都可以在 Object 中找到相同的用法，可以参见 class/prototype.js 中的关于 Object 的相关说明以及 basic/object.js 中的关于 Object 的相关的说明
 * defineProperty() - 类似 Object.defineProperty()
 * deleteProperty() - 类似 delete obj.prop
 * getPrototypeOf() - 类似 Object.getPrototypeOf()
 * setPrototypeOf() - 类似 Object.setPrototypeOf()
 * preventExtensions() - 类似 Object.preventExtensions()
 * isExtensible() - 类似 Object.isExtensible()
 * ownKeys() - 类似 Object.getOwnPropertyNames()
 *
 * 注：能用 Reflect 的方法就用 Reflect 的，而不要再用 Object 的了
 */




// 通过 Proxy 和 Reflect 实现察者模式
let myObj = {
    name: 'webabcd'
}
let myHandler = {
    set: function(target, propertyKey, value, receiver) {
        const result = Reflect.set(target, propertyKey, value, receiver);
        observerList.forEach(observer => observer());
        return result;
    }
}
const observerList = new Set();
const observer = fn => observerList.add(fn);
const observable = obj => new Proxy(obj, myHandler);

// 指定观察者
observer(function () {
    console.log("我是观察者 1，发现了 myObj 的属性发生了变化");
});
observer(function () {
    console.log("我是观察者 2，发现了 myObj 的属性发生了变化");
});

// 指定可被观察的对象，属性发生变化时通知所有观察者
let observableObj = observable(myObj);
observableObj.name = "wanglei";

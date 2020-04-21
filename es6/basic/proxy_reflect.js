let target = {
    name: 'webabcd',
    age: 40,
    get hello() {
        return this.name + this.age;
    }
}
let handler = {
    get: function(target, key, proxy) {
        console.log('getting '+key);
        return target[key]; // 不是target.key
    },
    set: function(target, key, value, proxy) {
        console.log('setting '+key);
        target[key] = value;
        return true;
    },
    has: function(target, propKey){
        console.log("handle has");
        return propKey in target;
    }
}
//  target 可以为空对象
let proxy = new Proxy(target, handler);
proxy.name = "wanglei"; // 实际执行 handler.set
console.log(proxy.name);
console.log("name" in proxy);
console.log("nick" in proxy);

/**
 // 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。
 handler.getPrototypeOf()

 // 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。
 handler.setPrototypeOf()


 // 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。
 handler.isExtensible()


 // 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。
 handler.preventExtensions()

 // 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。
 handler.getOwnPropertyDescriptor()


 // 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。
 andler.defineProperty()


 // 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。
 handler.has()

 // 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。
 handler.get()


 // 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。
 handler.set()

 // 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。
 handler.deleteProperty()

 // 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。
 handler.ownKeys()

 // 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。
 handler.apply()


 // 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。
 handler.construct()
 */


console.log(Reflect.get(target, 'hello'));

console.log(Reflect.get(target, 'hello', {name: "xyz"}));

Reflect.set(target, 'name', "abc"); // true
console.log(Reflect.get(target, 'name'));


let receiver = {
    name: 18
}
Reflect.set(target, 'name', "ijk", receiver); // true
console.log(target.name);
console.log(receiver.name);





// 定义 Set 集合
const queuedObservers = new Set();
// 把观察者函数都放入 Set 集合中
const observe = fn => queuedObservers.add(fn);
// observable 返回原始对象的代理，拦截赋值操作
const observable = obj => new Proxy(obj, {set});
function set(target, key, value, receiver) {
    // 获取对象的赋值操作
    const result = Reflect.set(target, key, value, receiver);
    // 执行所有观察者
    queuedObservers.forEach(observer => observer());
    // 执行赋值操作
    return result;
}
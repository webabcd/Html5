// 定义对象时省略属性名
const name = "webabcd";
const age = 40;
const a = {name, age}; // 定义对象时省略属性名（其属性名默认为变量名称）
const b = {name: name, age: age}; // 这是 es5 写法，等价于上面的
console.log(`${JSON.stringify(a)}, ${JSON.stringify(b)}`);
// {"name":"webabcd","age":40}, {"name":"webabcd","age":40}


// 定义对象的方法时，可以省略 function 关键字或者使用 lambda 表达式
const c = {
    helloOld:function() { // 这是 es5 写法，等价于下面的
        return "hello";
    },
    helloNew() { // 定义对象的方法时，可以省略 function 关键字
        return "hello";
    },
    helloLambda: () => { // 定义对象的方法时，可以使用 lambda 表达式
        return "hello";
    }
}
console.log(`${c.helloOld()}, ${c.helloNew()}, ${c.helloLambda()}`);
// hello, hello, hello


// 对象的 getter 和 setter
const d = {
    _name: "webabcd",
    get name() { // getter 和 setter 的写法
        return this._name;
    },
    set name(val) {
        this._name = val;
    },
}
d.name = "wanglei";
console.log(d.name);
// wanglei


// 使用表达式来定义属性名或方法名
let stringHello = "hello";
const e = {
    [stringHello + "2"]() { // 使用表达式定义方法名
        return "hello";
    }
}
const f = { // 使用表达式定义属性名
    [stringHello + "2"]: "hello"
};
console.log(`${e.hello2()}, ${f.hello2}`);
// hello, hello


// 合并对象（重名的后面会覆盖前面）
let o1 = {k1: "aaa", k2: "bbb"};
let o2 = {k2: "ddd", k4: "eee"};
let g = {...o1, k3: "ccc", ...o2};
console.log(`${JSON.stringify(g)}`);
// {"k1":"aaa","k2":"ddd","k3":"ccc","k4":"eee"}


// 通过 Object.assign(target, source_1, source_2, ...) 合并对象（重名的后面会覆盖前面）
// 为指定的类添加指定的方法，请参看 /es6/class/main.js 中的 Object.assign 部分
let h = {k1: "aaa", k2: "bbb"};
let o3 = {k3: "ccc"};
let o4 = {k2: "ddd", k4: "eee"};
Object.assign(h, o3, o4);
console.log(`${JSON.stringify(h)}`);
// {"k1":"aaa","k2":"ddd","k3":"ccc","k4":"eee"}


// “==” 会自动转换数据类型，而 “===” 则不会
// Object.is(value1, value2) 与 “===” 基本类似，只有 -0 和 +0 之间的比较，以及 NaN 的比较有所不同
console.log(`${1 == "1"}, ${1 === "1"}, ${Object.is({}, {})}, ${-0 === +0}, ${Object.is(-0, +0)}, ${NaN === NaN}, ${Object.is(NaN, NaN)}`);
// true, false, false, true, false, false, true


// 定义对象，设置或获取 key/value
// "xxx" in obj - 判断 obj 里是否有名为 xxx 的 key
// 注：key/value 和属性是不一样的，关于属性后面有写
let o5 = {k1: "aaa", k2: "bbb"};
o5.k3 = "ccc";
o5["k4"] = "ddd";
// Object.keys() - 遍历指定对象的 key
let keys = Object.keys(o5);
// Object.values() - 遍历指定对象的 value
let values = Object.values(o5);
console.log(keys.join(","), values.join(","), o5.k1, o5["k2"], "k1" in o5, "k9" in o5); // k1,k2,k3,k4 aaa,bbb,ccc,ddd aaa bbb true false


// Object.entries() - 遍历指定对象
console.log(Object.entries(o5)); // [["k1", "aaa"], ["k2", "bbb"], ["k3", "ccc"], ["k4", "ddd"]]


// 说说 call(), apply(), bind() - 均用于调用的时候修改 this 的指向
let o6 = {
    name: "webabcd",
    age: 40,
    hello(p1, p2) {
        console.log(`name:${this.name}, age:${this.age}, p1:${p1}, p2:${p2}`);
    }
};
o6.name = "wanglei";
// hello() 中的 this 指向的是 o6
o6.hello("a", "b"); // name:wanglei, age:40, p1:a, p2:b
let o7 = {
    name: "wanglei",
    age: 20,
};
// call(thisObj,arg1,arg2,arg3,……) - hello() 中的 this 指向的是 call() 的第 1 个参数
o6.hello.call(o7, "x", "y"); // name:wanglei, age:20, p1:x, p2:y
// apply(thisObj,argArr) - hello() 中的 this 指向的是 apply() 的第 1 个参数
o6.hello.apply(o7, ["x", "y"]); // name:wanglei, age:20, p1:x, p2:y
// bind(thisObj,arg1,arg2,arg3,……) - hello() 中的 this 指向的是 bind() 的第 1 个参数（bind() 返回的是一个函数，要拿到结果需要再“()”一下，其他与 call() 一样）
o6.hello.bind(o7, "x", "y")(); // name:wanglei, age:20, p1:x, p2:y


// Object.defineProperty()/Object.defineProperties() - 扩展对象的属性
// Object.getOwnPropertyNames() - 遍历对象的属性名
// "xxx" in obj - 判断 obj 里是否有名为 xxx 的属性
// 注：key/value 和属性是不一样的，关于 key/value 上面有说
let o8 = {
    // 定义对象的属性
    name: "webabcd"
};
Object.defineProperty(o8, "p1", {
    value: "v1",
    writable:true
});
Object.defineProperties(o8, {
    'p2': {
        value: "v2",
        writable: true
    },
    'p3': {
        value: "v3", // 不同于 key value
        writable: true
    }
});
let names = Object.getOwnPropertyNames(o8);
console.log(o8.p1, o8.p2, o8.p3, names.join(","), "name" in o8, "p1" in o8, "p9" in o8);
// v1 v2 v3 name,p1,p2,p3 true true false


// preventExtensions() - 禁止指定对象添加新属性
// Object.preventExtensions(o8);

// isExtensible() - 是否可为指定对象添加新属性，默认为 true，如果调用了 preventExtensions() 则此值为 false
// Object.isExtensible(o8);

// Object.seal() - 先调用 preventExtensions()，再将对象的所有属性标记为 configurable:false
// Object.seal(o8);

// Object.freeze() - 先调用 seal()，再将对象的所有属性标记为 writable:false
// Object.freeze(o8);


// delete - 删除对象的属性
let o9 = {
    name: "webabcd"
}
console.log(o9.name); // webabcd
delete o9.name;
console.log(o9.name); // undefined

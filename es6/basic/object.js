// 定义对象时省略属性名
const name = "webabcd";
const age = 40;
const a = {name, age}; // 定义对象时省略属性名（其属性名默认为变量名称）
const b = {name: name, age: age}; // 这是 es5 写法，等价于上面的
console.log(`${JSON.stringify(a)}, ${JSON.stringify(b)}`);
// {"name":"webabcd","age":40}, {"name":"webabcd","age":40}


// 定义对象时省略方法中的 function 关键字
const c = {
    hello() { // 定义对象时省略方法中的 function 关键字
        return "hello";
    }
}
const d = {
    hello:function() { // 这是 es5 写法，等价于上面的
        return "hello";
    }
}
console.log(`${c.hello()}, ${d.hello()}`);
// hello, hello


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
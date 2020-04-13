// 注：es6 依然不支持函数重载


// 可选参数
function a(p1, p2="webabcd") {
    return `${p1} ${p2}`;
}
console.log(`${a("hello", "wanglei")}, ${a("hello")}, ${a("hello", undefined)}`);
// hello wanglei, hello webabcd, hello webabcd


// 不定参数
function b(...values) {
    let result = "";
    for (let i = 0; i < values.length; i++) {
        result += values[i];
    }
    return result;
}
console.log(`${b("1", "2", "3")}`);
// 123


// 箭头函数（lambda 表达式）
let c = () => "hello"; // 无参数，返回值为一行表达式
let d = (p1, p2) => `${p1} ${p2}`; // 多个参数，返回值为一行表达式
let e = p1 => p1; // 一个参数（一个参数时可以省略括号），返回值为一行表达式
let f = p1 => ({content: p1}); // 返回值为一行表达式（如果返回的是对象的话则需要加上括号）
let g = (p1, p2) => { // 函数逻辑为多行表达式（加上大括号即可）
    let result = `${p1} ${p2}`;
    return result;
};
console.log(`${c()}, ${d("hello", "webabcd")}, ${e("hello")}, ${f("hello").content}, ${g("hello", "webabcd")}`);
// hello, hello webabcd, hello, hello, hello webabcd


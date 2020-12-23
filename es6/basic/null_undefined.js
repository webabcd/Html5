console.log(undefined == null, undefined === null); // true false
console.log(null == false, null === false, undefined == false, undefined === false); // false false false false
console.log(null == true, null === true, undefined == true, undefined === true); // false false false false
console.log(null ? "true" : "false", undefined ? "true" : "false"); // false false
console.log(typeof null, typeof undefined); // object undefined
console.log(Number(null), Number(undefined)); // 0 NaN


// 变量声明了，但是没有赋值，就是 undefined
let a;
console.log(a); // undefined


// 获取对象不存在的属性，就是 undefined
let b = { };
console.log(b.id);  // undefined


// 调用函数时，未提供的参数就是 undefined
let c = (p) => {
    console.log(p);  // undefined
};
c();


// 函数没有返回值，其返回的就是 undefined
let d = () => {

};
console.log(d());  // undefined


// 判断是否是 undefined
let e = { };
console.log(e.x === undefined, typeof e.x == 'undefined');  // true true

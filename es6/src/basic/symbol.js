// Symbol() 是一个全局函数，返回一个唯一的 Symbol 值
const a = Symbol();
const b = Symbol();
const c = Symbol("description");
const d = Symbol("description");
console.log(a === b, c == d); // false false


// Symbol.for() - 获取指定 key 的 Symbol 值，如果没有就创建一个
const e = Symbol.for("key")
const f = Symbol.for("key")
// Symbol.keyFor() - 获取指定的由 Symbol.for() 返回的 Symbol 值的 key
let g = Symbol.keyFor(e);
console.log(e === f, g); // true "key"


// Symbol 的应用场景
// Symbol 主要用于解决 JavaScript 中对象属性名可能冲突的问题，保证属性名的唯一性
// 不用 Symbol 的话当多个模块尝试在同一个对象上添加相同名称的属性时，后者会覆盖前者，Symbol 的引入解决了这一问题，因为每个 Symbol 值都是独一无二的

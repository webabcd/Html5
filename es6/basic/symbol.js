// 每个 Symbol() 都是一个不同的对象（其参数仅为描述用），不需要 new
const a = Symbol();
const b = Symbol();
const c = Symbol("description");
const d = Symbol("description");
console.log(a === b, c == d); // false false


// Symbol.for() - 获取指定 key 的 Symbol 对象，如果没有就创建一个
const e = Symbol.for("key")
const f = Symbol.for("key")
// Symbol.keyFor() - 获取指定的由 Symbol.for() 返回的 Symbol 对象的 key
let g = Symbol.keyFor(e);
console.log(f === f, g); // true "key"


// 至于 Symbol 的应用场景再说吧
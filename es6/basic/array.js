// array - 数组

// 创建数组，数组元素支持数据类型的多样性
console.log([1, 2, 3]); // [1, 2, 3]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(1, "2", true)); // [1, "2", true]
console.log(Array.of()); // []
console.log(Array.from([1, 2, 3])); // [1, 2, 3]
// 空位为 undefined
console.log(Array.from([1, , 3])); // [1, undefined, 3]


let a = [1, 2, 3];
let b = [2, 3, 4];
// 数组合并，结果不排重（需要排重的话，可以参见 set 的说明）
console.log([...a, ...b]); // [1, 2, 3, 2, 3, 4]
// 数组复制
let c = [...a];
console.log(c); // [1, 2, 3]
// 数组包含空位
console.log([1, , 3]); // [1, empty, 3]
console.log([...[1, , 3]]); // [1, undefined, 3]


// 通过 mapFn 处理每个元素后再放入新的数组（不会改变原有数组）
console.log(Array.from(a, (p) => p * 3), a);
// [3, 6, 9] [1, 2, 3]


let myObj = {
    do: function(n) {
        return n * 3;
    }
}
// 通过 mapFn 处理每个元素后再放入新的数组（不会改变原有数组）
// Array.from(arrayLike[, mapFn[, thisArg]])
// mapFn 的第 2 个参数，即 thisArg 用于指定 mapFn 执行时的 this 对象
console.log(Array.from(a, function (p) { // 这里不能用 lambda 表达式，不然 this 指向就不正确了
    // 这里的 this 指向的是 mapFunction 对象
    return this.do(p);
}, myObj), a);
// [3, 6, 9] [1, 2, 3]


// 通过 map() 处理每个元素后再放入新的数组（不会改变原有数组）
console.log(a.map(p => p * 3), a);
// [3, 6, 9] [1, 2, 3]


// map() 的第 2 个参数，即 thisArg 用于指定 map 执行时的 this 对象
console.log(a.map(function (p) { // 这里不能用 lambda 表达式，不然 this 指向就不正确了
    return this.do(p);
}, myObj), a);
// [3, 6, 9] [1, 2, 3]



// 对象转数组
// 对象的属性名必须是整型（数组会自动按属性名排序），必须有 length 属性
console.log(Array.from({
    0: "1",
    2: 3,
    1: "2",
    length: 3
}));
// ["1", "2", 3]


// map 转 array
console.log(Array.from(new Map([["a", "aaa"], ["b", "bbb"], ["c", "ccc"]]))); // [["a", "aaa"], ["b", "bbb"], ["c", "ccc"]]
console.log([...new Map([["a", "aaa"], ["b", "bbb"], ["c", "ccc"]])]); // [["a", "aaa"], ["b", "bbb"], ["c", "ccc"]]
// set 转 array
console.log(Array.from(new Set(["1", "2", "3"]))); // ["1", "2", "3"]
console.log([...new Set(["1", "2", "3"])]); // ["1", "2", "3"]
// string 转 array
console.log(Array.from("webabcd")); // ["w", "e", "b", "a", "b", "c", "d"]
console.log([..."webabcd"]); // ["w", "e", "b", "a", "b", "c", "d"]


// find() - 查找数组中符合条件的元素，如果有多个则只返回第 1 个元素
// 第 2 个参数是 thisArg 用于指定处理函数中的 this 对象，请参见之前 map() 的用法
console.log(Array.of(1, 3, 5, 7, 9).find(p => p > 5)); // 7
// findIndex() - 查找数组中符合条件的元素的索引位置，如果有多个则只返回第 1 个元素的索引位置
// 第 2 个参数是 thisArg 用于指定处理函数中的 this 对象，请参见之前 map() 的用法
console.log(Array.of(1, 3, 5, 7, 9).findIndex(p => p > 5)); // 3


// fill() -
// 将第 2 个参数指定的索引位置及其之后的元素，用第 1 个参数指定的数据替换
console.log(Array.of(1, 3, 5, 7, 9).fill(2, 1)); // [1, 2, 2, 2, 2]
// 将第 2 个参数指定的索引位置到第 3 个参数指定的索引位置（不包括本身）之间的元素，用第 1 个参数指定的数据替换
console.log(Array.of(1, 3, 5, 7, 9).fill(2, 1, 2)); // [1, 2, 5, 7, 9]
// 将第 2 个参数指定的索引位置（如果是负数，则从右往左数）及其之后的元素，用第 1 个参数指定的数据替换
console.log(Array.of(1, 3, 5, 7, 9).fill(2, -2)); // [1, 3, 5, 2, 2]


// copyWithin() -
// 将第 2 个参数指定的索引位置及其之后的元素，覆盖到第 1 个参数指定的索引位置及其之后的元素
console.log(Array.of(1, 3, 5, 7, 9, 11, 13).copyWithin(1, 5)); // [1, 11, 13, 7, 9, 11, 13]
// 将第 2 个参数指定的索引位置到第 3 个参数指定的索引位置（不包括本身）之间的元素，覆盖到第 1 个参数指定的索引位置及其之后的元素
console.log(Array.of(1, 3, 5, 7, 9, 11, 13).copyWithin(1, 3, 6)); // [1, 7, 9, 11, 9, 11, 13]
// 将第 2 个参数指定的索引位置（如果是负数，则从右往左数）及其之后的元素，覆盖到第 1 个参数指定的索引位置及其之后的元素
console.log(Array.of(1, 3, 5, 7, 9, 11, 13).copyWithin(1, -2)); // [1, 11, 13, 7, 9, 11, 13]


// entries() - 数组遍历（key/value）
for(let [key, value] of Array.of("a", "b", "c").entries()) {
    console.log(key + ":" + value); // 0:a 1:b 2:c
}
// keys() - 数组遍历（key）
for(let key of Array.of("a", "b", "c").keys()) {
    console.log(key); // 0 1 2
}
// values() - 数组遍历（value）
for(let value of Array.of("a", "b", "c").values()) {
    console.log(value); // a b c
}


// includes() - 数组是否包含指定的元素
console.log([1, 10, 100].includes(10)); // true
// includes() - 数组是否包含指定的元素（第 2 个参数用于指定搜索的起始索引位置）
console.log([1, 10, 100].includes(10, 2)); // false


// flat() -
// 嵌套数组减 1 层
console.log([1, [2, [3, [4, 5]]]].flat()); // [1, 2, [3, [4, 5]]
// 嵌套数组减 2 层
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
// 嵌套数组减全部层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
// 数组去掉空位
console.log([1, 2, , 3].flat()); // [1, 2, 3]
// 先处理每个元素，然后再放入数组，然后再对数组做 flat 操作
console.log([1, 2, 3].flatMap(p => [p * 3])); // [3, 6, 9]


// reduce() 方法接收一个函数作为累加器，数组从左到右传值，返回值会作为下一次调用函数时的 preValue 值，最终计算出一个值
// 本例用于获取数组元素的累加值
let d = [1, 2, 3].reduce((preValue, curValue, index, array) => {
    // 1 1 2 3
    // 2 3 3 6
    console.log(index, preValue, curValue, preValue + curValue);
    return preValue + curValue;
});
// reduce() 的第 2 个参数用于指定初始值
let e = [1, 2, 3].reduce((preValue, curValue, index, array) => {
    // 0 100 1 101
    // 1 101 2 103
    // 2 103 3 106
    console.log(index, preValue, curValue, preValue + curValue);
    return preValue + curValue;
}, 100);
// 通过 reduce() 获取数组元素的最大值
let f = [1, 2, 3].reduce((preValue, curValue, index, array) => {
    // 1 1 2 2
    // 2 2 3 3
    console.log(index, preValue, curValue, Math.max(preValue, curValue));
    return Math.max(preValue, curValue);
});
// reduceRight() 方法接收一个函数作为累加器，数组从右到左传值，返回值会作为下一次调用函数时的 preValue 值，最终计算出一个值
let g = [1, 2, 3].reduceRight((preValue, curValue, index, array) => {
    // 1 3 2 5
    // 0 5 1 6
    console.log(index, preValue, curValue, preValue + curValue);
    return preValue + curValue;
});
console.log(d, e, f, g); // 6 106 3 6


let h = [
    {id: 0, name: "aaa"},
    {id: 1, name: "bbb"},
    {id: 2, name: "ccc"},
    {id: 3, name: "ddd"},
    {id: 1, name: "eee"},
    {id: 2, name: "fff"},
];
// 通过 reduce() 实现按指定条件筛选或排重数组
let result = h.reduce((preValue, curValue) => {
    // 筛选出 id > 1 的数据，如遇 id 重复则舍弃后面的
    if (curValue.id > 1 && preValue.findIndex(p => p.id == curValue.id) == -1) {
        preValue.push(curValue);
    }
    return preValue;
}, []);
console.log(result); // [{id: 2, name: "ccc"}, {id: 3, name: "ddd"}]


// some() 数组中有一个元素符合条件则结果为真（即所有元素都不符合条件结果才为假）
// some() 的第 2 个参数是 thisArg 用于指定处理函数中的 this 对象，请参见之前 map() 的用法
let i = [1, 2, 3].some((p) => {
    return p > 1;
});
// every() 数组中有一个元素不符合条件则结果为假（即所有元素都符合条件结果才为真）
// every() 的第 2 个参数是 thisArg 用于指定处理函数中的 this 对象，请参见之前 map() 的用法
let j = [1, 2, 3].every((p) => {
    return p > 1;
});
console.log(i, j); // true false


let k = [1, , null, undefined, 2, 3, 4, 5];
// filter() 可以去掉数组中的空位，null，undefined
console.log(k.filter(p => p)); // [1, 2, 3, 4, 5]
// filter() 一般用于从数组中筛选出符合条件的数据
// filter() 的第 2 个参数是 thisArg 用于指定处理函数中的 this 对象，请参见之前 map() 的用法
console.log(k.filter(p => p > 1)); // [2, 3, 4, 5]
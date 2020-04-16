// 将指定对象转换为数字
console.log(Number("100"), Number(true), Number({}), Number([])); // 100 1 NaN 0

// 二进制
console.log(0b10); // 2
// 八进制
console.log(0o10); // 8
// 十六进制
console.log(0x10); // 16

// 表示 1 与大于 1 的最小浮点数之间的差（大于 0 的最小浮点数）
console.log(Number.EPSILON); // 2.220446049250313e-16
// 大于 0 的最小数
console.log(Number.MIN_VALUE); // 5e-324
// 最大数
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// 精确的最小整数（非科学计数法）
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// 精确的最大整数（非科学计数法）
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// 无限小
console.log(Number.NEGATIVE_INFINITY); // -Infinity
// 无限大
console.log(Number.POSITIVE_INFINITY); // Infinity

// 判断一个数是否是有限的
console.log(Number.isFinite(1)); // true
console.log(Number.isFinite(0.1)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false

// 判断一个数是否是 NaN（not a number）
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(100));; // false
console.log(Number.isNaN("abc")); // false（因为不会做类型转换）
console.log(isNaN("abc")); // true（因为会自动做类型转换）

// 字符串转数字
console.log(Number.parseInt("100")); // 100
console.log(Number.parseInt("100", 10)); // 100
console.log(Number.parseInt("100", 16)); // 256
console.log(Number.parseFloat("123.123")); // 123.123

// 判断一个数是否是整数
console.log(Number.isInteger(123)); // true
// 判断一个数是否是精确整数（非科学计数法）
console.log(Number.isSafeInteger(123)); // true

// 取整
console.log(Math.trunc(11.7)); // 11
console.log(Math.trunc(-11.7)); // -11
console.log(Math.trunc(-0.3)); // -0（注意：0 也是带符号的）
console.log(Math.trunc("abc")); // NaN
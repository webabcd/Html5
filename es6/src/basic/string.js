let a = "\x7A"; // 十六进制的 “7A” 是字符 “z”
let b = "\u{7A}"; // 十六进制的 “7A” 是字符 “z”
let c = "\u{738B}"; // UTF-8 (Unicode) 中 /u4e00-/u9fa5 是中文，\u738B 代表的是汉字 “王”
let d = "王".charCodeAt(0).toString(16); // 将指定的字符转换为 UTF-8 (Unicode) 编码
console.log(`${a} ${b} ${c} ${d}`);
// z z 王 738b


// includes() - 是否包含指定的字符串
// startsWith() - 是否以指定的字符串开头
// endsWith() - 是否以指定的字符串结尾
let e = "abc,ijk,xyz";
console.log(`${e.includes("ijk")} ${e.startsWith("abc")} ${e.startsWith("ijk", 4)} ${e.endsWith("xyz")} ${e.endsWith("ijk", 7)}`);
// true true true true true


// repeat() - 让字符串重复指定的次数
let f = "webabcd,";
console.log(`${f.repeat(3)}`);
// webabcd,webabcd,webabcd,


// padStart() - 指定字符串的最小长度，以及当长度不够时左侧需要补全的字符串
// padEnd() - 指定字符串的最小长度，以及当长度不够时右侧需要补全的字符串
let g = "123";
console.log(`${g.padStart(10, "0")} ${g.padEnd(10, "0")}`);
// 0000000123 1230000000


// `` 这玩意叫模板字符串（template string）
// 可以像下面这样定义多行文本（换行和空格都会保留）
// 也可以在 ${} 中执行表达式或函数或字段等
let h = `123
 456`;
console.log(`${h}`);
// 123
//  456


// `` 结合函数调用就是标签模板（tagged template）
function i(param1) {
    return `${param1}`;
}
// i`hello` 等价于 i("hello")
console.log(i`hello`);
// hello


// 这是标签模板的另一种使用方式
function j(stringArr, ...values) {
    let result = "";
    for (let i = 0; i < stringArr.length; i++) {
        result += stringArr[i];
        if (values[i]) {
            result += values[i];
        }
    }
    return result;
}
// j`key1: ${"value1"}, key2: ${"value2"}` 等价于 j(["key1: ", ", key2: "], "value1", "value2")
console.log(j`key1: ${"value1"}, key2: ${"value2"}`);
// param1: value1, param2: param2

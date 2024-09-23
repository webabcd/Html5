// let 仅在代码块内有效
{
    let a = 100;
    console.log(a);
}
{
    let a = 100;
    console.log(a);
}


// const 常量，一旦声明必须初始化，之后不允许修改
{
    const a = 100;
    console.log(a);
}


// let 仅在代码块内有效，var 是全局范围内有效
// let 只能声明一次，var 可以声明多次
{
    let a = 100;
    // let 如果多次声明的话，则编译报错 Identifier 'a' has already been declared
    // let a = 200;

    // var 可以声明多次，后面的覆盖前面的
    var b = 300;
    var b = 400;
}
// let 声明仅在代码块内有效，这里会捕获到异常 ReferenceError: a is not defined
try {
    console.log(a);
} catch (ex) {
    console.log(ex);
}
// var 声明后全局有效，这里会打印 400
console.log(b);


{
    // var 会变量提升，即走到这里的时候，虽然 c 未定义，但是这里会打印 undefined
    console.log(c);
    var c = 100;

    // 传说 let 不会变量提升，即走到这里的时候报错 ReferenceError: a is not defined
    // 但是在 chrome 中测试，let 也会变量提升，这里会打印 undefined
    console.log(d);
    let d = 100;
}


// 再验证一下， let 仅在代码块内有效，var 是全局范围内有效
{
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i); // 3 3 3
        })
    }
    for (let j = 0; j < 3; j++) {
        setTimeout(() => {
            console.log(j); // 0 1 2
        })
    }
}



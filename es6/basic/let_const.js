// let 仅在代码块内有效（var 是全局范围内有效）
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
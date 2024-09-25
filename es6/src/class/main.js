/**
 * 本例用于演示类与继承
 * es6 暂时无接口，静态属性
 */

// 先看看之前 es5 中如何定义类和属性
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.hello = function () {
    return `hello: ${this.name} ${this.age}`;
}
let obj = new Person("webabcd", 40);
console.log(`${obj.hello()} ${obj.name} ${obj.age}`);
// 可以通过 delete 删除对象的属性
delete obj.age; // 删除属性
console.log(obj.age); // undefined


// 演示 es6 中的类的基本应用
// 导入 ./a 中的 Person 类，并命名为 Person_A
import Person_A from './a';
// 通过 es5 为指定的类添加指定的方法
Person_A.prototype.hello2 = function() {
    return "hello2: " + this.name;
}
// 通过 es6 为指定的类添加指定的方法
Object.assign(Person_A.prototype,{
    hello3:function() {
        return "hello3: " + this.name;
    },
    hello4:function() {
        return "hello4: " + this.name;
    }
})
// 通过 es5 为指定的类添加指定的属性
Person_A.prototype.prop1 = "abc";
// 实例化并使用 Person_A 对象
let obj_a = new Person_A("webabcd", 40);
obj_a.nickname = "wanglei";
console.log(`${obj_a.hello()} ${obj_a.name} ${obj_a.age} ${obj_a.hello2()} ${obj_a.hello3()} ${obj_a.hello4()} ${obj_a.nickname} ${obj_a.prop1}`);


// 演示 es6 中的类与继承
// 导入 ./b 中的 Person 类，并命名为 Person_B
import Person_B from './b';
let obj_b = new Person_B("webabcd", 40);
console.log(obj_b.hello());


// 演示 es6 中的静态方法
// 导入 ./c 中的 Person 类，并命名为 Person_C
import Person_C from './c';
// es6 中暂无静态属性，但是可以通过 es5 为指定的类添加指定的静态属性
Person_C.prop1 = "abc";
Person_C.prop2 = 100;
// 调用类的静态方法和静态属性（注：类有一个默认的静态属性“name”，它返回的是类名称）
console.log(`${Person_C.prop1} ${Person_C.prop2} ${Person_C.hello()} ${Person_C.name}`);
// 输出结果 abc 100 hello: sub hello: super Person$2


// 演示 es5 中的 prototype 的使用
export * from './prototype';
// es5 中的 prototype（原型）

function Person(name) {
    // 私有变量
    let abc = "";
    // 私有函数
    let xyz = function() {

    }

    // 对象属性
    this.name = name;
    // 对象方法
    this.hello = function() {
        return "hello: " + this.name;
    }
}
// 类属性
Person.isMale = true;
// 类方法
Person.run = function(name) {
    return "run: " + name;
};
// 原型方法（相当于对象方法）
Person.prototype.walk = function() {
    return "walk: " + this.name;
};
// 原型方法（如果有重名的对象方法，则会执行对象方法，而不会执行原型方法）
Person.prototype.hello = function() {
    return "hello(prototype): " + this.name;
};
let person = new Person("webabcd");
console.log(person.hello(), person.walk(), Person.run("webabcd"), Person.isMale);
// hello: webabcd walk: webabcd run: webabcd true


// 通过原型为类增加对象属性和对象方法
Person.prototype.age = 100; // 为 Person 增加对象属性 age，其默认值为 100
Person.prototype.sleep = function() { // 为 Person 增加对象函数 sleep()
    return "sleep: " + this.name + this.age;
};
person.age = "40";
console.log(person.sleep());
// sleep: webabcd40


// 为指定对象增加属性和方法（仅指定对象有效）
person.salary = 1000;
person.info = function() {
    return "info: " + this.name + this.salary;
}
person.salary = "2000";
console.log(person.info());
// info: webabcd2000


// Object.setPrototypeOf() - 将指定对象的原型设置为另一个对象
function A() {
    this.name = "webabcd";
}
let b = {
    age:40
};
A.prototype.salary = 1000;
let a = new A();
console.log(a.name, a.age, a.salary); // webabcd undefined 1000
Object.setPrototypeOf(a, b); // 将 a 的原型设置为 b（不影响对象属性和对象方法）
console.log(a.name, a.age, a.salary); // webabcd 40 undefined


// Object.getPrototypeOf() - 获取指定对象的原型对象
// isPrototypeOf() - 用于判断当前原型是否是指定对象的原型
function C() {
    this.name = "webabcd";
}
let c = new C();
let c_prototype = Object.getPrototypeOf(c);
c_prototype.age = 100;
console.log(c.name, c.age, new C().age, c_prototype.isPrototypeOf(c));
// webabcd 100 100 true


// 注：能用 Reflect 的方法就用 Reflect 的，而不要再用 Object 的了
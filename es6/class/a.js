// 类
class Person {
    // 构造函数
    constructor(name, age) {
        // 定义类的属性 name, age
        this.name = name;
        this.age = age;
    }

    // 类方法
    hello() {
        return `hello: ${this.name} ${this.age}`;
    }

    // getter 和 setter
    // 约定 getter/setter 名字的前面加 “_” 为类的私有变量
    // getter 不可单独出现，setter 可以单独出现
    // getter 与 setter 必须同级出现（不能一个在基类，一个在子类）
    get nickname() {
        return this._nickname;
    }
    set nickname(val) {
        this._nickname = val;
    }
}

// 导出指定的类
export default Person;
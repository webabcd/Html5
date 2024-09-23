// 基类
class Life {
    constructor(name) {
        console.log("super class");
        this.name = name;
    }

    hello() {
        return "hello: " + this.name;
    }
}

// 子类
class Person extends Life {
    constructor(name, age) {
        // 调用基类构造函数
        super(name);

        console.log("sub class");
        this.age = age;
    }

    // 重写基类方法（如果需要调用基类方法，则调用 super.hello() 即可）
    hello() {
        return `hello: ${this.name} ${this.age} ${super.hello()}`;
    }
}

// 导出指定的类
export default Person;
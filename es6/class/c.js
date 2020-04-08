// 基类
class Life {
    // 静态方法
    static getName() {
        return "super";
    }
    // 静态方法（调用本类的其他静态方法用 this.getName() 即可）
    static hello() {
        return "hello: " + this.getName();
    }
}

// 子类
class Person extends Life {
    // 重写基类静态方法（调用基类的静态方法用 super.hello() 即可）
    static hello() {
        return `hello: sub ${super.hello()}`;
    }
}

// 导出指定的类
export default Person;
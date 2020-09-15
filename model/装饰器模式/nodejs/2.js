//假设我们现在要对一个函数log，打印出它的执行记录。
// 不使用装饰器
var log = (fn) => {
    return function () {
        console.info(`${fn.name} invoke with ${Array.from(arguments).join(",")}`)
        fn(...arguments)
    }
}
const plus = (a, b) => a + b;
let logPlug = log(plus)
logPlug(1, 2)
console.log("---------------------------------------------------")
/**
 * 使用装饰器 Decorator
 */
const logDecorate = (target, name, descriptor) => {
    let tmp = descriptor.value;
    descriptor.value = (...props) => {
        console.log(`Calling ${name} with`, props.join(","));
        return tmp.apply(this, props);
    };
    return descriptor;
}

const testAble = (bool) => {
    return (target) => {
        target.testAble = bool
    }
}
const Foo = {
    foo() { console.log('foo') }
};

const mixin = (...list) =>{
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}
@testAble(false)
@mixin(Foo.foo)
class Math {
    @logDecorate  // Decorator
    plus(a, b) {
        return a + b;
    }
    getSelf() {
        return this
    }
}

const math = new Math();
math.plus(1, 2);


class Animal {
    constructor(props) {
        this.name = props
    }
    hello() {
        console.log(this.name)
    }
}
class Dog extends Animal{
    constructor(props) {
        super(props)
        this.name = "鸡"
    }
}

let dog = new Dog("狗")
console.log(dog);
dog.hello()



function A() {
    this.a = "aaaa"
}
A.prototype.say = function() {
    console.log(this.a)
}
function B() {
    this.b = "bbbbb"
}
B.prototype.hello = function() {
    console.log(this.b)
}
B.prototype = Object.assign(B.prototype, A.prototype)

var b = new B()
console.log(b)
b.say()
b.hello()
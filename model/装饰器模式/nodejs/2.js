
//假设我们现在要对一个函数log，打印出它的执行记录。
// 不使用装饰器

var log = (fn) => {
    return function () {
        console.info(`${fn.name} invoke with ${Array.from(arguments).join(",")}`)
        fn(...arguments)
    }
}
const plus = (a, b) => a+b;
let logPlug = log(plus)
logPlug(1,2)
console.log("---------------------------------------------------")
/**
 * 使用装饰器 Decorator
 */
const logDecorate = (target, name, descriptor) => {
    var oldValue = descriptor.value;
    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments);
    };
    return descriptor;
}

class Math {
    @logDecorate  // Decorator
    plus(a, b) {
        return a + b;
    }
}
const math = new Math();

math.add(1, 2);


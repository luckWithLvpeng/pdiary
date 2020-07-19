// class Hello {
//     constructor() {
//         this.a = "aaa"
//     }
//     say() {
//         console.log(this.a)
//     }
// }
var Hello = function() {
    function Hello() {
        this.a = "aaa"
    }
    Hello.prototype.say = function() {
        console.log(this.a)
    }
    return Hello
}()


console.log(Hello.prototype)
var hello = new Hello()

console.log(hello.__proto__)

hello.say()
console.log(hello.constructor === Hello)
console.log(hello.__proto__ === Hello.prototype)
console.log(hello.__proto__.constructor === Hello)


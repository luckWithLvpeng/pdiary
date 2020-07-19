

let Role = function() {
    let instance = null
    return function(role) {
        if (instance) {
            return instance
        } else {
            this.role = role
            return instance = this
        }
    }
} ()

Role.prototype.getRole = function () {
    console.log(this.role)
}

let r1 = new Role("admin")
let r2 = new Role("guest")
console.log(r1 === r2)
r1.getRole()
r2.getRole()
// true
// admin
// admin

// 利用闭包原理隐藏实例, 同时可以用new关键字创建实例;



function Role(role) {
    this.role = role;
}

Role.prototype.getRole = function () {
    console.log(this.role)
}
Role.getInstance = function (role) {
    // 这里的this 指的是Role本身
    if (this.instance) {
        return this.instance;
    }
    this.instance = new Role((role))
    return this.instance
}

let r1 = Role.getInstance("admin")
let r2 = Role.getInstance("guest")
console.log(r1 === r2)
r1.getRole()
r2.getRole()
// true
// admin
// admin

// BUG: 是外界可以通过Role.instance,修改实例, 造成可以创建多个实例的漏洞

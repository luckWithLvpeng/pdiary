


function Role(role) {
    this.role = role
}

Role.prototype.getRole = function () {
    console.log(this.role)
}

function SingleFactory(fn) {
    let instance = null
    return function(){
        return instance ? instance : instance = new fn(...arguments)
    }
}

let r1 = new Role("admin")
let r2 = new Role("guest")
console.log(r1 === r2)
r1.getRole()
r2.getRole()
let SingleRole = SingleFactory(Role)
let sr1 = SingleRole("admin")
let sr2 = SingleRole("guest")
console.log(sr1 === sr2)
sr1.getRole()
sr2.getRole()

// false
// admin
// guest
// true
// admin
// admin

// 普通类经过单例工厂, 变成单例类

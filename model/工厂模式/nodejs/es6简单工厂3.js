class Role {
    constructor(props) {
        this.role = props.role
        this.permissions = props.permissions
    }

    getRole() {
        console.log(this.role)
    }

}

class Factory {
    constructor(role) {
        if(typeof this[role] !== "function") {
            throw new Error("不支持角色" + role)
        }
        return this[role]()
    }
    admin() {
        return new Role({role: "管理员", permissions: ['增','删', '改','查']});
    }
    guest() {
        return new Role({role: "游客", permissions: ['查']});
    }
}

let admin = new Factory('admin')
admin.getRole()
let guest = new Factory('guest')
guest.getRole()
// let coder = new Factory('coder')
// coder.getRole()
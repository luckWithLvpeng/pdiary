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
    constructor(props) {
    }
    static Create(role) {
        switch (role) {
            case "admin":
                return new Role({role: "管理员", permissions: ['增', '删', '改', '查']});
            case "guest":
                return new Role({role: "游客", permissions: ['查']});
            default:
                throw new Error("参数错误")
        }
    }

}

let admin = Factory.Create('admin')
admin.getRole()
let guest = Factory.Create('guest')
guest.getRole()
// let coder = Factory.Create('coder')
// coder.getRole()
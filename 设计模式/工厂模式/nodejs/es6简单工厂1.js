

class Role {
    constructor(props) {
        this.role = props.role
        this.permissions = props.permissions
    }
    static Create(role) {
        switch (role) {
            case "admin":
                return new Role({role: "管理员", permissions: ['增','删', '改','查']});
            case "guest":
                return new Role({role: "游客", permissions: ['查']});
            default:
                throw new Error("参数错误")
        }
    }
    getRole() {
        console.log(this.role)
    }

}

let admin = Role.Create('admin')
admin.getRole()
let guest = Role.Create('guest')
guest.getRole()
// let coder = Role.Create('coder')
// coder.getRole()
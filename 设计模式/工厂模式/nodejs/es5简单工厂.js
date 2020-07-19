
function Role (props){
    this.role = props.role;
    this.permissions = props.permissions;
}

Role.prototype.getRole = function() {
    console.log(this.role)
}

function Factory(role) {
    switch (role) {
        case "admin":
            return new Role({role: "管理员", permissions: ['增','删', '改','查']});
        case "guest":
            return new Role({role: "游客", permissions: ['查']});
        default:
            throw new Error("参数错误")
    }
}
let admin = Factory('admin')
admin.getRole()
let guest = Factory('guest')
guest.getRole()
// let coder = Factory('coder')
// coder.getRole()

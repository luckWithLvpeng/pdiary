

function Pool(max, constructor) {
    this.max = max;
    this.constructor = constructor;
    this.list = [];
    this.all = 0;
}
// 申请对象
Pool.prototype.alloc = function() {
    if (this.list.length > 0) {
        // 有现成的 , 直接给
        return this.list.pop()
    } else if (this.all < this.max) {
        // 创建新对象返回
        let obj = new this.constructor(...arguments)
        this.all += 1;
        return obj
    } else {
        //throw new Error("对象池已满, 暂无闲置对象,请稍后申请")
        return null
    }
}
// 释放对象
Pool.prototype.free = function(obj) {
    if (obj.constructor === this.constructor) {
        this.list.push(obj)
        return 0
    } else {
        //throw new Error("不支持的对象类型")
        return -1
    }
}

class Role {
    constructor(props) {
        this.role = props.role
    }
    introduce() {
        console.log("我的角色是" + this.role)
    }
}

let rolePool = new Pool(10, Role)

for (let i = 0; i < 100; i++) {
    let role1 = rolePool.alloc({role: "admin"})
    role1.introduce()
}

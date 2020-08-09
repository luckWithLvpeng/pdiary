/**
 * 生成双向链表
 * @param value 保存的值
 * @constructor
 */
function Link() {
    this.head = this.tail = null
}

/**
 * 生成节点
 * @param value
 * @returns {{value: *}}
 */
Link.prototype.generateNode = function(value) {
    return {
        value:value
    }
}
/**
 * 从头部插入
 * @param value
 */
Link.prototype.headPush = function(value) {
    let node = this.generateNode(value)
    if (this.head == null) {
        this.head = this.tail = node
    } else {
        node.next = this.head
        this.head.pre = node
        this.head = node
    }
}
/**
 * 从尾部插入
 * @param value
 */
Link.prototype.tailPush = function(value) {
    let node = this.generateNode(value)
    if (this.tail == null) {
        this.head = this.tail = node
    } else {
        this.tail.next = node
        node.pre = this.tail
        this.tail = node
    }
}
/**
 * 头部弹出
 * @returns {null}
 */
Link.prototype.headPop = function() {
    if (this.head) {
        let res = this.head
        if (this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.head = this.head.next
            this.head.pre = null
            res.next = null
        }
        return res
    } else {
        return null
    }
}
/**
 * 尾部弹出
 * @returns {null}
 */
Link.prototype.tailPop = function() {
    if (this.tail) {
        let res = this.tail
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.pre
            this.tail.next = null
            res.pre = null
        }
        return res
    } else {
        return null
    }
}
/**
 * 删除某个值
 * @param value  删除的值
 * @returns {[]} 返回删除的节点数组
 */
Link.prototype.remove = function(value) {
    let res = []
    if (!this.head) return res;
    // 找头
    while (this.head) {
        if (this.head.value === value) {
            res.push(this.head)
            let tmp = this.head.next
            this.head.pre = null
            this.head.next = null
            this.head = tmp || null
            if (this.head != null) {
                this.head.pre = null
            }
        } else {
            break
        }
    }
    if (this.head && this.head.next) {
        let pre = this.head
        let current = this.head.next
        while (current) {
            if (current.value === value) {
                res.push(current)
                let tmp = current.next || null
                pre.next = tmp
                current.next = null
                current.pre = null

                current = tmp || null
                if (current !== null ) {
                    current.pre = pre
                }
            } else {
                pre = current
                current = current.next
            }
        }
        this.tail = pre
    } else {
        this.tail = this.head
    }
    return res
}
/**
 * 打印链表
 */
Link.prototype.print = function() {
    let node = this.head
    while (node) {
        node = node.next
    }
}

let link = new Link()

link.headPush(1)
link.headPush(2)
link.headPush(2)
link.headPush(3)
link.headPush(3)
link.headPush(4)

link.print()
console.log(link.remove(2))
link.print()
console.log(link.remove(3))
link.print()
console.log(link.remove(1))
link.print()
console.log(link.remove(4))
link.print()
console.log(link)
link.headPush(22)
link.headPush(23)
console.log(link)

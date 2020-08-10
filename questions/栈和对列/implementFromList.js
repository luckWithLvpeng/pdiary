/**
 * 双向链表
 */
class List {
    constructor() {
        this.head = this.tail = null
    }

    /**
     * 生成节点
     * @param value
     * @returns {{value: *}}
     */
    node(value) {
        return {
            value:value
        }
    }
    /**
     * 头部插入
     * @param value
     */
    headPush(value){
        let node = this.node(value)
        if (this.head === null) {
            this.head = this.tail = node
        } else {
            node.next = this.head
            this.head.last = node
            this.head = node
        }
    }
    /**
     * 尾部插入
     * @param value
     */
    tailPush(value){
        let node = this.node(value)
        if (this.tail === null) {
            this.head = this.tail = node
        } else {
            node.last = this.tail
            this.tail.next = node
            this.tail = node
        }
    }
    /**
     * 尾部插入
     * @param value
     */
    tailPush(value){
        let node = this.node(value)
        if (this.tail === null) {
            this.head = this.tail = node
        } else {
            node.last = this.tail
            this.tail.next = node
            this.tail = node
        }
    }
    /**
     * 头部弹出
     * @param value
     */
    headPop(){
        let current = this.head
        if(this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.head = current.next
            this.head.last = null
            current.next = null
        }
        return current
    }
    /**
     * 尾部弹出
     * @param value
     */
    tailPop(){
        let current = this.tail
        if(this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.tail = current.last
            this.tail.next = null
            current.last = null
        }
        return current
    }

    /**
     * 是否为空
     */
    isEmpty() {
        return this.head === null
    }
}

/**
 * 栈
 * 深度不限
 * 时间复杂度 O(1)
 */
class Stack {
    constructor() {
        this.list = new List()
    }

    /**
     * 入栈
     * @param value
     */
    push(value) {
        this.list.tailPush(value)
    }
    /**
     * 出栈
     * @param value
     */
    pop() {
        return this.list.tailPop()
    }
}

/**
 * 对列
 * 长度不限
 * 时间复杂度 O(1)
 */
class Queue {
    constructor() {
        this.list = new List()
    }
    /**
     * 入队
     * @param value
     */
    push(value){
        this.list.headPush(value)
    }

    /**
     * 出队
     */
    pop() {
        return this.list.tailPop()
    }
}

// let stack = new Stack()
// let testArr = [...new Array(10).keys()]
// testArr.forEach(v => {
//     console.log(v)
//     stack.push(v)
// })
// console.log("-------------------")
// testArr.forEach(v => {
//     console.log(stack.pop())
// })

let queue = new Queue()
let testArr = [...new Array(100).keys()]
testArr.forEach(v => {
    console.log(v)
    queue.push(v)
})
console.log("-------------------")
testArr.forEach(v => {
    console.log(queue.pop())
})
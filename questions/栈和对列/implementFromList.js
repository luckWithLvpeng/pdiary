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
        return current.value
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
        return current.value
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
    isEmpty() {
        return this.list.isEmpty()
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
        this.size++
    }

    /**
     * 出队
     */
    pop() {
        return this.list.tailPop()
    }

    isEmpty() {
        return this.list.isEmpty()
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

// let queue = new Queue()
// let testArr = [...new Array(100).keys()]
// testArr.forEach(v => {
//     console.log(v)
//     queue.push(v)
// })
// console.log("-------------------")
// testArr.forEach(v => {
//     console.log(queue.pop())
// })


/**
 * 题1
 * 内部用只用对列,实现栈的功能
 *
 * 思路: 内部用两个对列, 交替存储,弹出
 */
class StackImplementByQueue {
    constructor(props) {
        this.pushQueue = new Queue()
        this.popQueue = new Queue()
    }

    push(value) {
        this.pushQueue.push((value))
    }

    pop() {
        if (this.pushQueue.isEmpty())  throw new Error("Underflow")
        let tmp = this.pushQueue.pop()
        while (!this.pushQueue.isEmpty()) {
            this.popQueue.push(tmp)
            tmp = this.pushQueue.pop()
        }
        let tmpQueue = this.pushQueue
        this.pushQueue = this.popQueue
        this.popQueue = tmpQueue
        return  tmp
    }
}

// let stack = new StackImplementByQueue()
// let testArr = [...new Array(10).keys()]
// testArr.forEach(v => {
//     console.log(v)
//     stack.push(v)
// })
// console.log("-------------------")
// testArr.forEach(v => {
//     console.log(stack.pop())
// })

/**
 * 题2
 * 内部只用栈 , 实现对列
 * 思路, 准备俩栈, 一个pushStack , 一个popStack
 * 每次  push, 直接push 进 pushStack
 * 每次 pop , 如果popStack 不为空, 直接pop,  如果为空, 则把所有pushStack的值压入popStack, 然后pop
 * 都为空, 则报错: 底部溢出 (Underflow)
 */
class QueueImplementByStack {
    constructor() {
        this.pushStack = new Stack()
        this.popStack == new Stack()
    }

    push(value) {
        this.pushStack.push(value)
    }
    pop(){
        if (this.popStack.isEmpty()) {
            while (!this.pushStack.isEmpty()) {
                this.popStack.push(this.pushStack.pop())
            }
        }
        if (this.popStack.isEmpty()) {
            throw new Error("Underflow")
        } else {
            return this.popStack.pop()
        }
    }
}

let queue = new QueueImplementByStack()
let testArr = [...new Array(10).keys()]
testArr.forEach(v => {
    console.log(v)
    queue.push(v)
})
console.log("-------------------")
testArr.forEach(v => {
    console.log(queue.pop())
})

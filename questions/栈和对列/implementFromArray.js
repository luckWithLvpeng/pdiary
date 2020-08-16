/**
 * 栈
 * 限制深度
 * 时间复杂度 O(1)
 */
class Stack {
    constructor(length) {
        this.list = []
        this.size = 0
        this.length = length
    }

    /**
     * 入栈
     * @param value
     */
    push(value) {
        if (this.size === this.length) {
            throw new Error("栈溢出")
        }
        this.list.push(value)
        this.size++
    }

    /**
     * 出栈
     */
    pop() {
        return this.list.pop()
    }
}

// let stack = new Stack(10)
// let testArray = [...new Array(10).keys()]
// testArray.forEach(v => {
//     console.log(v)
//     stack.push(v)
// })
// console.log("~~~~~~~~~~~~~");
// testArray.forEach(v => {
//     console.log(stack.pop())
// })

/**
 * 对列实现
 * 限制长度
 */
class Queue {
    constructor(length) {
        this.length = length
        this.size = 0
        this.list = []
        this.putIndex = this.popIndex = 0;
    }

    /**
     * 入队
     * @param value
     */
    push(value) {
        if (this.size === this.length) {
            throw new Error("queue is full")
        }
        this.list[this.putIndex] = value
        this.putIndex = this.getNextIndex(this.putIndex)
        this.size ++
    }

    /**
     * 出队
     */
    pop() {
        if(this.size === 0) {
            throw new Error("对列已空")
        }
        let res = this.list[this.popIndex]
        this.popIndex = this.getNextIndex(this.popIndex)
        this.size --

        return res

    }
    getNextIndex(value) {
        return value === this.length - 1 ? 0 : value + 1
    }
}

// let queue = new Queue(10)
// let testArray = [...new Array(10).keys()]
// testArray.forEach(v => {
//     console.log(v)
//     queue.push(v)
//     console.log(queue)
// })
// console.log("~~~~~~~~~~~~~");
// testArray.forEach(v => {
//     console.log(queue.pop())
//     console.log(queue)
// })

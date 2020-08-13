/**
 * 栈的实现
 */
class Stack {
    constructor() {
        this.item = []
    }
    push(value) {
        this.item.push(value)
    }
    pop() {
        return this.item.pop()
    }
    peek() {
        return this.item[this.item.length-1]
    }
    isEmpty() {
        return this.item.length === 0
    }
}

/**
 * 目标栈
 * 多了一个getMin方法
 */
class TargetStack {
    constructor() {
        this.stack = new Stack()
        this.minStack = new Stack()
        this.min = null
    }

    push(value) {
        this.stack.push(value)
        if (!this.min || this.min > value) {
            this.min = value
        }
        this.minStack.push(this.min)
    }

    pop() {
        this.minStack.pop()
        return this.stack.pop()
    }

    getMin() {
        this.stack.pop()
        return this.minStack.pop()
    }
}

/**
 * 单向链表
 * var node =  {
 *     value: int
 *     next: node
 * }
 * 双向链表
 * var node =  {
 *     value: int
 *     next: node
 *     pre: node
 * }
 */

var node1 = {
    value : 1
}
var node2 = {
    value : 2
}
var node3 = {
    value : 3
}

/**
 * 遍历链表
 * @param head 链表头
 */
function printLink(head) {
    while (head) {
        console.log(head.value)
        head = head.next
    }
}

/**
 * 反转单向链表
 * @param head 链表头
 * @returns {null} 返回新的链表头
 * @constructor
 */
function ReverseSingleLink(head) {
    let pre = null
    let next = null
    while (head) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
}
// var singleRoot= node1
// node1.next = node2
// node2.next = node3
// console.log(singleRoot)
// singleRoot = ReverseSingleLink(singleRoot)
// console.log(singleRoot)
//
// singleRoot = ReverseSingleLink(singleRoot)
// console.log(singleRoot)

/**
 * 反转双向向链表
 * @param head 链表头
 * @returns {null} 返回新的链表头
 * @constructor
 */
function ReverseDoubleLink(head) {
    let pre = null
    let next = null
    while (head) {
        next = head.next
        head.next = pre
        head.pre = next
        pre = head
        head = next
    }
    return pre
}

var doubleRoot = node1
node1.next = node2
node2.pre = node1
node2.next = node3
node3.pre = node2

printLink(doubleRoot)
doubleRoot = ReverseDoubleLink(doubleRoot)
printLink(doubleRoot)

doubleRoot = ReverseDoubleLink(doubleRoot)
printLink(doubleRoot)

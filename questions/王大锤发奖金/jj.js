/**
 * 实现思路, 把年终将想象成一个波浪, 先正序遍历,升序的就加一, 降序的都写1,
 * 然后再倒叙遍历, 同样升序的加一,  波峰相交处, 取较大值,  然后循环相加,即可得出年终奖.
 * 时间复杂度O(N), 空间复杂度O(N)
 * @param arr []工龄
 * @returns {number} 年终奖
 */
function allocBonus(arr) {
    if (arr.length <= 1) return 100 * arr.length;
    let bonus = 0;
    let tmpArr = [1]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            tmpArr[i] = tmpArr[i - 1] + 1
        } else if (arr[i - 1] > arr[i]) {
            tmpArr[i] = 1
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i - 1 >= 0 && arr[i] < arr[i - 1] && tmpArr[i-1] < tmpArr[i] + 1) {
            tmpArr[i - 1] = tmpArr[i] + 1
        }
        bonus += tmpArr[i]
    }
    return bonus * 100
}

console.log(allocBonus([9, 3, 4, 1, 3, 4, 5, 3]))
console.log(allocBonus([9, 6, 3])) // 300 200 100
console.log(allocBonus([1, 4, 5, 9, 3, 2])) // 100 200 300 400 200 100


/**
 * 生成随机长度,随机大小有负数的数组
 * @param maxSize 数字长度的最大值
 * @param maxValue 数组最大值   -maxValue  ~  maxValue
 * @returns {[]}  返回数组
 * @constructor
 */
function GenerateRadomArray(maxSize, maxValue) {
    let size = parseInt(Math.random() * (maxSize + 1))
    var res = []
    for (let i = 0; i < size; i++) {
        res[i] = parseInt(Math.random() * (maxSize + 1)) - parseInt(Math.random() * (maxSize + 1))
    }
    return res
}


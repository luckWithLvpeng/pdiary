/**
 * partition1 过程
 * 给一个数组和一个整数num, 要求把数组中小于等于num的数放在左边, 比num大的数放在右边.
 * 要求空间复杂度O(1), 时间复杂度O(n)
 */
function partition1(array, num) {
    let s = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= num) {
            swap(array, i, ++s)
        }
    }
    return s
}

/**
 *
 * partition2 过程
 * 实现 :一个数组在 L ... R 上,假设num 为 array[R], 要求在数组中 x 位置左边的数 <= num , 右边的数 > num ,返回x的位置
 */
function partition2(array, L, R) {
    if (array.length === 1) return;
    let s = L - 1
    let num = array[R]
    let i = L
    while (i < R) {
        if (array[i] <= num) {
            swap(array, i, ++s)
        }
        i++
    }
    swap(array, ++s, R)
    return s
}

/**
 * 交换俩数
 * @param array
 * @param i
 * @param j
 */
function swap(array, i, j) {
    let tmp = array[i]
    array[i] = array[j]
    array[j] = tmp

}

/**
 * 在 L ... R 上实现荷兰国旗游戏
 * 规则: 假设num为arr[R], 要求把数组中小于等于num的数放在左边, 比num大的数放在右边. num 放在中间
 * @param array
 * @param L
 * @param R
 */
function partition3(array, L, R) {
    if (L > R) return [-1, -1];
    if (L === R) return [L, R];
    let num = array[R]
    let s = L - 1
    let m = R + 1
    let i = L
    while (i < m) {
        if (array[i] > num) {
            swap(array, i, --m)
        } else if (array[i] < num) {
            swap(array, i++, ++s)
        } else {
            i++
        }
    }
    return [s + 1, m - 1]
}


/**
 * 快排
 * @param arr
 */
function quickSort(arr) {
    // _quickSort1(arr, 0, arr.length - 1)
    // _quickSort2(arr, 0, arr.length - 1)
    _quickSort3(arr, 0, arr.length - 1)
}


/**
 * 快排 1.0
 * @param arr
 * @param L
 * @param R
 */
function _quickSort1(arr, L, R) {
    if (L >= R) return
    let m = partition2(arr, L, R)
    _quickSort1(arr, L, m - 1)
    _quickSort1(arr, m + 1, R)
}

/**
 * 快排 2.0
 * @param arr
 * @param L
 * @param R
 */
function _quickSort2(arr, L, R) {
    if (L >= R) return
    let mArr = partition3(arr, L, R)
    _quickSort2(arr, L, mArr[0] - 1)
    _quickSort2(arr, mArr[1] + 1, R)
}
/**
 * 快排 3.0, 随机快排
 * @param arr
 * @param L
 * @param R
 */
function _quickSort3(arr, L, R) {
    if (L >= R) return
    // 加入随机性
    swap(arr,L + Math.floor(Math.random()*(R-L+1)),R)
    let mArr = partition3(arr, L, R)
    _quickSort2(arr, L, mArr[0] - 1)
    _quickSort2(arr, mArr[1] + 1, R)
}

let test = [2, 4, 3, 1,8, 5, 5, 7, 6, 9, 4, 5]
quickSort(test)

console.log(test);
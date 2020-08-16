let testArr = [2, 3, 1, 5, 4, 9, 7, 8]

/**
 * 归并排序: 用递归思路实现
 * 复杂度 O(N*logN)
 * @param arr 排序的参数
 */
function mergeSort(arr) {
    _mergeSort(arr, 0, arr.length - 1)
}

function _mergeSort(arr, L, R) {
    if (L === R) return;
    let M = L + ((R - L) >>> 1)
    _mergeSort(arr, L, M)
    _mergeSort(arr, M + 1, R)
    merge(arr, L, M, R)
}

function merge(arr, L, M, R) {
    let length = R - L + 1
    let tmp = new Array(length)
    let i = 0;
    let p1 = L;
    let p2 = M + 1;
    while (p1 <= M && p2 <= R) {
        tmp[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
    }
    while (p1 <= M) {
        tmp[i++] = arr[p1++]
    }
    while (p2 <= R) {
        tmp[i++] = arr[p2++]
    }
    for (let j = 0; j < length; j++) {
        arr[L++] = tmp[j]
    }
}

/**
 * 归并排序: 无递归递归实现
 * @param arr
 */
function mergeSort2(arr) {
    let N = arr.length
    let mergeSize = 1;
    while (mergeSize < N) {
        let L = 0
        while (L < N) {
            let M = L + mergeSize - 1
            // 当 M 来到数组的末尾, 说明右侧已经无须merge
            if (M >= (N -1)) {
                break;
            }
            // R 不能越界
            let R = Math.min(M + mergeSize, N -1)
            merge(arr, L, M, R)
            L = R+1
        }
        // 有利于大数组越界
        if (mergeSize > (N >>> 1)) break;
        mergeSize = (mergeSize << 1)
    }
}

mergeSort2(testArr)
console.log(testArr)
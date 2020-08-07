
// 找等于某数的下标
function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length  -1
    while ( left<= right) {
        let mid = left + ((right - left) >> 1)
        if (arr[mid] === target) {
            return mid
        } else if ( arr[mid] > target) {
            right = mid -1
        } else {
            left = mid + 1
        }
    }
    return -1
}

// 找大于等于某数最左边的数的下标
function BinarySearchLeft(arr, target) {
    let left = 0;
    let right = arr.length  -1
    while ( left<= right) {
        let mid = left + ((right - left) >> 1)
        if (arr[mid] >= target) {
            right = mid -1
        } else {
            left = mid + 1
        }
    }
    return left >= arr.length ? -1 : left
}
let testArr = [1,2,2,2,2,2,3,4,5,6,7]


console.log(BinarySearchLeft(testArr, -1))


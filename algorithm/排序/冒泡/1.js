
let testArr = [2,3,1,5,4,9,7,8]
function sort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j , j+1)
            }
        }
    }
}
function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

sort(testArr)
console.log(testArr)
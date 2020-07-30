let testArr = [2,3,1,5,4,9,7,8]
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j , j-1)
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
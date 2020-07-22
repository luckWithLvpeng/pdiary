
let testArr = [2,3,1,5,4,9,7,8]
function sort(arr) {
    for (let i = 0; i < arr.length -1; i++) { // 0 ~ n-2
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) { // 1 ~ n-1
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        minIndex !== i && swap(arr, i,minIndex);
    }
}
function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

sort(testArr)
console.log(testArr)
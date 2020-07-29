let data = [1, 2, 4, 5, 6, 8, 65, 78, 43, 23, 41, 12, 32, 62, 61]

// 大于某值
function bigThan(x) {
    return function (v) {
        return v > x;
    }
}

// 小于某值
function smallThan(x) {
    return function (v) {
        return v < x;
    }
}

// 奇数
function odd(x) {
    return x % 2 === 1;
}

// 偶数
function even(x) {
    return x % 2 === 0;
}

// 交集
function Intersection(...fns) {
    return function(v) {
        for (let i = 0; i < fns.length; i++) {
            if(!fns[i](v)) {
                return false;
            }
        }
        return true
    }
}

// 并集
function Union(...fns) {
    return function(v) {
        for (let i = 0; i < fns.length; i++) {
            if(fns[i](v)) {
                return true;
            }
        }
        return false
    }
}

let b10 = data.filter(bigThan(10))
let st60 = data.filter(smallThan(60))
let o = data.filter(odd)
let e = data.filter(even)

console.log(b10);
console.log(st60);
console.log(o);
console.log(e);

console.log(data.filter(Intersection(smallThan(60), odd))) // 小于60的奇数
console.log(data.filter(Union(smallThan(60), odd))) // 小于60或者奇数
console.log(data.filter(Intersection(smallThan(60),bigThan(10), even))) // 大于10, 小于60的偶数

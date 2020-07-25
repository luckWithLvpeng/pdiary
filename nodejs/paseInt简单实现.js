function _parseInt(string) {
    if (typeof string === "number") return string;
    if (typeof string !== "string" || string.length === 0) return NaN;
    let res = "0"
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            res *= 10
            res += charCode - 48
        } else {
            if (res === "0") {
                return NaN;
            }
            break;
        }
    }
    return res;
}

console.log(_parseInt("1112"));
console.log(_parseInt("a1112"));
console.log(_parseInt("435a112"));
console.log(_parseInt("0100021"));
console.log(_parseInt("0"));
// '0' = 48
// '9' = 57
// console.log('0'.charCodeAt(0));
// console.log('9'.charCodeAt(0));

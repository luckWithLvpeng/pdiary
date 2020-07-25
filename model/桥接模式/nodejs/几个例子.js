// 回调函数就是一种桥接模式,
// 把循环抽象出来, 通过回调函数, 桥接具体实现
var each = function (arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (fn.call(val, i, val, arr)) {
            return false;
        }
    }
};

var arr = [1, 2, 3, 4];
each(arr, function (i, v) {
    arr[i] = v * 2;
});

//  事件监控
var a = {}
a.onClick = getBeerByIdBridge;
function getBeerByIdBridge (e) {
    getBeerById(this.id, function(beer) {
        console.log('Requested Beer: '+beer);
    });
}
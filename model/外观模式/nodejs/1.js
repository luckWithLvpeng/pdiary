

//通过检测浏览器特性的方式来创建一个跨浏览器的使用方法
var addMyEvent = function (el, ev, fn) {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + ev, fn);
    } else {
        el['on' + ev] = fn;
    }
};

// 类似这种可以屏蔽到客户端和系统之间的复杂性,, 相当于在系统和客户端中间加了一个套件, 把系统的复杂性屏蔽掉.
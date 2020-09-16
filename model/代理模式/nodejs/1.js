
// 例子：代理接听电话，实现拦截黑名单
var backPhoneList = ['189XXXXX140'];       // 黑名单列表
// 代理
var ProxyAcceptPhone = function(phone) {
    // 预处理
    console.log('电话正在接入...');
    if (backPhoneList.includes(phone)) {
        // 屏蔽
        console.log('屏蔽黑名单电话');
    } else {
        // 转接
        AcceptPhone.call(this, phone);
    }
}
// 本体
var AcceptPhone = function(phone) {
    console.log('接听电话:', phone);
};

// 外部调用代理
ProxyAcceptPhone('189XXXXX140');
ProxyAcceptPhone('189XXXXX141');

// 代理并不会改变本体对象，遵循 “单一职责原则”，即 “自扫门前雪，各找各家”。
// 不同对象承担独立职责，不过于紧密耦合，具体执行功能还是本体对象，只是引入代理可以选择性地预先处理请求
// 例如上述代码中，我们向 “接听电话功能” 本体添加了一个屏蔽黑名单的功能（保护代理），预先处理电话接入请求。

let myImage = null
{
    let imgNode = document.createElement("img")
    document.body.appendChild(imgNode)
    myImage = {
        setSrc: (src) => imgNode.src = src
    }
}

let myImageProxy = null

{
    let img = new Image;
    img.onload = function() {
        myImage.setSrc(this.src)
    }
    myImageProxy = {
        setSrc: (src) => {
            img.src = src
            myImage.setSrc("./loading.gif")
        }
    }
}

// 外部调用
myImageProxy.setSrc('./product.png');
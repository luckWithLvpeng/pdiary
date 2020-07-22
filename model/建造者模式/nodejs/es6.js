/**
 * 以肯德基为例
 * 有薯条,炸鸡,汉堡等产品, 不同的组合,可以生产出不同的套餐
 */

class Kfc {
    constructor(type) {
        switch (type) {
            case "A":
                var res = 1 * new Chips() + 2 * new Hamburger()
                return res;
            case "B":
                var res = 2 * new Chips() + 2 * new Hamburger() + new FiredChicken()
                return res;
            case "C":
                var res = 4 * new Chips() + 2 * new Hamburger() + 2 * new FiredChicken()
                return res;
            default:
                throw new Error("没有该套餐");
        }
    }
}
class Chips {
    constructor(props) {
        this.name = "薯条";
    }
    toString() {
        console.log("我是" + this.name)
    }
}

class Hamburger {
    constructor(props) {
        this.name = "汉堡";
    }
    toString() {
        console.log("我是" + this.name)
    }
}

class FiredChicken{
    constructor(props) {
        this.name = "炸鸡";
    }
    toString() {
        console.log("我是" + this.name)
    }
}

var A = new Kfc("A")
var B = new Kfc("B")
var C = new Kfc("C")

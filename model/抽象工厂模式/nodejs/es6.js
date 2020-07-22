

class Factory {
    constructor(type) {
        switch (type) {
            case "car":
                return Car;
            case "yacht":
                return Yacht;
            default:
                throw new Error("不支持的品产");
        }
    }
}
// 游艇
class Yacht {
    constructor(props) {
        this.color = props.color;
        this.brand = props.brand;
    }
    drive() {
        console.log("color= " + this.color + "brand=" + this.brand + ",我正在海上")
    }
}
// 汽车
class Car {
    constructor(props) {
        this.color = props.color;
        this.brand = props.brand;
    }
    drive() {
        console.log("color= " + this.color + "brand=" + this.brand + ",我在马路上")
    }
}

var CarFactory = new Factory("car")
var luhu = new CarFactory({color: "红色", brand: "路虎"})
var YachtFactory = new Factory("yacht")
var youting = new YachtFactory({color: "白色", brand: "兰博基尼"})

luhu.drive()
youting.drive()

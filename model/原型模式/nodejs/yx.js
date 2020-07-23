
let car = {
    name: "长安",
    introduce: function() {
        console.log(this.name)
    }
}
let newCar = Object.create(car, {
    name: {
        value: "哈弗",
        enumerable: true,
    }
})
//newCar.name = "哈弗"

newCar.introduce()
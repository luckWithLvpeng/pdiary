class Speed {            // 运动模块
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    run() {  console.log(`运动起来 ${this.x} + ${this.y}`)  }
}

class Color {            // 着色模块
    constructor(cl) {
        this.color = cl
    }
    draw() {  console.log(`绘制颜色 ${this.color}`)  }
}

class Speak {
    constructor(wd) {
        this.word = wd
    }
    say() {  console.log(`说话 ${this.word}`)  }
}

class Ball {                     // 创建球类，可以着色和运动
    constructor(x, y, cl) {
        this.speed = new Speed(x, y)
        this.color = new Color(cl)
    }
    init() {
        this.speed.run()
        this.color.draw()
    }
}

class Man {                    // 人类，可以运动和说话
    constructor(x, y, wd) {
        this.speed = new Speed(x, y)
        this.speak = new Speak(wd)
    }
    init() {
        this.speed.run()
        this.speak.say()
    }
}

const man = new Man(1, 2, 'hehe?')
man.init()

// 人是一个抽象, 通过依赖几个具体实现, 组合而成 , 有点像建造者模式
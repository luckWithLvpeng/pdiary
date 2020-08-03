/**
 * 来吧 , 展示
 * 用一个文件夹遍历的例子来说明
 */


class Folder {
    constructor(name) {
        this.name = name
        this.list = []
    }
    add(target) {
        this.list.push(target)
    }
    scan() {
        console.log("我是" + this.name + "文件夹")
        this.list.forEach(v => v.scan())
    }
}

class File {
    constructor(name) {
        this.name = name
    }
    add() {
        console.log("文件不能添加东西")
    }
    scan() {
        console.log("我是" + this.name + "文件")
    }
}

let entertainment = new Folder("娱乐")
let movie = new Folder("电影")
let music = new Folder("音乐")

entertainment.add(movie)
entertainment.add(music)

let afanda = new File("阿凡达.mkv")
let iceandfire = new File("冰与火之歌.flv")
let jht = new File("菊花台.mp3")
let dy = new File("大鱼.mp3")

movie.add(afanda)
movie.add(iceandfire)
music.add(jht)
music.add(dy)
console.log("------------")
movie.scan()
console.log("------------")
music.scan()
console.log("------------")
entertainment.scan()
console.log("------------")

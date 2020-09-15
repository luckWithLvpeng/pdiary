class Modal {
    constructor(id, gender) {
        this.gender = gender
        this.name = `张${gender}${id}`
    }
}
class ModalFactory {
    //单例模式
    static create(id, gender) {
        if (this[gender]) {
            return this[gender]
        }
        return this[gender] = new Modal(id, gender)
    }
}

class TakeClothesManager {
    // 添加衣服款式
    static addClothes(id, gender, clothes) {
        const modal = ModalFactory.create(id, gender)
        this[id] = {
            clothes,
            modal
        }
    }
    // 拍照
    static takePhoto(id) {
        const obj = this[id]
        console.log(`${obj.modal.gender}模特${obj.modal.name}穿${obj.clothes}拍了张照`)
    }
}

for (let i = 0; i < 50; i++) {
    TakeClothesManager.addClothes(i, '男', `服装${i}`)
    TakeClothesManager.takePhoto(i)
}

for (let i = 50; i < 100; i++) {
    const {addClothes, takePhoto} = TakeClothesManager
    TakeClothesManager.addClothes(i, '女', `服装${i}`)
    TakeClothesManager.takePhoto(i)
}
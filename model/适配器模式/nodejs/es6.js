class Camera {
    constructor(props) {
    }

    takePicture() {
        console.log("我在拍照")
    }

}

class Phone {
    constructor(props) {
        // 通过依赖关系, 使手机拥有了照相的功能 , 有些情况也可以用继承
        this.camera = new Camera();
    }
    getPhoto() {
        this.camera.takePicture();
    }
}

let phone = new Phone();
phone.getPhoto()

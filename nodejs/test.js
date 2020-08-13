
new Promise(function (resolve,reject) {

    setInterval(function() {
        reject( new Error("测试错误"))
        resolve(11)
    },1000)
}).then(res  => {
    console.log(res, 2222)
}).catch(err => {
    console.log(err)
    console.log(3333)
}).finally(()=> {
    console.log("最后")
})
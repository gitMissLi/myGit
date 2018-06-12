var boilWater = function () {
    return new Promise((resolve, reject) => {
        // 处理...
        resolve('boilWater')   // 可以传参数，then中接收
    })
}

var washGlass = function () {
    return new Promise((resolve, reject) => {
        resolve('washGlass')
    })
}

var prepareTeaLeaves = function () {
    return new Promise((resolve, reject) => {
        resolve('prepareTeaLeaves')
    });
}


// 需按照顺序处理
boilWater().then(function(boilWater) {
    return washGlass()
}).then(function (washGlass) {
    return prepareTeaLeaves()
}).then(function () {

})


// 没有顺序，全部执行
Promise.all([
    boilWater(),
    washGlass(),
    prepareTeaLeaves()
]).then()

var makTea = async function () {
    var boilWater = awiat boilWater()
    var washGlass = awiat washGlass()
    var prepareTeaLeaves = awiat prepareTeaLeaves()
}

var makTea = async function () {
    var result = awiat Promise.all([])
}

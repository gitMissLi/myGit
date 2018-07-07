// 箭头 函数返回： 可以直接使用括号()  而不需要使用return 处理
// let a = (a, c) => ({a:1, b:2, c:a, d:c})
// console.log(a(2,4))

// 箭头指向 => 函数所在的上下文环境
// let obj = {
//   fn: function () {
//     let a = () => {
//       console.log(this)
//     }
//     a()
//   }
// }

// // this指向的是obj
// obj.fn()

// // window
// let newFn = obj.fn;
// newFn()

// 模板字符串可以写表达式
// function fn () {
//   return 'Monly'
// }

// let str = `my name is ${ fn() } Li!`
// console.log(str)


// 变量解析结构
// let obj = {
//   firstName: 'monly',
//   lastName: 'li'
// }

// let { firstName: f, lastName: l } = obj
// console.log(`${f} ${l}`) // monly li

// 嵌套的结构解析
// let obj = {
//   firstName: 'monly',
//   lastName: 'li',
//   hj: {
//     a: 1,
//     b: 2
//   }
// }

// let { firstName, lastName, hj: {a, b} } = obj
// // console.log(hj) // 报错
// console.log(a) // 1
// console.log(b) // 2

// let { firstName, lastName, hj } = obj
// // console.log(hj) // {a: 1, b: 2}

// spread 展开
// let arr = [2,3,4]
// console.log(...arr) // 2 3 4
// console.log(['a', 'b', ...arr]) // [ 'a', 'b', 2, 3, 4 ]

// let obj = {a: 1, b: 2}
// console.log({
//   ...obj
// }) // { a: 1, b: 2 }

/**
 * 类及类的继承
 */
// function Human() {
//   this.eyes = 2
//   this.hands = 2
// }

// Human.prototype.singing = function () {
//   console.log('I can sing')
// }

// let monly = new Human()
// monly.singing() // I can sing

// 使用class关键字声明类
class Human {
  // 类的构造函数，初始化对象的属性
  constructor () {
    this.eyes = 2
    this.hands = 2
  }

  singing () {
    console.log('I can sing')
  }
}

let monly = new Human()
monly.singing() // I can sing

// 继承： 类可以继承另外一个类， 使用extends语法，可继承到另外一个类额所有属性和方法
class NormalMan extends Human {
  constructor (name='monly') {
    // 调用一下父类的构造函数
    // 当你继承了另外一个类的时候，必须使用
    super(name)

    // 重写内部继承的属性
    this.name = name

    // 解决this指向问题
    this.singing = this.singing.bind(this)  // 修改函数里面的指向问题
  }
  // 可以重新父类继承过来的方法
  singing () {
    console.log(this)
    console.log(`${this.name} can sing!`)
  }
}

let miss = new NormalMan('newMiss')
miss.singing()  // newMiss can sing!

// 重新定义新的函数调用
let fn = miss.singing
fn()  // 此时 this => undefined  打印报错
    // 解决方案： 在constructor中定义 函数的指向
  // 使用解决方案后，可正常指向 this 指向 NormalMan

// map filter some every reduce


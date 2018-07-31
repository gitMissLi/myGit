const _ = require('../underscore')

/**
 * indexBy: _.indexBy(list, iteratee)
 * 给定一个list和一个用来返回一个在列表中每个元素键的iterator函数或属性名
 * 返回一个每一项索引的对象
 */
let index = _.indexBy([{
    name: 'moe',
    age: 50
}, {
    name: 'larry',
    age: 40
}, {
    name:'curly',
    age:60
}], 'age')
console.log(index)
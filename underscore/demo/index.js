const _ = require('../underscore')

/**
 * each
 */
// _.each([1, 2, 3], function(value) {
//     console.log(value)
// })
// _.each({one: 1, two: 2}, function(value, key) {
//     console.log(value, key)
// })

// /**
//  * map
//  */
// let map1 = _.map([1, 2, 3], num => num * 3)
// console.log(map1)

// let map2 = _.map({one: 1, two: 2}, (value, key) => value * 3)
// console.log(map2)

// let map3 = _.map([[1, 2], [3, 4]], _.first)
// console.log(map3)

// /**
//  * reduce， 合并
//  */
// let reduce1 = _.reduce([1, 2, 3], (prevSum, current) => prevSum + current, 2)
// console.log(reduce1)

// /**
//  * reduceRight 从右侧开始合并
//  */
// let reduce2 = _.reduceRight([[0, 1], [2, 3], [4, 5]], (a, b) => a.concat(b), [])
// console.log(reduce2)

// /**
//  * find: 找到就返回，不会遍历整个数组list
//  */
// let find1 = _.find([1, 2, 3, 4, 6], num => num % 2 === 0)
// console.log(find1)

// /**
//  * filter
//  */
// let filter1 = _.filter([1, 2, 3, 4, 6], num => num % 2 === 0)
// console.log(filter1)

/**
 * reject: 与filter相反
 */

// /**
//  * where； 遍历list中的每一个值， 返回一个数组，该数组里的元素包含条件列出的键值对
//  */
// let where1 = _.where([{
//     name: 'miss',
//     age: 18,
//     sex: 'female'
// }, {
//     name: 'li',
//     age: 18,
//     sex: 'female'
// }, {
//     name: 'monly',
//     age: 18,
//     sex: 'male'
// }], { age: 18, sex: 'female'})
// console.log(where1)

/**
 * findWhere: 找到匹配的第一个值
 */
// let where2 = _.findWhere([{
//     name: 'miss',
//     age: 18,
//     sex: 'female'
// }, {
//     name: 'li',
//     age: 18,
//     sex:'female'
// }, {
//     name:'monly',
//     age: 18,
//     sex: 'male'
// }], { age: 18, sex: 'female' })
// console.log(where2)




const _ = require('../underscore')

/**
 * partition: _.partition(array, predicate)
 * 拆分一个数组为两个数组： 第一个数组其元素满足predicate函数；
 * 而第二个所有元素均不满足
 */
let partition = _.partition([0, 1, 2, 3, 4, 5], num => num % 2 === 0)
console.log(partition)
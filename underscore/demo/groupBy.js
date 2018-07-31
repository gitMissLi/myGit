const _ = require('../underscore')

/**
 * groupBy: _.groupBy(list, iteratee)
 * 将一个集合分组为多个集合， 通过iteratee返回的结果进行分组
 * 如果iteratee是一个字符串而不是函数，那么使用iteratee作为各元素的属性名进行分组
 */
let group1 = _.groupBy([1.2, 2.1, 2.4], num => Math.floor(num))
console.log(group1)

let group2 = _.groupBy(['one', 'two', 'three'], 'length')
console.log(group2)
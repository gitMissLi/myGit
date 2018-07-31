const _ = require('../underscore')

/**
 * countBy: _.countBy(list, iteratee)
 * 排 排序一个列表组成多个组，并返回各组中对象的数量计数；返回的是数目
 */

 let count = _.countBy([1, 2, 3, 4, 5], num => num % 2 === 0 ? 'even' : 'odd')

 console.log(count)
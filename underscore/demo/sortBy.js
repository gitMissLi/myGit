const _ = require('../underscore')

/**
 * sortBy: _.sortBy(list, iteratee, [context])
 * 返回排序后的list 如果传递iteratee参数， iteratee将作为list中每个值的排序依据
 */

 // 按照sin值来排序
 let sort = _.sortBy([1, 2, 3, 5, 6], num => Math.sin(num))
 console.log(sort)
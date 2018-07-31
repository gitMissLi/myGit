const _ = require('../underscore')

/**
 * max: _.max(list, [iteratee], [context])
 * 返回list中的最大值 如果有iteratee参数
 * iteratee将作为list中每个值的排序依据
 */

let max = _.max([{
    name: 'miss',
    age: 18
}, {
    name: 'monly',
    age: 20
}], el => el.age)
console.log(max)
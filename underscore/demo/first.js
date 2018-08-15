const _ = require('../underscore')

/**
 * 返回数组的第一个元素，传递n参数将返回数组中从第一个元素开始的n个元素;(返回数组中前n个)
 */

 let first = _.first([5, 3, 2, 1])
 console.log(first) // 5

 first = _.first([5, 3, 2, 1], 2)
 console.log(first) // [5, 3]
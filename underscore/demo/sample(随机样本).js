const _ = require('../underscore')

/**
 * sample: _.sample(list, [n])
 * 从list中产生一个随机样本。传递一个数字表示从list中返回n个随机元素；否则返回一个单一的随机项
 */
let sample1 = _.sample([1, 2, 3, 4, 5, 6])
console.log(sample1)

let sample2 = _.sample([1, 2, 3, 4, 5, 6], 4)
console.log(sample2)
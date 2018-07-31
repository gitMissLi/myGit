const _ = require('../underscore')

/**
 * invoke: _.invoke(list, methodName, *arguments)
 * 在list的每个元素上执行methodName方法，
 * 任何传递给invoke的额外参数，invoke都会在调用methodName时传递给它
 * 
 */
let invoke = _.invoke([
    [4, 1, 3],
    [3, 8, 1]
], 'sort')

console.log(invoke)
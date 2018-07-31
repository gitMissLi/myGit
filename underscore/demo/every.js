const _ = require('../underscore')

// 如果list中所有元素 都通过条件 就返回true
let every = _.every([true, 1, null, 'yes'], e => !!e)
console.log(every)
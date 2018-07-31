const _ = require('../underscore')

// list中有一个元素匹配
let some = _.some([{
    name:1,
    value:2
}, {
    name:2,
    value:3
}], el => el.name === 1)

console.log(some)
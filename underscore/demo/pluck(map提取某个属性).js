const _ = require('../underscore')

/**
 * pluck： _.pluck(list, propertyName)
 * map的简化，提取数组对象中的某个属性
 */
let pluk = _.pluck([{
    name: 'miss',
    age: 18
}, {
    name: 'monly',
    age: 20
}], 'name')
console.log(pluk)
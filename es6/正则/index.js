replace 的第二个参数可以是一个字符串也可以是一个函数

匹配子项： 小括号() 把正则的整体叫做（母亲） 然后把左边第一个括号的正则叫第一个子项

// var str = 'aaa'
// var re = /a/
//
// str = str.replace(re, 'b')  // baa

var str = '菲称仁爱礁附近17艘中国船均在菲军的监视之下'
str = str.replace(/菲称|中国船|监视/g, '*') // *仁爱礁附近17艘*均在菲军的*之下

str = str.replace(/菲称|中国船|监视/g, function(str) {
    console.log(str)
    var result = ''
    for (var i=0; i<str.length; i++) {
        result += '*'
    }
    return result;
})// **仁爱礁附近17艘***均在菲军的**之下



var str = '2013-6-7'
var re = /(\d-)+/g

str.replace(re, function($0, $1, $2) {

})

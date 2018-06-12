// 防冲突
_jQuery = window.jQuery
_$ = window.$

class2type = {'[Object String]':'string'}\


// before
function Aaa () {}
Aaa.prototype.init = function() {}
Aaa.prototype.css = function() {}

var a1 = new Aaa()
a1.init()
a1.css()

// jQuery
jQuery = function() {
    return new jQuery.prototype.init()
}
jQuery.prototype.css = function() {}
jQuery.fn.init.prototype = jQuery.prototype
jQuery().css()

rquickExpr <p>aaa  #div1
rsingleTag: <p></p> <div></div>

-webkit-margin-left  webkitMarginLeft
-ms-margin-left     MsMarginLeft

a1.constructor // 指向构造函数 容易被修改，所以需再指定

init()
    $('.box') $('div')
    $('<div></div>')

        if (闭合的标签) {
            $('<li>') $('<li>2</li>')
            math = [null, '<li>', null]
        } else {
            $('#div1') $('.box') $('<li>hello')
            match = null // $('.box')
            match = ["#div1", null, 'div1'] // $('#div1')
            match= ['<li>hello', '<li>', null] // $('<li>hello')
        }

        能进if(match && (match[1] || !context)) // $('#div') $("<li>")
            进一步判断 $('#div1') | $('<li>')

            $('<li>')
                获取原生的dom
                parseHTML
                $('<li>', {title: 'hello', html:'bcd'}) // 单标签 json格式
                    属性 | 函数
                    this.html()... | this.attr('')

            $("#div1")
                原生的获取元素

       // 复杂元素
       $(document).find('selector')

    $(document) $(this)
        nodeType ？？

    $(function() {}) => $(document).ready()

    $([]) $({})


// 转为数组
$.makeArray(dom选择的元素， 第二个参数-》json格式)

toArray： 转为数组
get：获取元素
    get() => toArray
    get(num) num： 负数-》从后面开始找； 正数-》得到顺序的值

pushStack： 放在栈里
    $('div').pushStack($('span')).css()
            // 操作的是span
            .end()  // 回到上一层（ret.prevObject)
            // 对div操作
            .css()

eq()
    pushStack(元素)

jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function () {}

$.extend() => 扩展工具 => $.xx()
    this -> $
$.fn.extend() => 扩展jq实例 => $().xx()
    this -> $.fn(原型)
当只写一个对象自变量的时候，jq中扩展插件的形式

$(function() {})    // dom加载 =》 DOMContentLoaded
$(document).ready(function(){}) =>$().ready()
window.onload = function() {}   // dom+资源（src）加载

jQuery.extend({
    expando: 生成唯一jq字符串（内部）
    noConflict: 防止冲突
    isReady
})


类型判断
$.type
    {}.toString.call([] | new Date | ...) == [object, Array|date..]

obj = new Object()
obj = {}
// 对象自变量
$.isPlainObject
    // 通过对象的hasOwnProperty 是否有 isPrototypeOf

$.parseHTML(str, document, boolean)
    str => '<li></li>'
    document => 存放的位置
    boolean => script标签是否创建

$.parseJSON: JSON.parse

$.nodeName(document.documentElement, 'html')    // 判断节点的节点名称

$.each

$.makeArray

$.grep // 过滤
    $.grep([], function() {过滤条件}[, true | false])   过滤出第二个函数与第三个参数不等的

$.map([], function() {})    // 组合成新的函数

$.proxy 更改this指向

access

swap =》获取隐藏元素信息
    display

$.callback(options)

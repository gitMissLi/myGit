(function(window) {
    var jQuery = function () {
        return new jQuery.prototype.init()  // 桥接模式
    }

    jQuery.fn = jQuery.prototype = {
        init: function () { // 方法 =》 构造函数

        }
    }

    jQuery.extend = jQuery.fn.extend = function () {
        var length = arguments.length
        var target = arguments[0] || {} // 默认第一个参数有是对象
        var i = 1   // 默认参数为一个
        var option
        if (typeof target !== 'object') {
            target = {}
        }

        if (length === i) {
            target = this   // 设置this指向
            i--             // 直传一个
        }

        for (; i < length; i++) {   // 2个以上
            if ((option = arguments[i]) !== null) {
                for (name in option) {
                    target[name] = option[name]
                }
            }
        }

        return target
    }

    // 扩展工具函数
    jQuery.extend({
        // 类数组 arguments NodeList length 数组 Array.from()
        makeArray: function (arr) {
            var result = []
            if (arr || arr.length) {
                return jQuery.merge(result, arr)
            }
        },
        merge: function(arg1, arg2) {
            var i = arg1.length  // 空数组 0
            var l = arg2.length  // 类素组 >= 1
            var j = 0
            if (typeof l === 'number') {
                // 合并
                for (; j < l; j++) {
                    arg1[i++] = arg2[j]
                }
            } else {
                while (arg2[j] !== undefined) {
                    arg1[i++] = arg2[j++]
                }
            }
            arg1.length = i
            return arg1
        }
    })

    jQuery.fn.init.prototype = jQuery.fn

    window.$ = window.jQuery = jQuery
})(this)

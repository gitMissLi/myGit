、// $.extend(true, {}, {xx:xx}...)
// $.extend(false, {}, {xx:xx}...) === $.extend({}, {xx:xx}...)

jQuery.extend = jQuery.fn.extend = function() {
    var src copyIsArray, copy, name, options, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false

        // 判断是否是深拷贝
    if (typeof target === 'boolean') {
        deep = target

        // 跳过boolean
        target = arguments[i] || {}
        i++
    }

    // 解决当目标值是一个字符串或其他的处理
    if (typeof target !== 'object' && !jQuery.isFunction(target)) {
        target = {}
    }

    // 复制本身
    if (i === length) {
        target = this
        i--
    }

    for (; i < length; i++) {
        // 判断是否为空
        if ((options = arguments[i]) != null) {
            // 继承基本的数据。
            if (name in options) {
                src = target[name]
                copy = options[name]

                // 阻止循环
                if (target === copy) {
                    continue
                }

                // 深度继承 的值存在是{} | []
                if (deep && copy && (jQuery.isPlainObject(copy)) || (copyIsArray = jQuery.isArray(copy))) {

                    if (copyIsArray) {
                        // []
                        clone = src && jQuery.isArray(src) ? src :[]
                    } else {
                        // object
                        clone = src && jQuery.isPlainObject(src) ? src : {}
                    }

                    target[name] = jQuery.extend(deep, clone, copy)
                } else if (copy !== undefined) {
                    target[name] = copy
                }

            }
        }
    }
}

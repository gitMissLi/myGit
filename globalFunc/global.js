(function (window, document) {

  // 函数扩展

  // 日期扩展 new Date('time').Format(xx)
  Date.prototype.Format = function (fmt) {
    if (!fmt) {
      fmt = 'yyyy-MM-dd hh:mm:ss'
    }

    var o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      'S': this.getMilliseconds() // 毫秒
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }

    return fmt
  }

  let oLs = {
      /*
      * 占位符替换
      * @param {String} sContent 含占位符的字符串
      * @param {Object} oData要替换占位符的点位父数据，根据对象的键名与点位符一一对应
      * @param {String} sUnValue 当值为空、null、NaN无效值时，使用该值来替换，如果该值也无效，则使用原来的值
      * @return {String} 返回替换后的字符串
      */
    // window.Ls.utils.substitute()
    substitute: function(sContent, oData, sUnValue) {
      if (!oData) {
        return sContent
      }

      let sValue = ""
      for (let p in oData) {
        sValue = oData[p]

        if (!sValue && sValue !== undefined) {
          sValue = sUnValue
        }

        sContent = sContent.replace(new RegExp('\\{' + p + '\\}', 'g'), sValue)
      }

      return sContent
    },

    /**
    * 深度拷贝
    */
    deepCopyObject: function () {
        // jquery
        $.extend(true, {}, {})
    },
    deepCopy: function (obj) {
        // 定义一个对象，用来确定当前的参数是数值还是对象
        var objArray = Array.isArray(obj) ? [] : {}

        if (obj && typeof obj === 'object') {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === 'object') {
                        objArray[key] = deepCopy(obj[key])
                    } else {
                        objArray[key] = obj[key]
                    }
                }
            }
        }
        return objArray
    }

  }

  window.Ls = {}
  window.Ls.utils = oLs

})(window, document)

// new ：一定是在堆里面开辟新空间
var SingleInstanceTest = (function() {
    var _instance = null
    var _default = {}

    function SingleInstance(ops = _default) {
        if (this instanceof SingleInstance) {
            if (_instance) {
                _instance._init(ops)
                return _instance;
            } else {
                this._init(ops)
                return _instance = this
            }
        } else {
            if (_instance) {
                _instance._init(ops)
                return _instance;
            } else {
                _instance = new SingleInstance()
                _instance._init(ops)
                return _instance
            }
        }
    }

    SingleInstance.prototype._init = function(ops) {
        // 与_defaults 合并
        for (var prop in ops) {
            this[prop] = ops[prop]
        }
    }

    return SingleInstance;
})()

var os1 = SingleInstanceTest({})
var os2 = new SingleInstanceTest({})

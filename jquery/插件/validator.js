// plug; 插件名称 jQuery引入了jq

(function(window, factory, plug) {
    factory(jQuery, plug)
})(this, function(jQuery, plug) {
    // 工厂设计模式
}, 'dataResult')

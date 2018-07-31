1、
  路由 有顺序 匹配了就不会再匹配下一个

2、require('url') => 解析url地址
   post 请求用 formidable 第三方包处理

   var form = new formidable.IncomingForm()
   form.parse(req, function(err, fields, files) {})

3、MongoDB

模块加载器主要处理的事：
  分析模块代码依赖的文件
  下载文件
  JS加载文件

seaJS =》异步 =》浏览器端
  // a.js
  if (flag) {
    require('b')
  } else {
    require('c')
  }

  seaJS两个文件都下载了，但是只加载了一个文件（用到哪个就加载哪个文件）

commonJS =》 同步=》node端
  // a.js
  if (flag) {
    require('b')
  } else {
    require('c')
  }
  node端不需要下载文件=》 同步
  commonJS不需要考虑下载，文件都在本地，是同步执行代码，用到了再去本地加载执行


requireJS =》异步=》浏览器端

  // a.js
  require(['b', 'c'], function (b, c) {
    if (flag) {
      b()
    } else {
      c()
    }
  })

  requireJS两个文件都下载了，而且文件都被js加载了

  等同于seaJS

  // a.js=> seajs
  var b = require('b')
  var c = require('c')

  //...执行代码
  if (flag) {
    b()
  } else {
    c()
  }


  区别：
    seajs： 用到的时候去准备模块；=》 效率好
    requireJS： 模块使用前已经准备好 =》效率差

  但如果c模块报错； seajs只有再用到的时候才能知道，而requirejs在开始加载时就知道了

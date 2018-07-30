import Vue from 'vue'
import Router from 'vue-router'

// 当你的项目页面越来越多之后，在开发环境之中使用 lazy-loading 会变得不太合适，每次更改代码触发热更新都会变得非常的慢。所以建议只在生产环境之中使用路由懒加载功能。
const _import = require('./_import_' + process.env.NODE_ENV)

// function _import (file) {
//   return () => import('@/views/' + file + '.vue')
// }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: _import('HelloWorld')  // () => import('@/views/HelloWorld.vue')
    },
    // todo
    {
      path: '/todo',
      name: 'Todo',
      component: _import('todo/index')
    },
    // echarts 图形
    {
      path: '/line-chart',
      name: 'lineChart',
      component: _import('echarts/line-chart')
    },
    {
      path: '/icon',
      name: 'icons',
      component: _import('svg-icons/index')
    }
  ]
})

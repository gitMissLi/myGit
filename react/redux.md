文档：
  https://github.com/camsong/redux-in-chinese

中文：
  gitBook： https://cn.redux.js.org/
  阮一峰：http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

英文：
  官网：https://redux.js.org/

开始：
  https://egghead.io/courses/getting-started-with-redux
1、安装
  npm install --save redux

  附加包：react绑定库和开发者工具
    npm install --save react-redux
    npm install --save-dev redux-devtools

2、要点
  应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。 惟一改变 state 的办法是触发 action，一个描述发生什么的对象。 为了描述 action 如何改变 state 树，你需要编写 reducers。

  import { createStore } form 'redux'

  /**
    * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
    * 描述了 action 如何把 state 转变成下一个 state。
    *
    * state 的形式取决于你，可以是基本类型、数组、对象、
    * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
    * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
    *
    * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
    * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
  */
  function counter(state = 0, action) {
    let { type } = action
    switch (type) {
      default:
        return state
    }
  }

  // 创建Redux store来存放应用的状态
  // API 是 { subscribe, dispatch, getState }
  let store = createStore(counter)

  // 可以手动订阅更新，也可以事件绑定到视图层
  store.subscribe(() => {
    console.log(store.getState())
  })

  // 改变内部state唯一方法是dispatch一个action action可以序列化，用日记记录和存储下来，后期还可以回放的方式执行
  store.dispatch({ type: ''})
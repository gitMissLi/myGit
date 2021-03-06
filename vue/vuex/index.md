https://vuex.vuejs.org/zh/

vuex原理分析：
http://web.jobbole.com/91187/

Vuex： store
  state:      定义状态
  mutations   设置state状态
  actions     外部事件调用 dispatch
  getters     获取状态
  modules     各个模块

默认使用：
this.$store.state.xx
this.$store.commit('mutations中的方法', '数据')
this.$store.dispatch('actions中的方法', '数据')

或者：
import {mapState, mapActions, mapGetters} from 'vuex'

computed: mapState([
  'x', 'xx', 'xxx'
])

computed: {
  ...mapState([
    'x', 'xx', 'xxx'
  ])
}

computed: mapState({
  x: state => state.x,
  xx: 'xx',
  xxx (state) {
    return state.xxx + this.localCount
  }
})

// this.x

getter 是store中的state派生出一些状态；可以返回一个函数
getters: {
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
store.getterrs.getTodoById(2)
getter在通过方法访问时， 每次都会去进行调用，而不会缓存结果

mapGetters(['getTodoById', 'xx])
mapGetters({
  getById: 'getTodoById'  // 把this.getById 映射为 this.$store.getters.getTodoById
})


Mutation: 更改store中状态的唯一方法是提交mutation；Mutation必须是同步函数
每一个mutation都有一个字符串的事件类型type和回调函数，回调函就是状态更改的地方
store.commit('事件类型type')
store.commit({
  type: '事件类型type',
  参数...
})
在对象中添加新属性
  Vue.set(obj, 'newProp', 123)
  state.obj = {...state.obj, newProp: 123}


mapMutations处理(同上)
mapMutations(['x', 'xx'])

Action：异步处理
store.dispatch('actions中的配置') 
可以在action中执行异步操作
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})

组合Action： 异步操作，如何得知action什么时候结束
  store.dispatch可以处理被触发的action的处理函数返回的Promise，并且store.dispatch仍旧返回Promise
  actions: {
    actionA ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('xx')
          resolve([...state.xxx]) // resolve()
        }, 1000)
      })
    },
    actionB ({dispatch, commit}) {
      return dispatch('actionA').then(() => {
        commit('xx')
      })
    }
  }
  actions: {
    async actionA ({commit}) {
      commit('gotData', await getData())
    },
    async actionB ({ dispatch, commit}) {
      await dispatch('actionA') // 等待actionA完成
      commit('gotOtherData', await getOtherData())
    }
  }
  store.dispatch('actionA').then((xx) => {})

一个store.dispatch在不同模块中可以触发多个action函数，这种情况下，只有当所有触发函数完成后，返回的Promise才会执行

methods: {
  ...mapActions([
    '函数'
  ])
}
// this.函数名()

Module: 每个模块 都拥有自己的state...
  const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
  }

  const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... }
  }

  const store = new Vuex.Store({
    modules: {
      a: moduleA,
      b: moduleB
    }
  })

  store.state.a // -> moduleA 的状态
  store.state.b // -> moduleB 的状态


模块中 => 得到模块下的; 第一个参数是模块空间名称字符串
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  })
},
methods: {
  ...mapActions('some/nested/module', [
    'foo',
    'bar'
  ]),// 等同于下面
  ...mapActions([
    'some/nested/module/foo',
    'some/nested/module/bar'
  ])
}

// 或者创建一个命名空间辅助函数
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')
computed: {
  ...mapState({
    a: state => state.a,
    b: state => state.b
  })
},
methods: {
  ...mapActions([
    'foo',
    'bar'
  ])
}





// 数据变化
push
this.$set(data, index, new)
splice(index, 1)  // 删除
splice(index, 1, new) // 修改
Vue.set(obj, key, newValue)
import { createStore } from 'redux'

const $addCounter = $('.counterBox .addCounter')
const $counterPanel = $('.counterBox .counterPanel')
const $hasAll = $('.allSel .val')
const $maximum = $('.maximum .val')
const $allCount = $('.allCount .val')

const store = createStore(counter)

function counter(state = [], action) {
  let { type, id } = action

  // state中不需要放整个new Counter()的值
  switch (type) {
    case 'ADD_COUNTER':
      return [...state, {
        id: new Date().getTime(), // 唯一标记
        value: 0
      }]
    case 'INCREMENT':
      return state.map(o => {
        if (o.id === id ) {
          return Object.assign({}, o, {
            id: ++o.value
          })
        }
        return o
      })
    case 'DECREMENT':
      return state.map(o => {
        if (o.id === id) {
          return Object.assign({}, o, {
            value: --o.value
          })
        }
        return o
      })
    default:
      return state
  }
}

class Counter {
  constructor (store, {id, value}) {
    this.store = store
    this.value = value
    this.id = id
    this.elt = $('<div class="counter"></div>')

    let incrementBtn = this.incrementBtn = $('<button class="add"></button>')
    let decrementBtn = this.decrementBtn = $('<button class="sub"></button>')
    let oddBtn = this.oddBtn = $('<button class="addIfOdd"></button>')
    let asyncBtn = this.asyncBtn = $('<button class="addAsync"></button>')
    let num = this.num = $(`<span>${this.value}</span>`)

    this.elt.append(decrementBtn, num, incrementBtn, oddBtn, asyncBtn)

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.addIfOdd = this.addIfOdd.bind(this)
    this.asyncAdd = this.asyncAdd.bind(this)

    incrementBtn.click(this.increment)
    decrementBtn.click(this.decrement)
    oddBtn.click(this.addIfOdd)
    asyncBtn.click(this.asyncAdd)
  }

  increment () {
    // this.store.dispatch({ type: 'INCREMENT', id: this.id})
    // this.store.dispatch(increment(this.id))
    boundIncrement(this.id)
  }

  decrement () {
    if (this.value === 0) return
    // this.store.dispatch({ type: 'DECREMENT', id: this.id})
    // this.store.dispatch(decrement(this.id))
    boundDecrement(this.id)
  }

  addIfOdd () {
    if (this.value % 2 === 0) return
    // this.store.dispatch({ type: 'INCREMENT', id: this.id})
    // this.store.dispatch(increment(this.id))
    boundIncrement(this.id)
  }

  asyncAdd () {
    setTimeout(() => {
      // this.store.dispatch({ type: 'INCREMENT', id: this.id})
      // this.store.dispatch(increment(this.id))
      boundIncrement(this.id)
    }, 1000)
  }
}

/**
 * action处理： 将action独立出来
 * @param {*} id 
 */
function increment (id) {  
  return { type: 'INCREMENT', id}
}

function decrement (id) {
  return { type: 'DECREMENT', id}
}

// action 中不一定只有action 还有一些逻辑处理

const boundIncrement = id => store.dispatch(increment(id))
const boundDecrement = id => store.dispatch(decrement(id))

$addCounter.click(ev => {
  // 改变数据
  store.dispatch({ type: 'ADD_COUNTER' })
})

store.subscribe(() => {
  let state = store.getState()

  // 重绘视图
  $counterPanel.html('')
  state.forEach(o => {
    $counterPanel.append(new Counter(store, o).elt)
  })

  $hasAll.html(state.every(o => o.value !== 0) + '')
  $maximum.html(state.reduce((prev, current) => {
    return prev > current.value ? prev : current.value
  }, 0))
  $allCount.html(state.reduce( (prev, current) => prev + current.value, 0))
})
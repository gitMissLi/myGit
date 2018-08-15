import { createStore } from 'redux'

const store = createStore(counter)

function counter (state = 0, action) {
  let { type } = action
  switch (type) {
    case 'INCREMENT':
      return ++state
    case 'DECREMENT':
      return --state
    default:
      return state
  }
}

$(document).click(ev => {
  store.dispatch({ type: 'INCREMENT' })
})

store.subscribe(() => {
  console.log(store.getState())
})
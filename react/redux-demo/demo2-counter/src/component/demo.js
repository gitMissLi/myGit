import { createStore } from 'redux'

const store = createStore(counter)

function counter (state = { value: 0 }, action) {
  let { type } = action
  switch (type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        value: state.value + 6
      })
    case 'DECREMENT':
      return Object.assign({}, state, {
        value: state.value - 6
      })
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
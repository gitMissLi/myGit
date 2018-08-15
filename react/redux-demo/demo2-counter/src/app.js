require('common/style/main.scss')


// require('./component/demo')
// require('./component/counterByDOM')
// require('./component/counterByReduxThunk')
// require('./component/counterByCombineReducer')

import {createStore, applyMiddleware } from 'react-dux'
import thunk from 'redux-thunk'
import reducer from 'reducer'
import { increment, decrement, addIfOdd, asyncAdd } from 'actions'
import CounterPanel from 'component/counter/CounterPanel'

const store = createStore(reducer, applyMiddleware(thunk))

const boundIncrement = id => store.dispatch(increment(id))
const boundDecrement = (id, value) => store.dispatch(decrement(id, value));
const boundAddIfOdd = (id, value) => store.dispatch(addIfOdd(id, value));
const boundAsyncAdd = (id) => store.dispatch(asyncAdd(id));
const addCounter = panelName => store.dispatch({type: 'ADD_COUNTER', panelName})

let propTypes = {
  actions: PT.objectOf(PT.func),
  // state: PT.object,
  state: PT.shape({
    A: PT.arrayOf(PT.object),
    B: PT.arrayOf(PT.object)
  }),
  addCounter: PT.func
}
export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { actions, state, addCounter } = this.props
    return (
      <div>
         <CounterPanel {...{
           data: state.A,
           actions,
           addCounter,
           panelName: 'A'
         }}></CounterPanel>
         <CounterPanel {...{
           data: state.B,
           actions,
           addCounter,
           panelName: 'B'
         }}></CounterPanel>
      </div>
    )
  }
}

App.propTypes = propTypes

function render() {  
  ReactDOM.render(
    <App
      actions={{
        boundAddIfOdd,
        boundAsyncAdd,
        boundDecrement,
        boundIncrement
      }}
      {
        ...{
          state: store.getState(),
          addCounter
        }
      }
    ></App>,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)
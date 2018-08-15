require('common/style/main.scss')

import {createStore, applyMiddleware, bindActionCreators } from 'react-dux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from 'reducer'
// import { increment, decrement, addIfOdd, asyncAdd } from 'actions'
import * as actionsCreators from 'actions'
import CounterPanel from 'component/counter/CounterPanel'

const store = createStore(reducer, applyMiddleware(thunk))

// let propTypes = {
//   actions: PT.objectOf(PT.func),
//   // state: PT.object,
//   state: PT.shape({
//     A: PT.arrayOf(PT.object),
//     B: PT.arrayOf(PT.object)
//   }),
//   addCounter: PT.func
// }
export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    // let { actions, state, addCounter } = this.props
    // Provider => props中存在的属性
    let { A, B, addCounter, addIfOdd, asyncAdd, decrement, increment } = this.props
    return (
      <div>
         <CounterPanel {...{
           data: A,
           actions: {addIfOdd, asyncAdd, decrement, increment},
           addCounter,
           panelName: 'A'
         }}></CounterPanel>
         <CounterPanel {...{
           data: B,
           actions: {addIfOdd, asyncAdd, decrement, increment},
           addCounter,
           panelName: 'B'
         }}></CounterPanel>
      </div>
    )
  }
}

// App.propTypes = propTypes

// 使用高阶组件 =》 生成组件 两个参数 app用到的state, dispatch 函数
App = connect(
  state => state,
  dispatch => bindActionCreators(actionsCreators, dispatch)
)(App)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 类组件中才有state
class MagicNumber extends Component {
  // 加了constructor 后，必须加super()
  constructor (props) {
    super(props)

    console.log(props)

    // 设置状态
    this.state = {
      name: 'monly',
      number: Math.random()
    }
  }

  render () {
    let { number, name } = this.state
    console.log(1)
    return (
      <div>
        <p>{ name }</p>
        <p>{ number }</p>
        <button onClick={(event) => {
          console.log(event.nativeEvent)
          event.stopPropagation()
          this.setState({
            number: Math.random()
          })
          console.log(this.state)
          this.setState((preState, props) => {
            console.log(preState)
            return {
              name: 'Miss'
            }
          })
        }}>change number</button>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <MagicNumber />
  </div>,
  document.getElementById('root')
)
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
        <button onClick={(function(event) {
          // this指向
        }).bind(this)}>test function</button>
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

class Sun extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: props.num
    }
  }

  componentDidMount () {
    console.log('sun mount')
  }

  componentDidUpdate () {
    console.log('sun 更新')
  }

  componentWillUnmount () {
    console.log('sun 卸载')
  }

  render () {
    return (
      <div ref={el => this.outDiv=el}></div>
    )
  }
}

ReactDOM.render(
  <div>
    <MagicNumber />
  </div>,
  document.getElementById('root')
)
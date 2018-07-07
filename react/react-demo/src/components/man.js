import React , { Component } from 'react'

export default class Man extends Component {
  render () {
    console.log(this.props)
    let { name } = this.props
    
    return (
      <div className="man">
        <p>I am {name}</p>
      </div>
    )
  }
}
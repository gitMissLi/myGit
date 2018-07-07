import React from 'react'
import PT from 'prop-types'

export default function People(props) {
  console.log(props)
  return (
    <div className="people">
      <p>I am miss Li</p>
      { props.children }
      <p>{ props.name }</p>
    </div>
  )
}

// 定义默认值，没有传值时使用
People.defaultProps = {
  name: '----'
}

// 数据类型验证
People.propTypes = {
  name: PT.string // PT.func | PT.string.isRequired
}
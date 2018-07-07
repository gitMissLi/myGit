// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

// 引入或直接定义
import People from './components/People'
import Man from './components/man'
// 自己写的结构，通过JS渲染到界面上
// JSX 本质上也是js代码

/**
 *  通过babel 将jsx语法显示的转为 javascript  因此页面中需引入React
 * 
 *  React.createElement(
 *    'div',
 *    null,
 *    React.createElement(
 *      'h1',
 *      null,
 *      '\u521D\u6B21\u4F7F\u7528'
 *    ),
 *    '\u4F60\u597D\uFF0CReact\uFF01'
 *  )
 * 
 * */

console.log(
  <div>
    <h1>初次使用</h1>
    你好，React！
  </div>
)

/**
 * {
 *    type      div
 *    children 
 *      你好,React!
 *      {
 *        type  h1
 *        children
 *          初次使用
 *      }
 * }
 * 
 * 通过 document.createElement('div')...
 * 
 * JSX其实就是 写结构的语法糖而已
 * 它会被babel这个工具转变成js代码 ，这份js代码运行之后会得到一个对象
 * 这个对象其实就是 VirtualDom（虚拟dom）
 * 
 * */


 /** 
  * 1、JSX中使用表达式 {  }
  * 2、JSX中的嵌套
  * 3、JSX中的闭合 <div />
  * 4、样式 className
  * 5、属性
  *   -相连的属性要变成驼峰式
  *   关键字属性需要变成另一种方式
  */

let s1 = 'Hello'
let s2 = 'World'

function sum (a, b) {
  return a + b
}

let jsx1 = (
  <div>
    <p>我是jsx1</p>
  </div>
)

let jsx2 = (
  <div>
    <p>我是jsx2</p>
    这里是jsx2中jsx{jsx1}
  </div>
)

// 不加外层div 会报错； 加了外层div 不符合规范
// 为了解决 => Fragment
let jsx3 = (
  <Fragment>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </Fragment>
)

// 定义组件 1
// function People () {
//   return (
//     <div className="people">
//       <p>I am miss Li</p>
//     </div>
//   )
// }

// 定义组件 2
// class Man extends React.Component {
//   render () {
//     return (
//       <div className="man">
//         <p>I am Monly Li</p>
//       </div>
//     )
//   }
// }

// 类组件 vs 函数组件
// 接受props的不同
// 类组件 有实例， 函数组件没有实例

// 在自定义属性里面可以直接写一些属性，然后接上一些值
// 在函数组件里面，通过第一个参数来接受props
// 在类组件里面，通过组件实现下面的props： this.props
// 数据总是从顶层流向底层 => 单向数据流

// children

// defaultProps 默认属性

ReactDOM.render(
  <div className="wrap">
    <h1 style={{
      color: 'red',
      marginLeft: 50
    }}>初次使用</h1>
    你好，React！
    { `${s1} ${s2}` }
    <p>{ sum(1, 3) }</p>
    { jsx1 }
    { jsx2 }
    <ul>{ jsx3 }</ul>
    <div />
    <People
     name="missLi">
      <p>我是people下面的children</p>
    </People>
    <People />
    <Man name="monly" />
  </div>,
  document.getElementById('root')
)

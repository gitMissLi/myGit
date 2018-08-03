// 使用cnpm 
  1）
    1、 npm i -g nrm

    2、 nrm use cnpm

  2）
    1、npm install -g cnpm --registry=https://registry.npm.taobao.org
    2、cnpm -v 测试

// 创建react项目

  1、下载react命令
    npm install -g create-react-app

  2、选择react项目的位置下
    create-react-app my-react（文件名）

  3、到该目录下
    cd my-react

  4、启动项目
    npm start

// react项目：
  1、引入 
    import React from 'react'
    import ReactDom from 'react-dom'

    ReactDom.render(
      <div></div>,                        // 创建的dom
      document.getElementByById('root')   // 挂载dom的元素位置
    )

  2、表达式 { } 

  3、定义方式
      function xx(props) { return () }
      class xx extends React.Component {
        // 写了constructor 必须加上super()
        constructor () {
          super()
        }
        render () {
          // this.props
          return ()
        }
      }

      类组件 vs 函数组件
      接受props的不同
      类组件 有实例， 函数组件没有实例

      在自定义属性里面可以直接写一些属性，然后接上一些值
      在函数组件里面，通过第一个参数来接受props
      在类组件里面，通过组件实现下面的props： this.props
      数据总是从顶层流向底层 => 单向数据流

  4、Fragment
    import React, { Fragment } from 'react'
    不创建dom的包裹层 => 类似于vue的template

  5、children 组件子元素
        props.children
  
  6、defaultProps 默认属性值
      当组件中没有传值时，使用默认值

  7、数据验证 prop-types
      import PT from 'prop-types'
        array | bool | number | object | string | symbol
        isRequired (必填)

        node
          可以用于渲染的东西：element、string、number
          不能为对象、函数、布尔，因为其不能渲染
        element
          react元素

  8、内部state状态 => 详见index2.js
      类组件才有内部状态： state
      类： 在constructor中 prop 当做参数处理 =》 其他方法，入render 使用this.props
            this.state = {}

          状态的更新: 只写改变的数据
            setState({
              key: value
            })

      setState => 更新this.state的值 => render方法再次执行生成新的dom结构，比较新旧virtual dom结果，对变化的部分，在页面中进行更新
  
    state:
      内部状态： 每个组件都有自己的state
      合并更新： 一个函数里多次改变setState 。 只会处理一次
      异步更新： 更新完后不是立即改变
      可以接受回调函数: (prevState, props)
          此时的prevState中的值会包含在此之前setState中改变的最新的值
        
  9、事件(doc -> 合成事件)： 驼峰式处理
        onClick
            <button onClick={(event) => {
              console.log()
              this.setState({
                number: Math.random()
              })
            }}>change number</button>

        this指向
          · 代码中 行内绑定 | 箭头 函数
            {(function(event) {
              // this
            }).bind(this)}  // bind会返回新的函数 =》 每次render都会更新，会耗性能

          // 箭头函数
          · xx = () => {

          }

          · constructor | function 中 重新定义一个函数
            this.handleFunction = this.handleFunction.bind(this)


  10、生命周期 (只有类组件才有声明周期)
      Mounting 装载
        constructor
          执行一次
        static getDerivedStateFromProps (prop, state)
          在render之前，给你一次改变 state 的机会， 不改变就返回 null
        render
        componentDidMount
          执行一次
          获取真正的dom元素

      Update 更新
        父组件更新，（已挂载）子组件也会随着更新
        static getDerivedStateFromProps (prop, state)
        shouldComponentUpdate(nextProps, nextState)
          用于优化性能（比较state的值是否一样 => 是否需要更新）
          返回一个bool值
            true 组件正常更新
            false 后面的不执行，页面不更新
        render
        getSnapshotBeforeUpdate(prevProp, prevState)
          它执行的时候，新的virtual dom结构已经计算出来了，但是，浏览器的dom元素还没更新
          正式更新前 return 的值在DidUpdate中可接收
        componentDidUpdate(prevProp, prevState, snapShot)
          更新已经完成的时候调用
          获取真正的 dom元素

      Unmounting 卸载
        componentWillUnmount
          只执行一次
      
      错误处理
        componentDidCatch(error, info)

  11、获取DOM
      1、字符串 （不推荐使用）
        <div ref="divRef"></div>
        this.refs.divRef

      2、回调
        <div ref={el => this.outDiv=el}></div>
        在mount中使用
          this.outDiv
      
      3、createRef
          在constructor中
            this.outDiv = createRef()

          <div ref={this.outDiv}></div>

          使用： this.outDiv.current

  12、组件受控受控
    组件变化 react是否接管

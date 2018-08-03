import React, { Component, createRef, Fragment } from 'react'
import Todo from './components/todo'
import Footer from './components/footer'
import './index.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todoList:[],
      view: 'all'
    }

    this.todoInput = createRef()
  }

  // 新增todo
  addTodo = ev => {
    let { value } = this.todoInput.current

    if (ev.keyCode !== 13 || !value.trim()) return
    
    let { todoList } = this.state

    this.setState({
      todoList: [
        {
          id: Math.random(),
          content: value,
          hasCompleted: false
        },
        ...todoList
      ]
    }, () => {
      // 更新完成后的回调
      this.todoInput.current.value = ''
    })
  }

  // 删除todo
  deleteTodo = (id) => {
    let { todoList } = this.state

    todoList = todoList.filter(elt => {
      return elt.id !== id
    })

    this.setState({
      todoList
    })
  }
  
  // toggle 更改todo的状态
  toggleTodo = id => {
    let { todoList } = this.state

    todoList = todoList.map(elt => {
      if (elt.id === id) {
        elt.hasCompleted = !elt.hasCompleted
      }
      return elt
    })

    this.setState({
      todoList
    })
  }

  // 全选 | 非全选 处理
  toggleAll = ev => {
    // 获取点击时checkbox的check值
    let checked = ev.target.checked

    let { todoList } = this.state

    todoList = todoList.map(elt => {
      elt.hasCompleted = checked
      return elt
    })

    this.setState({
      todoList
    })
  }

  // 修改todo
  alterTodoContent = (id, content) => {
    let { todoList } = this.state

    todoList = todoList.map(elt => {
      if (elt.id === id) {
        elt.content = content
      }
      return elt
    })

    this.setState({
      todoList
    })
  }

  // 清空选中
  clearCompleted = () => {
    let { todoList } = this.state

    todoList = todoList.filter(elt => !elt.hasCompleted)

    this.setState({
      todoList
    })
  }

  // 修改视图
  changeView = (view) => {
    this.setState({
      view
    })
  }

  render () {
    let { todoList, view } = this.state

    // let activeTodo = todoList.every(elt => elt.hasCompleted)
    let activeTodo = todoList.find(elt => elt.hasCompleted === false)
    let completedTodo = todoList.find(elt => elt.hasCompleted)

    // let { match: {url}, location: {pathname} } = this.props

    // 剩余的条目
    let leftItem = 0
    // 获取过滤的数据
    let showTodoData = todoList.filter(elt => {
      if (!elt.hasCompleted) {
        leftItem++
      }

      switch (view) {
        case 'all':
          return true
        case 'active':
          return !elt.hasCompleted
        case 'completed':
          return elt.hasCompleted
        default:
          return true
      }
    })
    let todos = showTodoData.map(elt => {
      return (
        <Todo
          key={elt.id}
          {...{
            id: elt.id,
            content: elt.content,
            hasCompleted: elt.hasCompleted,
            deleteTodo: this.deleteTodo,
            toggleTodo: this.toggleTodo,
            alterTodoContent: this.alterTodoContent
          }}
        />
      )
    })

    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            type="text"
            className="new-todo"
            placeholder="type something here"
            ref={this.todoInput}
            onKeyDown={this.addTodo}
          />
        </header>
        {
          !!todoList.length && (
            <Fragment>
              <section className="main">
                {/* 全选按钮 */}
                <input
                  type="checkbox"
                  className="toggle-all"
                  checked={!activeTodo && !!todoList.length}
                  onChange={this.toggleAll}
                />
                <ul className="todo-list">
                  {todos}
                </ul>
              </section>
              <Footer
                {...{
                  clearCompleted: this.clearCompleted,
                  showClearButton: completedTodo && !!todoList.length,
                  view,
                  changeView: this.changeView,
                  leftItem
                }}
                />
            </Fragment>
          )
        }
      </div>
    )
  }
}

export default App;

import React, { Component, createRef } from 'react'

export default class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inEdit: false
    }

    this.editInput = createRef()
  }

  // 双击显示框事件
  onEdit = () => {
    let input = this.editInput.current
    this.setState({
      inEdit: true
    }, () => {
      // 设置input为focus状态 设置显示值
      input.value = this.props.content
      input.focus()
    })
  }

  // 保存更改 | 删除
  commitAlter = () => {
    let { current: input } = this.editInput
    let content = input.value
    let { id, deleteTodo, alterTodoContent } = this.props

    if (content.trim()) {
      // 有值时保存
      alterTodoContent(id, content)
    } else {
      // 没值时删除
      deleteTodo(id)
    }

    // 清空数据
    input.value = ''
  }

  // blur -》退出编辑状态
  onBlur = (ev) => {
    // keydown enter后会再次执行blur 因此：blur处理时 如果已经处理过则跳过
    if (!this.state.inEdit) return

    this.setState({
      inEdit: false
    })

    this.commitAlter()
  }

  // keydown => enter | esc => 退出编辑状态
  onKeyDown = (ev) => {
    let keyCode = ev.keyCode
    if (keyCode === 27 || keyCode === 13) {
      // esc
      this.setState({
        inEdit: false
      })
    }

    if (keyCode === 13) {
      // enter
      this.commitAlter()
    }
  }

  render () {
    let { 
      id,
      content,
      hasCompleted,
      deleteTodo,
      toggleTodo
     } = this.props

    let { inEdit } = this.state

    let className = inEdit ? 'editing' : ''
    className = hasCompleted ? className + ' completed' : className
    return (
      <li
        // className="completed"
        // className="editing"
        className={className}
      >
        <div className="view">
          {/* 勾选按钮 */}
          <input
            type="checkbox"
            className="toggle"
            checked={hasCompleted}
            onChange={() => toggleTodo(id)}
          />
          {/* todo 的内容 */}
          <label
           ref="label"
           onDoubleClick={this.onEdit}>
            { content }
          </label>
          {/* 删除按钮 */}
          <button
            className="destroy"
            ref="btn"
            onClick={() => deleteTodo(id)}
          ></button>
        </div>
        {/* 编辑 todo 的输入框 */}
        <input
          type="text"
          className="edit"
          ref={this.editInput}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
        />
      </li>
    )
  }
}
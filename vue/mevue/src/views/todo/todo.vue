<template>
  <li class="todo" :class="{completed: todo.done, editing: editing}">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo(todo)">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo(todo)"></button>
    </div>
    <input
      v-show="editing"
      v-active-focus="editing"
      type="text"
      class="edit"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit" />
  </li>
</template>

<script>
export default {
  name: 'todo',
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    // 编辑时，设置其focus状态
    // 'active-focus': {
    //   update (el, { value }) {
    //     if (value) {
    //       el.focus()
    //     }
    //   }
    // }
    // 在bind 和 update都会执行的简写
    'active-focus'(el, { value }, { context }) {
      // 只有编辑时，才会有focus状态
      if (value) {
        el.focus()
        // or=> contxt: li.todo
        context.nextTick(o => {
          el.focus()
        })
      }
    }
  },
  methods: {
    // 删除
    deleteTodo (todo) {
      this.$emit('deleteTodo', todo)
    },
    editTodo ({ todo, value }) {
      this.$emit('editTodo', {todo, value})
    },
    toggleTodo (todo) {
      this.$emit('toggleTodo', todo)
    },
    // 取消编辑，恢复到初始的值
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    },
    // 确认编辑
    doneEdit (e) {
      const value = e.target.value.trim()
      const { todo } = this

      if (!value) {
        this.deleteTodo(todo)
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    }
  }
}
</script>


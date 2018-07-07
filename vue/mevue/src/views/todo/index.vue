<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input type="text" v-focus class="new-todo" placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </header>
    <section class="main" v-show="todos.length">
      <input :checked="allChecked" id="toggle-all" type="checkbox" class="toggle-all" @change="toggleAll({done: !allChecked})" />
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <todo
         v-for="(todo, index) in filteredTodos"
         :key="index"
         :todo="todo"
         @deleteTodo="deleteTodo"
         @editTodo="editTodo"
         @toggleTodo="toggleTodo"></todo>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li
         v-for="(val, key) of filters"
         :key="key">
         <a
          :class="{selected: visibility === key}"
          @click.prevent="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
const STORAGE_KEY = 'todos'
const filters = {
  'all': todo => todo,
  'active': todo => todo.filter(o => !o.done),
  'completed': todo => todo.filter(o => o.done)
}
import Todo from './todo'
export default {
  components: {
    Todo
  },
  data () {
    return {
      // 当前列表展示的信息
      todos: [],
      // 当前显示的
      visibility: 'all',
      filters
    }
  },
  computed: {
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    }
  },
  directives: {
    // 自定义指令v-focus
    'focus': {
      // dom插入时，设置其focus
      inserted (el) {
        el.focus()
      }
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : w + 's',
    capitalize: s => s.charAt(0).toUpperCase() + s.substr(1)
  },
  methods: {
    setLocalStorage () {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    },
    deleteTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    editTodo ({todo, value}) {
      todo.text = value
    },
    toggleTodo (todo) {
      todo.done = !todo.done
    },
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.todos.push({
          done: false,
          text
        })
      }
      e.target.value = ''
    },
    toggleAll ({ done }) {
      this.todos.forEach(todo => {
        todo.done = done
      })
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss';
</style>


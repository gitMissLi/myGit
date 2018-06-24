<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input type="text" class="new-todo" placeholder="What needs to be done?" />
    </header>
    <section class="main">
      <input id="toggle-all" type="checkbox" class="toggle-all" />
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <li class="todo">
          <div class="view">
            <input type="checkbox" class="toggle">
            <label>33</label>
            <button class="destroy"></button>
          </div>
          <input type="text" class="edit">
        </li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong>1</strong>left
      </span>
      <ul class="filters">
        <li><a>222</a></li>
      </ul>
    </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // 当前列表展示的信息
      todos: []
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss';
</style>


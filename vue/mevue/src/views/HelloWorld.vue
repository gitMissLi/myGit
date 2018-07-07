<template>
  <div class="hello">
    <p>Reversed message: {{ reversedMessage() }}</p>
    <button @click="changeMessage">change</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    reversedMessage () {
      return this.msg.split('').reverse().join('')
    },
    changeMessage () {
      this.msg = 'world!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>
    <toDoList />
  </div>
</template>

<script>

import toDoList from '@/components/toDoList'

export default {
  name: 'App',
  components: {
    toDoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>
    <toDoList
    v-bind:todos="todos"
    @remove-todo="removetodo"
    />
  </div>
</template>

<script>

import toDoList from '@/components/toDoList'

export default {
  name: 'App',
  data(){
    return {
       todos:[
         {id:1, title: "Buy the dog", completed: false},
         {id:2, title: "Buy the cat", completed: false},
         {id:3, title: "Buy the plants", completed: false},
       ]
    }
  },
  components: {
    toDoList
  },
  methods:{
    removetodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    }
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

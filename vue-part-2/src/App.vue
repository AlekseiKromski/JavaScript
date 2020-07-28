<template>
  <div id="app">
    <Header></Header>
    <list :peoples="people" @message="displayMessage"></list>

  </div>
</template>

<script>

  import List from './components/list'
  import Header from './components/Header'

  export default {
    components: {
      List, Header,
    },
    data(){
      return {
        people: ['Max', 'Leo', 'George']
      }
    },
    methods:{
      displayMessage(message){
        this.people.push(message)
      }
    }
  }
</script>


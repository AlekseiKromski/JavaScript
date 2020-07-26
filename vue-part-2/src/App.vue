<template>
  <div id="app">
    <h1>{{title}}</h1>
    <List></List>
  </div>
</template>

<script>

  import List from './components/list'

  export default {
    components: {
      'List': List
    },
    data(){
      return {
        title: 'Homes'
      }
  }
}
</script>

<style>

</style>

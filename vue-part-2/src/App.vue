<template>
  <div id="app">
    <h2>Outer title</h2>
    <list :peoples="people"></list>
  </div>
</template>

<script>

  import List from './components/list'

  export default {
    components: {
      List,
    },
    data(){
      return {
        people: ['Max', 'Leo', 'George']
      }
  }
}
</script>


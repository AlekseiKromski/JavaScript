<template>
  <div id="app">
    <h2>Outer title</h2>
    <list></list>
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
        slotTitle: 'tsetsetset'
      }
  }
}
</script>

<style scoped>
  h2{
    color: red;
  }
</style>

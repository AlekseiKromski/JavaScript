<template>
  <div id="app">
    <h2>Inner title</h2>
    <List></List>
  </div>
</template>

<script>
import List from './components/List';

export default {
  data: function(){

  },
  components: {
    List
  }
}
</script>

<style scoped>
  h2{
    color:red;
  }
</style>

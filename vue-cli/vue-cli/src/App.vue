<template>
  <div id="app">
    {{title}}
    <List></List>
  </div>
</template>

<script>
import List from './components/List';

export default {
  data: function(){
    return {
      title: "my app"
    }
  },
  components: {
    "List": List
  }
}
</script>

<style>

</style>

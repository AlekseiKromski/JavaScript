<template>
  <div id="app">
    <List v-bind:peoples="peoples"></List>
  </div>
</template>

<script>
import List from './components/List';

export default {
  
  components: {
    List
  },
  data: function(){
    return { 
      peoples: ['Max', 'Jack', 'Maksim']
    }
  },
}
</script>

<style scoped>

</style>

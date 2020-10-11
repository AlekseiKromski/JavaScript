<template>
  <div id="app">
    <List v-bind:peoples="peoples" v-on:message="displayMessage"></List>
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
      peoples: ['Max', 'Jack', 'Maksim'],
    }
  },
  methods:{
    displayMessage: function(message){
      this.peoples.unshift(message)
    }
  }
}
</script>

<style scoped>

</style>

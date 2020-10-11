<template>
  <div id="app">
    <Header></Header>
    <List v-bind:peoples="peoples" v-on:message="displayMessage"></List>
  </div>
</template>

<script>
import List from './components/List';
import Header from './components/Header'
export default {
  
  components: {
    List, Header
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

<template>
  <div id="app">
    <div class="nav">
      <h1>Vuex application</h1>
      <button class="btn btn-success" v-on:click="btnClick">Card</button>
    </div>
    <Products></Products>
    <!-- If statment -->
    <Card v-if="dropDownState"></Card>  
  </div>
</template>

<script>
import Products from './components/Products';
import Card from './components/Card';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Products: Products,
    Card: Card,
  },
  computed:{
      ...mapGetters(['dropDownState'])
  },
  methods:{
    ...mapActions(['toogleDropDown']),
    btnClick: function(){
        this.toogleDropDown();
    }
  }
}
</script>

<style>

body{
  margin: 0;
}
.nav{
  width: 100%;
  min-height: 50px;
  background-color: #292929;
  padding: 0;
  margin: 0;
  
}
.nav h1{
  color: white;
  margin: 0;
  padding: 1%;
}
</style>

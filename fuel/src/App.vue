<template>
  <div id="app">
    <navbarComponent></navbarComponent>
    <div class="container-fluid mt-md-5">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-10 col-md-8 col-xl-3 mt-5 mt-md-0">
          <consumptionComponent></consumptionComponent> 
        </div>
        <div class="col-11 mt-5 mt-md-0 col-xl-7">
          <tableComponent></tableComponent> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav from './components/navigation';
import consumption from './components/app.components/consumption';
import table from './components/app.components/table';

export default {
  name: 'App',
  components: {
    navbarComponent: nav,
    tableComponent: table,
    consumptionComponent: consumption
  }
}
</script>

<style>

</style>

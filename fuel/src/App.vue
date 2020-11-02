<template>
  <div id="app">
    <navBar></navBar> 
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-8 col-xl-4">
          <consumption></consumption> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav from './components/navigation'
import consumption from './components/app.components/consumption'

export default {
  name: 'App',
  components: {
    navBar: nav,
    consumption: consumption
  }
}
</script>

<style>

</style>

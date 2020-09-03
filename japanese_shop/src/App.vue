<template>
  <div id="app">
    <navComponent></navComponent>
    <slider></slider>
  </div>
</template>

<script>
import slider from "@/components/slider/sliderComponent";
import navComponent from "@/components/nav/navComponent";
export default {
  name: 'App',
  components: {
    navComponent, slider
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <Slot>
      <h2 slot="title">Test h</h2>
      <p slot="text">Test p</p>
    </Slot>
  </div>
</template>

<script>
import Slot from './components/Slot';

export default {
  data: function(){

  },
  components: {
    Slot
  }
}
</script>

<style>

</style>

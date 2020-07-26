<template>
  <div id="app">
    <Slot>
      <h2 slot="title">{{slotTitle}}</h2>
      <p slot="p">Test</p>
    </Slot>
  </div>
</template>

<script>

  import Slot from './components/Slot'

  export default {
    components: {
      Slot,
    },
    data(){
      return {
        slotTitle: 'tsetsetset'
      }
  }
}
</script>

<style scoped>

</style>

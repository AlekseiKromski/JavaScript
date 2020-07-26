<template>
  <div id="app">
    <button type="button" @click="component='Reg'">Reg</button>
    <button type="button" @click="component='Aut'">Aut</button>
    <keep-alive><component :is="component"></component></keep-alive>
  </div>
</template>

<script>

  import List from './components/list'
  import Aut from './components/Aut'
  import Reg from './components/Reg'


  export default {
    components: {
      'List': List,
      'Aut': Aut,
      'Reg': Reg,
    },
    data(){
      return {
        title: 'Homes',
        component: 'Aut'
      }
  }
}
</script>

<style>

</style>

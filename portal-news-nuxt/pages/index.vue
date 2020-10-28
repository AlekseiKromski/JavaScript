<template>
  <div class="mt-5">
    <headerComponent></headerComponent>

  </div>
</template>

<script>
import header from '@/components/index/header';
import axios from 'axios';
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  layout: 'Default',
  components: {
    headerComponent: header,
  },
  async fetch({ store, params }){
    await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      store.commit('news/setNews', response.data);
    })
  }
}
</script>

<style>

</style>

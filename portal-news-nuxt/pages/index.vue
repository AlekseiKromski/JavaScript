<template>
  <headerComponent topNews="getTopNews"></headerComponent>
</template>

<script>
import header from '@/components/index/header';
import { mapMutations } from 'vuex';
import {mapGetters} from 'vuex';
export default {
  layout: 'Default',
  components: {
    headerComponent: header,

  },
  computed:{
    ...mapGetters({
      getTopNews: 'news/getTopNews'
    })
  },
  methods:{
    ...mapMutations({
      setNews: 'news/setNews'
    })
  },
  async created(){
    this.$axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setNews(response)
    })
  },
  mounted(){
    console.log(getTopNews);
  }
}
</script>

<style>

</style>

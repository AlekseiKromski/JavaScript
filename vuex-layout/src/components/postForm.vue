<template>
  <form @submit.prevent="submit" action="">
      <input type="text" v-model="title">
      <input type="submit" value="make post">
  </form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data: function(){
        return {
            title: ""
        }
    },
    methods:{
        ...mapMutations(['createPost']),
        submit: function(){
            this.createPost({
                id: Date.now(),
                title: this.title,
            });
        }
    }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <postForm></postForm>
    <hr>
    <h1>{{postsCount}}</h1>
    <ul>
      <li v-for="post in validPosts" v-bind:key="post.id">
        <h2>{{post.title}}</h2>

      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import postForm from "./components/postForm";

export default {
  name: 'App',
  computed: mapGetters(['validPosts', 'postsCount']),
  components: {
    "postForm": postForm
  },
  async mounted(){
    this.$store.dispatch('fetchPosts', 4);
  }
}
</script>

<style>

</style>

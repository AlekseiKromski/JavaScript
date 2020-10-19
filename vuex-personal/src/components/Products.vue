<template>
    <div class="container mt-5">
        <div class="row justify-content-center text-center">
            <div class="col-4 m-2 shadow p-1" v-for="title in getTitles" v-bind:key="title.id">
                <h1>{{title.title}}</h1>
                <button class="btn btn-success" v-on:click="addToBuscket(title.title)">
                    buy
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'App',
  components: {

  },
  computed:{
      ...mapGetters(['getTitles'])
  },
  mounted(){
      this.$store.dispatch('getTitles');
  },
  methods:{
      addToBuscket: function(title){
          this.$store.dispatch('addToBuscket',{title: title});
      }
  }
}
</script>

<style>

</style>

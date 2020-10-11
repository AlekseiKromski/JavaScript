<template>
  <div>
      <h1>{{title}}</h1>
      <hr>
  </div>
</template>

<script>

import {bus} from '../main'

export default {
    data: function(){
        return {
            title: "Header"
        }
    },
    methods:{

    },
    created: function(){
        bus.$on('message', data => {
            this.title = data;
        })
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="container card-custom ">
        <div class="row justify-content-center text-center">
            <div class="card-custom-block shadow col-3">
                <ul>
                    <li  v-for="buscket in getBuscket" v-bind:key="buscket.title">
                        {{buscket.title}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {

  },
  computed: {...mapGetters(['getBuscket'])},
  mounted(){
      //console.log(this.getBuscket());
  }
}
</script>

<style>
.card-custom{
    position: fixed;
    top: 2%;
    right: -28%;
}
.card-custom-block{
    background: white;
}
</style>

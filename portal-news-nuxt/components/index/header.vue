<template>
    <div class="container-fluid header">
        <div class="row justify-content-center text-left align-items-center h-100">
            <div class="col-6 p-5" v-for="news in getHeaderNew" v-bind:key="news.id" ><h3>{{news.title}}</h3></div>
        </div>    
    </div> 
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data: function(){
        return {
            news: []
        }
    },
    computed:{
        ...mapGetters({
            getHeaderNew: 'news/getHeaderNew'
        })
    }

}
</script>

<style scoped>
    .header .col-6{
        background: linear-gradient( 200deg, yellow, green);
        color: white;
    }
</style>
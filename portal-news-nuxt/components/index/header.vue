<template>
    <div class="container-fluid header">
        <div class="row justify-content-center">
            <div class="col-6" v-for="news in topNews" v-bind:key="news.id">
                <h3>Top</h3>
            </div>    
        </div>    
    </div> 
</template>

<script>
export default {
    props:['topNews'],
    computed:{
        
    },
    mounted(){
        console.log(this.topNews);
    }
}
</script>

<style>
    
</style>
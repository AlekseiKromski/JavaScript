<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <!-- <div v-if="newsLoader">
                <h4>Loading</h4>
            </div> -->
            <sliderComponent></sliderComponent>


        </div>
    </div>
</template>

<script>
    import sliderComponent from "./components/sliderComponent";
    export default {
        components:{
            sliderComponent,
        },
        data(){
            return {
                posts: [],
                newsLoader: true,
                newsComplete: false
            }
        },
        mounted() {
            axios.get('/api/getNews').then( response => {
                response.data.forEach(element => {
                    if(element.img === null){
                        element.img = "img/no_image.png";
                    }
                    element.text = element.text.substring(0, 40) + ' ...';
                    this.posts.push(element)
                });
                this.newsLoader = false;
                this.newsComplete = true;
            })
        },
        methods:{

        }
    }
</script>

<style>
    .row{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .card{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .card-title{
        max-height: 72px;
        white-space: nowrap; /* Отменяем перенос текста */
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

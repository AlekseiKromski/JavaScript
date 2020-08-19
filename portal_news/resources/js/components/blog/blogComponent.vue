<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div v-if="newsLoader">
                <h4>Loading</h4>
            </div>
            <div class="col-md-3 mb-5" v-for="post in posts">
                <div v-if="newsComplete" class="card mr-4" style="width: 18rem;"  >
                    <img :src="post.img" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title" :alt="post.title">{{post.title}}</h5>
                        <p class="card-text">{{post.text}}</p>
                        <a href="#" class="btn btn-primary">More</a>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
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

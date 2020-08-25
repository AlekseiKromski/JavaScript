<template>
    <div class="container-fluid">
        <div class="row" style="width: 100%">
            <h3 class="mb-3 pb-2 name">News:</h3>
            <div v-if="newsLoader" class="col-12">
                <h4>Loading</h4>
            </div>
            <div v-if="!newsLoader && p.show" class="col-12 p-0 animate__animated" v-for="p in posts">
                <div class="row m-0">
                    <div class="col-4">
                        <img :src="p.img"  class="imgBlock" alt="">
                    </div>
                    <div class="col-8">
                        <h6><a href="#"  class="new_title">{{p.title}}</a></h6>
                        <p><a href="#" class="new_text">{{p.text}}</a></p>
                        <a href="#" class="mt-2">{{p.category_name}}</a>
                    </div>

                </div>
                <hr>    
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:['categories'],
        data(){
            return{
                posts: [],
                newsLoader: true,
            }
        },
        methods:{

        },
        mounted(){

            axios.get('/api/getNews').then( response => {
                response.data.forEach(element => {

                    if(element.img === null){
                        element.img = "img/no_image.png";
                    }
                    element.text = element.text.substring(0, 120) + ' ...';
                    this.categories.forEach(e => {
                        if(element.category === e.id){
                            element.category_name = e.name;
                            this.posts.push(element);

                        }
                    })
                });
                this.newsLoader = false;

            })
        },
        created() {
            this.$eventBus.$on('changeList', (sc) => {
                if(sc.length === 0){
                   this.posts.forEach(p => {
                       p.show = true;
                   })
                }else{
                    let on = [];
                    sc.forEach( sc => {
                        this.posts.forEach(p => {
                            if(p.category === sc){
                                on.push(p)
                            }
                        })
                    });

                    this.posts.forEach(p => {
                        p.show = false;
                    })

                    on.forEach(on => {
                        on.show = true;
                    });
                }





            })
        },
    }
</script>

<style>
    .new_text{
        color: #212529;
        font-family: 'Alata', sans-serif;
    }
    .new_text:hover{
        color: #212529;
        text-decoration: none;
    }
    .new_title{
        color: #212529;
        font-family: 'Alata', sans-serif;
        font-weight: 600;
    }
    .new_title:hover{
        color: #212529;
        text-decoration: none;
    }
    .name{
        border-bottom: 1px solid black;
        width: 100%;
    }
    .imgBlock{
        width: 100%;
    }
</style>

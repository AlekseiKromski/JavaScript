<template>
    <div class="container-fluid">
        <div class="row" style="width: 100%">
            <h3 class="mb-3 pb-2 name">News:</h3>
            <div v-if="newsLoader" class="col-12">
                <h4>Loading</h4>
            </div>
            {{selectedCategories}}
            <div v-on:changeList="test()" v-if="!newsLoader" class="col-12 p-0" v-for="p in posts">
                <div class="row m-0">
                    <div class="col-4" v-bind:style="{background: `url(${p.img})`, 'background-size': 'cover','background-position': 'center'}"></div>
                    <div class="col-8">
                        <h6><a href="#"  class="new_title">{{p.title}}</a></h6>
                        <p><a href="#" class="new_text">{{p.text}}</a></p>
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['selectedCategories'],
        data(){
            return{
                posts: [],
                newsLoader: true,
                selected: [],
            }
        },
        methods:{

        },
        mounted(){
            console.log(this.selectedCategories)
            axios.get('/api/getNews').then( response => {
                response.data.forEach(element => {

                    if(element.img === null){
                        element.img = "img/no_image.png";
                    }
                    element.text = element.text.substring(0, 120) + ' ...';
                    this.posts.push(element)

                });

                this.newsLoader = false;
                //this.$eventBus.$on('changeList', this.test());

            })
        },
        created() {
            this.$eventBus.$on('changeList', (categories) => {

                // for(let post in this.posts){
                //     categories.forEach((e,post) => {
                //         if(e.selected){
                //             console.log(post.category)
                //             if(e.id == post.category){
                //                 console.log('selected')
                //             }
                //         }
                //     })
                // }

                let posts2 = [];

                this.posts.forEach(p => {
                    categories.forEach((c) => {
                        if(c.selected){
                            console.log(c.selected)
                            if(c.id == p.category){
                                posts2.push(p);
                            }else if(c.name == 'All'){
                                console.log('all')
                            }
                        }
                    })
                })
                console.log(posts2)
                this.posts = posts2;
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
</style>

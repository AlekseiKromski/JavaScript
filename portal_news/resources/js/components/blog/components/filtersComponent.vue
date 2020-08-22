<template>
    <div class="container-fluid p-3 rounded shadow">
        <div class="row" style="width: 100%">
            <h3 class="mb-3 pb-2 name">Categories:</h3>
            <div v-if="newsLoader" class="col-12 p-0" >
                <h4>Loading</h4>
            </div>
            <div v-if="!newsLoader" class="col-12 p-0" >
                <ul class="p-0">
                    <li class="mb-2" v-for="c in categories">
                        <input type="checkbox">
                        {{c.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                posts: [],
                newsLoader: true,
                categories: [],
            }
        },
        methods:{

        },
        mounted(){
            axios.get('/api/getCategories').then( response => {
                response.data.forEach(e => {
                    this.categories.push(e);
                })
                this.newsLoader = false;
            })
        }
    }
</script>

<style>
    ul{
        list-style: none;
    }
    .name{
        border-bottom: 1px solid black;
        width: 100%;
    }
</style>

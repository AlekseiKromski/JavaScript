<template>
    <div class="container-fluid p-3 rounded shadow">
        <div class="row" style="width: 100%">
            <h3 class="mb-3 pb-2 name">Categories:</h3>
            <div class="col-12 p-0" >
                <ul class="p-0">
                    <li class="mb-2" v-for="c in categories">
                        <input v-model="c.selected" type="checkbox" v-on:click="selectCategory($event)">
                        {{c.name}}
                    </li>
                </ul>
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
                selectedCategories: []
            }
        },
        mounted(){
            console.log(this.categories)
        },
        methods:{
            selectCategory(event){
                this.$emit('getSelectedCategory', this.categories)
                this.$eventBus.$emit('changeList', this.categories);

            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
    }
    .name{
        border-bottom: 1px solid black;
        width: 100%;
    }
</style>

<template>
    <div class="container-fluid p-3 rounded shadow">
        <div class="row" style="width: 100%">
            <h3 class="mb-3 pb-2 name">Categories:</h3>
            <div class="col-12 p-0" >
                <ul class="p-0">
                    <li class="mb-2" v-for="c in categories">
                        <input v-bind:id="c.id" type="checkbox" v-on:click="selectCategory($event)">
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
                let id = Number(event.target.id);

                if(event.target.checked){

                    this.selectedCategories.push(id);

                    let result = [];

                    for (let s of this.selectedCategories) {
                        if (!result.includes(s) && s !== null) {
                            result.push(s);
                        }
                    }

                    this.selectedCategories = result;

                    this.$eventBus.$emit('changeList', this.selectedCategories);
                }else{

                    //If unchecked, then delete this id
                    this.selectedCategories = this.selectedCategories.filter(sc => {
                       if(sc !== id){
                           return sc;
                       }
                    });
                    this.$eventBus.$emit('changeList', this.selectedCategories);
                }
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

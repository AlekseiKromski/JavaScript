<template>
    <div class="container-fluid blog">
        <div class="row justify-content-center">
            <!--<sliderComponent></sliderComponent>-->
            <sliderComponent_2></sliderComponent_2>
            <div class="container-fluid mt-5">
                <div class="row" style="width: 100%;">
                    <div class="col-7 news">
                        <newsComponent v-bind:selectedCategories="selectedCategories"></newsComponent>
                    </div>
                    <div class="col-1 "></div>
                    <div class="col-4 filters">
                        <filtersComponent v-bind:categories="categories"  v-on:getSelectedCategory="getSelectedCategories($event)"></filtersComponent>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import sliderComponent from "./components/sliderComponent";
    import newsComponent from "./components/newsComponent";
    import filtersComponent from "./components/filtersComponent";
    import sliderComponent_2 from "./components/sliderComponent_2";
    export default {
        props:['categories'],
        components:{
            sliderComponent, newsComponent, filtersComponent, sliderComponent_2
        },
        data(){
            return {
                selectedCategories: this.categories,
            }
        },
        mounted() {

        },
        methods:{
            getSelectedCategories(e){
                this.selectedCategories = e;
            }
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
    .blog{
        margin-top: 104px;
    }
</style>

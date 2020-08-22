<template>
    <div class="container-fluid blog">
        <div class="row justify-content-center">
            <!-- <div v-if="newsLoader">
                <h4>Loading</h4>
            </div> -->
            <sliderComponent></sliderComponent>
            <div class="container-fluid mt-5">
                <div class="row" style="width: 100%;">
                    <div class="col-7 news">
                        <newsComponent></newsComponent>
                    </div>
                    <div class="col-1 "></div>
                    <div class="col-4 filters">
                        <filtersComponent></filtersComponent>
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
    export default {
        components:{
            sliderComponent, newsComponent, filtersComponent
        },
        data(){
            return {

            }
        },
        mounted() {
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
    .blog{
        margin-top: 104px;
    }
</style>

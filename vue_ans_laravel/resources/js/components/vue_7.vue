<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <line-chart :chart-data="data" :height="300" :options="{responsive: true, maintainAspectRation: true}"></line-chart>
            </div>
        </div>
    </div>
</template>

<script>
import lineChart from "./lineChart";
    export default {
        mounted() {
            this.update();
        },
        methods:{
            update(){
                this.is_refresh = true;
                axios.get('/getJSON').then((response) => {
                    this.data = response.data;
                });
            }
        },
        data: () => {
            return {
                data: []
            }
        },
        components: {
            lineChart
        }

    }
</script>

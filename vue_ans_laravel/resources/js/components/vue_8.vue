<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <line-chart :chart-data="data" :height="300" :options="{responsive: true, maintainAspectRation: true}"></line-chart>
                <input type="checkbox" v-model="realtime"> realtime
                <input type="text" v-model="label">
                <input type="text" v-model="sale">
                <button @click="sendData">update</button>
            </div>
        </div>
    </div>
</template>

<script>
import lineChart from "./lineChart";
    export default {
        mounted() {
            var socket = io('http://localhost:3000');
            socket.on('channel:App\\Events\\newEvent', function (data){
                this.data = data.result;
            }.bind(this))
            this.update();
        },
        methods:{
            update(){
                axios.get('/start/socket-chart').then((response) => {
                    this.data = response.data;
                });
            },
            sendData(){
                axios({
                    method: 'get',
                    url: "/start/socket-chart",
                    params: {
                        label: this.label,
                        sale: this.sale,
                        realtime: this.realtime
                    }
                }).then((response) => {
                    this.data = response.data;
                });
            }

        },
        data: () => {
            return {
                data: [],
                realtime: false,
                label: "",
                sale: 500

            }
        },
        components: {
            lineChart
        }

    }
</script>

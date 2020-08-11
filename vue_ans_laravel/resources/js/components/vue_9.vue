<template>
    <div class="container">
        <div class="form-group messageArea">
            <div class="text-center" style="width: 100%">--- YOU HAVE BEEN JOINED ---</div>
            <div v-for="message in dataMessages">{{message}}</div>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enetr your message" v-model="message">
            <div class="input-group-append">
                <button @click="sendMessage" class="btn btn-success" type="submit">send</button>
            </div>
        </div>
    </div>
</template>

<script>
import lineChart from "./lineChart";
    export default {
        mounted() {
            var socket = io('http://localhost:3000');
            socket.on('channel-message:App\\Events\\newMessage', function (data){

                //Push to arr
                this.dataMessages.push(data.message)
            }.bind(this))
        },
        methods:{
            sendMessage(){
                axios({
                    method: 'get',
                    url: "/start/send-message",
                    params: {
                        message: this.message,
                    }
                }).then((response) => {
                    this.message = '';
                });

            }

        },
        data: () => {
            return {
                dataMessages: [],
                message: ""

            }
        }

    }
</script>

<style>
    .messageArea{
        margin: 1%;
        padding: 1%;
        min-height: 100px;
        box-shadow: 0px 0px 10px 1px black;
        border-radius: 10px 10px;
    }
</style>

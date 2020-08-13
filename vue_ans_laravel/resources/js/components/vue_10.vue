<template>
    <div class="container">
        <div class="form-group messageArea">
            <div class="text-center" style="width: 100%">--- YOU HAVE BEEN JOINED ---</div>
            <div class="row form-group">
                <div class="col-sm-4">
                    <select multiple="" class="form-control" v-model="userSelect">
                        <option value="" v-for="u in users" :value="'news-action.' + u.id">{{u.email}}</option>
                    </select>
                </div>
                <div class="col-sm-12">

                </div>
            </div>
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
            socket.on("news-action." + this.user.id + ":App\\Events\\newPrivateMessage", function (data){

                //Push to arr
                this.dataMessages.push(JSON.parse(data.privateMessage.user).email + ": " + data.privateMessage.message);
            }.bind(this))
        },
        methods:{
            sendMessage(){
                if(this.userSelect.length){
                    this.userSelect.push('news-action.')
                    axios({
                        method: 'get',
                        url: "/start/send-private-message",
                        params: {
                            channels:  this.userSelect ,message: this.message, user: this.user
                        }
                    }).then((response) => {
                        this.dataMessages.push(this.user.email + ': ' + this.message)
                        this.message = '';
                    });
                }

            }

        },
        data: () => {
            return {
                dataMessages: [],
                message: "",
                userSelect: []
            }
        },
        props:[
            'users','user'
        ]

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

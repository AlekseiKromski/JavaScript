<template>
    <div class="container">
        <hr>
        <div class="row">
            <div class="col-sm-12">
                <textarea class="form-control" rows="12" readonly="">{{messages.join('\n')}}</textarea>
                <hr>
                <input type="text" class="form-control" v-model="textMessage" @keyup.enter="sendMessage">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
           return {
               messages: [],
               textMessage: ''
           }
        },
        mounted() {

            Echo.private('room.2').listen('PrivateChat', ({data}) => {
                this.messages.push(data.body);
            })
        },
        methods:{
            sendMessage(){
                axios.post('/messages', {body: this.textMessage, room_id: 2});
                this.messages.push(this.textMessage);
                this.textMessage = '';
            }
        }

    }
</script>

<style>

</style>

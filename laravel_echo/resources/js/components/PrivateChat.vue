<template>
    <div class="container">
        <hr>
        <div class="row">
            <div class="col-sm-8">
                <textarea class="form-control" rows="12" readonly="">{{messages.join('\n')}}</textarea>
                <hr>
                <input type="text" class="form-control" v-model="textMessage" @keyup.enter="sendMessage" @keydown="actionUser">
                <span v-if="isActive">{{isActive.name}} typing ...</span>
            </div>
            <div class="col-sm-4">
                <ul>
                   <li v-for="user in activeUsers">{{user}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['room','user'],
        data(){
           return {
               messages: [],
               textMessage: '',
               isActive: false,
               timer: false,
               activeUsers: []
           }
        },
        computed: {
            channel() {
                return Echo.join('room.' + this.room.id);
            }
        },
        mounted() {
            this.channel.here((users) => {
                this.activeUsers = users;
            }).joining((user) => {
                this.activeUsers.push(user);
            }).leaving((user) => {
                this.activeUsers.splice(this.activeUsers.indexOf(user, 1))
            }).listen('PrivateChat', ({data}) => {
                this.messages.push(data.body);
                this.isActive = false;
            }).listenForWhisper('typing', (e) => {
                this.isActive = e;

                if (this.timer) clearTimeout(this.timer);

                this.timer = setTimeout(()=>{
                    this.isActive = false;
                },2000);

            })
        },
        methods:{
            sendMessage(){
                axios.post('/messages', {body: this.textMessage, room_id: this.room.id});
                this.messages.push(this.textMessage);
                this.textMessage = '';
            },
            actionUser(){
                this.channel.whisper('typing', {
                    name: this.user.name
                })
            }
        }

    }
</script>

<style>

</style>

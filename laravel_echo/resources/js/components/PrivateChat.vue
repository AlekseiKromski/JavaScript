<template>
    <div class="container">
        <hr>
        <div class="row">
            <div class="col-sm-12">
                <textarea class="form-control" rows="12" readonly="">{{messages.join('\n')}}</textarea>
                <hr>
                <input type="text" class="form-control" v-model="textMessage" @keyup.enter="sendMessage" @keydown="actionUser">
                <span v-if="isActive">{{isActive.name}} typing ...</span>
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
           }
        },
        computed: {
            channel() {
                return Echo.private('room.' + this.room.id);
            }
        },
        mounted() {
            this.channel.listen('PrivateChat', ({data}) => {
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

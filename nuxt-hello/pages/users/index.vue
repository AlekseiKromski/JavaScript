<template>
    <section>
        <h1>Users page</h1>
        <ul>
            <li v-for="user in users" v-bind:key="user.id">
                <a href="" @click.prevent="openUser(user.id)">{{user.name}}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    async fetch({store}){
        console.log(store);
        if(store.getters['users/users'].length === 0){
            await store.dispatch('users/fetch');
        }
    },
    computed: {
        users(){
            return this.$store.getters['users/users'];
        }
    },
    methods:{
        openUser: function(user){
            this.$router.push('/users/' + user)
        }
    }
}
</script>
<template>
    <div>
        <h1>Users</h1>
        <ul>
            <li v-for="user in users" v-bind:key="user.id">
                <nuxt-link :to="`/users/${user.id}`">{{user.name}}</nuxt-link>

            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    //Запрос идет на сервере 
    async asyncData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return {
            users
        }
    },
    data: function(){
        return {
            users: []
        }
    }
}
</script>

<template>
    <li>
        <span v-bind:class="{
            done: todo.completed}
            ">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{todo.id}}</strong>
            {{todo.title}}
        </span>
        <button class="button" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>
    export default {
        props:{
            todo:{
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>
    li{
        border: 1px solid  black;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .button{
        background: chocolate;
        color: white;
        border-radius: 50%;
        font-weight: bold;
        border: 0px;
    }
    .done{
        text-decoration: line-through;
    }
    input{
        margin-right: 1rem;
    }
</style>
<template>
    <div>
        <ul>
            <toDoItem
            v-for="todo in todos"
            v-bind:todo="todo"
            v-on:remove-todo="removeToDo"
            />
        </ul>
    </div>
</template>

<script>
    import toDoItem from '@/components/toDoItem'
    export default {
        props: ['todos'],
        components: {
            toDoItem
        },
        methods:{
            removeToDo(id){
                this.$emit('remove-todo', id)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>

<template>
    <div>
        <addToDo @add-todo="addToDo" />
        <router-link to="/">home</router-link>
        <hr>
        <toDoList
                v-bind:todos="todos"
                @remove-todo="removetodo"
        />
    </div>
</template>
<script>

    import toDoList from '@/components/toDoList'
    import addToDo from '@/components/addTodoComponent'
    export default {
        name: 'App',
        data(){
            return {
                todos:[]
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    {
                        this.todos = json
                    }
                })
        },
        components: {
            toDoList,
            addToDo
        },
        methods:{
            removetodo(id){
                this.todos = this.todos.filter(t => t.id !== id)
            },
            addToDo(todo){
                this.todos.push(todo);
            }

        }
    }
</script>
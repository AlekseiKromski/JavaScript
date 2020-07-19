<template>
    <div>
        <addToDo @add-todo="addToDo" />
        <router-link to="/">home</router-link>
        <br>
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
        </select>
        <hr>
        <loader v-if="loading"></loader>
        <toDoList
                v-else-if="todos.length"
                v-bind:todos="filteredToDos"
                @remove-todo="removetodo"
        />
        <p v-else> No todos ! </p>
    </div>
</template>
<script>

    import toDoList from '@/components/toDoList';
    import addToDo from '@/components/addTodoComponent';
    import loader from '@/components/loader';
    export default {
        name: 'App',
        data(){
            return {
                todos:[],
                loading: true,
                filter: "all",
            }
        },
        // watch:{
        //     filter(value){
        //         console.log(value);
        //     }
        // },
        computed:{
            filteredToDos(){
                if(this.filter === 'all'){
                    return this.todos;
                }

                if(this.filter === 'completed'){
                    return this.todos.filter(t => t.completed)
                }

                if(this.filter === 'not-completed'){
                    return this.todos.filter(t => !t.completed)
                }
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    {
                        this.todos = json
                        this.loading = false;
                    }
                })
        },
        components: {
            toDoList,
            addToDo,
            loader
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
new Vue({
    //get dom access to vue.js
    el: "#app",

    //Filed for variables
    data: {
        currentTask: '',
        nextId: 3,
        tasks: [
            {id: 1, preview: '', isEditing: false, text: "Buy a dog",isComplete: false},
            {id: 2, preview: '', isEditing: false, text: "Buy a fish",isComplete: false},
            {id: 3, preview: '', isEditing: false, text: "Buy a jetBrains",isComplete: false}

        ]
    },
    methods:{
        addTask(){
            this.nextId++;
            this.tasks.push({
                id: this.nextId,
                text: this.currentTask,
                isComplete: false,
            })
            this.currentTask = '';
            console.log(this.tasks)
        },
        removeTask(id){
            this.tasks = this.tasks.filter(task => {
                return task.id !== id;
            })
        },
        changeTask(id) {
            this.tasks.forEach((task, i, tasks) => {
                if (task.id === id) {
                    task.isEditing = true;
                }
            })
        },
        hideEditingFields(task){
            task.isEditing = false;
        },
        changeAllTask(taskText, task){
            task.text = taskText;
            task.isEditing = false;
        }

    },
    computed:{

    }

})
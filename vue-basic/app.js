new Vue({
    el: "#app",
    data: {
        tasks: [
            {
                text: "Buy a dog",
                isCompleted: false,
                isEdit: false,
                editText: "Buy a dog",
            },
            {
                text: "Buy a milk",
                isCompleted: false,
                isEdit: false,
                editText: "Buy a milk",
            },
            {
                text: "Buy a course",
                isCompleted: false,
                isEdit: false,
                editText: "Buy a course",
            },
        ],
        text_input: "",
    },
    methods:{
        addNewTask: function(e){
            this.tasks.unshift({
                text: this.text_input,
                isCompleted: false,
                isEdit: false,
                editText: this.text_input,
            });
        },

        deleteTask: function(task){
            if(this.tasks.includes(task)){
                this.tasks = this.tasks.filter( t => {
                    if(task !== t){
                        return task;
                    }
                })
            }
        },

        changeTask: function(task){
            task.text = task.editText;
            task.isEdit = false;
        }
    }
});
new Vue({
    //Test git
    //get dom access to vue.js
    el: "#app",

    //Filed for variables
    data: {
        counter: 0
    },
    methods:{
        counterAdd(){
            this.counter++;
        }
    }
})
new Vue({
    //get dom access to vue.js
    el: "#app",

    //Filed for variables
    data: {
        name: 'world',
        job: 'programmer'
    },
    methods:{
        greet: function () {
            return 'Hello, ' + this.name;
        }
    }
})
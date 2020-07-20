new Vue({
    //get dom access to vue.js
    el: "#app",

    config:{
        keyCodes:{
            f2: 113
        }
    },

    //Filed for variables
    data: {
        counter: 0
    },
    methods:{
        changeName(){
            console.log('Name is changed!');
        }
    }
})
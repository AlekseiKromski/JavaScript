new Vue({
    //get dom access to vue.js
    el: "#app",

    //Add our personal key shortcut
    config:{
        keyCodes:{
            f2: 113
        }
    },

    //Filed for variables
    data: {
        a: 0,
        b: 0,
        Age: 20
    },
    methods:{

    },
    computed:{
        addtoA(){
            return this.a + this.Age;
        },
        addtoB(){
            return this.b + this.Age;

        }
    }

})
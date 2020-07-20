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
        error:false,
        success: false,
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
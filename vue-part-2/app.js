new Vue({
    //get dom access to vue.js
    el: "#app1",

    //Filed for variables
    data: {
        title: 'title'
    },
    methods:{
        changeTitle(){
            this.title = this.$refs.input.value;
        }

    },
    computed:{

    }

})


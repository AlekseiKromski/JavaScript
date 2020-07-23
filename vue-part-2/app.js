Vue.component('greet', {
    template: '<h2>{{test}}<button @click="changeTitle">ChangeTitle</button></h2>',
    data: function () {
        return {
            test: 'Hello from component'
        }
    },
    methods: {
        changeTitle(){
            this.test = 'Updated title';
        }
    }
});

new Vue({
    //get dom access to vue.js
    el: "#app1",

    //Filed for variables
    data: {
        title: 'Title in vue1'
    },
    methods:{


    },
    computed:{

    }

})


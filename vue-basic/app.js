new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        age: 20

    },
    computed:{
        addToA: function(){
            return this.a + this.age;
        },
        addToB: function(){
            return this.b + this.age;
        },
    }
});
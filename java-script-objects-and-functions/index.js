var person = {
    age: 22,
    name: 'Fedor',
    job: 'JS',
    display: function(time){
        setTimeout(function(){
            console.log(this.age, this.name, this.job);
        }.bind(this), time)
    }
}
person.display(1000)
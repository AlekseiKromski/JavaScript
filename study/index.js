/*
var obj = {
    color: 'red',
    year: 2015,
    person: {

    }
}
console.log(obj);

var car = {
    //...
}

function Car(name,year){
    this.name = name
    this.year = year
}

Car.prototype.getAge = function(){
    return new Date().getFullYear() - this.year
}

var ford = new Car("Ford",2015)
var bmw = new Car("BMW",2002)
console.log(ford);
console.log(bmw);

var ford = Object.create({
    getAge: function(){
        return new Date().getFullYear() - this.year

    }
},{
    name: {value: 'Ford',enumerable:true,writable: false,configurable:false},
    model: {value: 'Focus',enumerable:true,writable: false,configurable:false},
    year: {value: 2015, enumerable:true,writable: false,configurable:false},
    age: {
        enumerable: true,
        get: function(){
            console.log('Получаем возраст');     
            return new Date().getFullYear() - this.year
        },
        set: function(){
            console.log('Устанавливаем значение')
        }
    }
})

console.log(ford);
*/

var person = {
    name: 'Max',
    age: 28,
    job: 'Front-end'
}

for (var k in person){
    if(person.hasOwnProperty(k)){
        console.log(person[k])
    }
    
}

var keys = Object.keys(person).forEach(function(key){
    console.log(person[key]);
    
})
console.log(keys);

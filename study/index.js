/*
var car = {
    name: 'Ford',
    year: 2015,
    person: {

    }
}

//car.__proto__ => Object.prototype

console.log(car);



//Style guide (функции, которые являются классами (старый стандарт), пишуться с большой буквы)
function Car(name, year) {
    this.name = name
    this.year = year
}

Car.prototype.getAge = function (){
    return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'

var ford = new Car('Ford', 2000)
var bmw = new Car('BMW', 2002)

ford.color = 'red'

console.log(ford);
console.log(bmw);


*/

//Вид создание объектов

var ford = Object.create({
    calculateDistancePerYear: function(){
        Object.defineProperty(this, 'distancePerYear',{
            value: this.distance / this.age,
            enumerable: true,
            writable: false,
            configurable: false
        })
    }
},{
    name: {value: 'ford', enumerable:true, writable:false, configurable:false},
    model: {value: 'focus', enumerable:true, writable:false, configurable:false},
    year: {value: 2015, enumerable:true, writable:false, configurable:false},
    distance: {value: 120500, enumerable:true, writable:true, configurable:false},
    age: {
        enumerable:true,
        get: function(){
            //GET AGE
            return new Date().getFullYear() - this.year
        },
        set: function(){
            //SET AGE
        }
    }
})

for(var key in ford){
    if(ford.hasOwnProperty(key)){
        console.log(key, ford[key]);
    }
    
}

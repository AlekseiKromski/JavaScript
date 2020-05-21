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



var person = {
    name: 'Maks',
    age: '28',
    job: "front-end"
}

for(var key in person){
    if(person.hasOwnProperty(key)){  
        console.log(person[key]);
    }
}

//Получаем массив ключей и перебераем его
var keys = Object.keys(person).forEach(function(key){
    console.log(person[key]);
    
})



var createCounter = function(counterName){
    var counter = 0

    return {
        increment: function(){
            counter++
        },
        decrement: function(){
            counter--
        },
        getCounter: function(){
            return counter
        }
    }
}

var counterA = createCounter('Counter A')
var counterB = createCounter('Counter B')

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()


//1

var person = {
    name: 'Maks',
    age: '28',
    job: "front-end",
    displayInfo: function(ms){
        console.log(this)
        var self = this

        setTimeout(function(){
            console.log('Name: ', self.name)
            console.log('Age: ', self.age)
            console.log('Job: ', self.job)
        },ms)
    }
}
person.displayInfo(5000)



//2

var person = {
    name: 'Maks',
    age: '28',
    job: "front-end",
    displayInfo: function(ms){
        console.log(this)
        setTimeout(function(){
            console.log('Name: ', this.name)
            console.log('Age: ', this.age)
            console.log('Job: ', this.job)
        }.bind(this),ms)
    }
}
person.displayInfo(5000)



function printObj(objName){
    console.log("Printind: ", objName);
    
    for(var key in this){
        if(this.hasOwnProperty(key)){
            console.log('[' + key + ']', this[key]);
            
        }
    }
}

var person = {
    name: 'Maks',
    age: 28,
    job: "front-end",
    friends: ['Elena','Igor']
}

var car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}

var printPerson = printObj.bind(person);

//printObj.call(car,'Car')

printObj.apply(person, ['Car'])

var a = [1,2,3]
var b = [5,'Hello',6]

Array.prototype.double = function(){
    var newArray = this.map(function(item){
        if(typeof item === 'number'){
            return Math.pow(item,2)
        }else if(typeof item === 'string'){
            return item += item
            
        }
    });

    return newArray
}

var newA = a.double()
var newB = b.double()

console.log('A',newA);
console.log('B',newB);


let color = 'red'

color = {color: "yellow"}

console.log(color);

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 2000)
}

const HEX = '#FFF'

const array = [1,2]

const obj = {
    a: 1
}

array.unshift(4)

obj.b = 2

console.log( );


document.querySelector('h1').style.color = HEX

console.log(HEX);


function getAge(year){
    const current = new Date().getFullYear()
    return current - year
}

//Стрелочная функция
const calculateAge = (year) => {
    const current = new Date().getFullYear()
    return current - year  
}

const getAge = year => {
    const current = new Date().getFullYear()
    return current - year
}


const getAge = year => new Date().getFullYear() - year

const logAge = year => console.log(new Date().getFullYear() - year);


logAge(1204)


const person = {
    age: 25,
    name: 'Max',
    logNameWithTimeOut: function(){
        setTimeout(() => {
            console.log(this.name);
        },1000)
    }
}

person.logNameWithTimeOut()*/

const createPost = (title, text, date = new Date().toLocaleDateString()) => {
    return {
        title: title,
        text: text,
        date: date
    }
}

console.log(createPost('test_title','test_text'));

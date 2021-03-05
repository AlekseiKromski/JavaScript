/*
//Простые типы - неизменяемые
//простые типы ведут себя, как объекты, но не явяются ими
var test = 1, 
    mystr = "stes",
    myBool = true,
    myNull = null,
    myUndef = undefined;

    // console.log(typeof test);
    // console.log(typeof mystr);
    // console.log(typeof myBool);
    // console.log(typeof myNull);
    // console.log(typeof myUndef);

//Объектные типа - изменяемые
var obj = {name: 'test'},
    array = ['test'],
    regexp = /w+/g;
    func = function(){}

console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
//особенность оператора typeof func != func
//функция по своей сущьности всегда остается объектом
console.log(typeof func);


console.log(mystr.toUpperCase());

var string = 'I love go to zoo, bc monkey is my monkey favorite animal';

//Возвращает букву по индексу
console.log(string.length);
console.log(string.charAt(string.length - 1));

//Получаем новую подстроку в указанном дипазоне
//от указанного символа и до конца
console.log("substring with 1 attribute - ",string.substring(22));

//Указываем диапозон и получаем строчку
console.log("substring with 2 attribute - ",string.substring(22,66));

//Может иметь отрецательное значение
//от указанного символа и начала (в обратную сторону)
console.log("slice with 1 attribute - ", string.slice(20));

//можем указать с какого символа и сколько символов надо взять
console.log(string.substr(19, 5));

//Return index of substring (Start search substing by 0)
console.log(string.indexOf('monkey'));

//Return index of substring (Start search substing by end of string)
console.log(string.lastIndexOf('monkey'));

//Can search and replace string (return new string)
console.log(string.replace('love', 'like'));

//Can make array by sparator
console.log(string.split(','));

//Change case
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//ES5 - строки могу интерпритироваться, как массивы
//ES5 стандарт работает во всех современных браузерах
console.log(string[13]);



//Значение, которые при конвертации будут выдвать true
console.log(Boolean(Infinity));
console.log(Boolean("ASD"));
console.log(Boolean(true));
console.log(Boolean(1));

//Значение, которые при конвертации будут выдвать false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

var s = "test"

if(s){
    console.log("Yes, that true");
}

console.log(true && false);
console.log(false  && false);
console.log(true && true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);

// Второе выражение будет вычесляться только в том случае ,
// если первое будет отрицательное

/*
Если левый аргумент – false, оператор И возвращает его и
заканчивает вычисления. Иначе – вычисляет и
возвращает правый аргумент.

true && (a = 5)
*/

/*
Допустим, вычисляются несколько ИЛИ подряд: a || b || c ||
.... Если первый аргумент – true, то результат
заведомо будет true (хотя бы одно из значений – true),
и остальные значения игнорируются.

true || (a = 5)


//Оператор + будет стараться делать строки
console.log(5 + "5");

//Оператор * будет стараться делать числа
console.log(5 * "5");

//Если чесло не получается получить, то выйдет NaN
console.log(5 * "ADF");

//Быстрое приаброзование в болевый тип
console.log(!!5); //true
console.log(!!0); //false

console.log(+"45 px");
console.log(Number.parseInt("45 px  55"));

//Парсит только значения с точной
console.log(Number.parseFloat("455.6 px 455..5"));

var n = 5
console.log(n.value);




//Циклы не создают свое собственную область видимости 
for(let i = 0; i < 3; i++){
    console.log(i);
}

for(let i = 3; i > 0; i--){
    console.log(i);
}

let i = 0
while(i < 10){
    console.log(i);
    i++
}

//Функции
//Если функция ничего не возвращает, то она отадет undefined

//Выражение опеределние функции
var greet2 = function (name){
    //Get all arguments (special object)
    console.log(arguments);
    return "Hello" + name;
};

//Инструкция объявления функции
function greet(name){
    console.log(arguments);
    return "Hello" + name;
}

// console.log(greet2("Vasja"));
// console.log(greet("Petja"));

//USE CALLBACK IN FUCTION

var func = function(callback){
    callback("Sorax");
}

func(function(name){
    console.log("Hello, " + name);
})


var func = function(){
    return function(){
        console.log('Hi');
    }
}

func()()

//Можно сразу вызвать функцию, но при условии, что она является
//выражением
//Анонимная самовызывающаяся функция
var fucn2 = (function(name){
    console.log("Hi, " + name);
}("TEST"));

var testfunc = function(){
    return "hi"
}

console.log();

var i = 5
var func = function(){
    var i = 10;
    console.log(i);

    var func = function () {
        
        console.log(i);
        var i = 55
    }
    func()
    console.log(i);
}()

var counter = function () {
    var count = 0;
   return function () {
        return count ++;
   }
}();
console.log(counter());
console.log(counter());

function logPerson (){
    console.log(`Person name: ${this.name}, Person age: ${this.age}`);
}

var bind = function(person, func){
    return function(){
        func.apply(person, arguments)
    }
}


const person1 = {name: 'Andry', age: 22}
const person2 = {name: 'Andry2', age: 19}

bind(person1, logPerson)
 
try{
    console.log('10');
}catch (error){
    console.log(error);
}finally{
    console.log('Finnaly');
}

//Объектный литерал
//В Js - нет методов, мы просто присваеваем функции свойствам
var person = {
    name: 'LOL',
    sayHi: function(){
        console.log('HI, ' + this.name);
    }
}

person.name = "test"

person.sayHi()


//Старый поход создания объектов

//Создается объект с помощью конструктора класса Object
var object = new Object();
object.x = 10
// var object = Object.create({
//     x: 12
// });


console.log(object);


function globalSayHi(){
    console.log("Hi, " + this.name);
}

var person1 = {
    name: "yanikarp",
    sayHi: globalSayHi
}
var person2 = {
    name: "yanikarp - tester",
    sayHi: globalSayHi
}


person1.sayHi()
person2.sayHi()

//Отдаем контекст выполнения
globalSayHi.call(person1)
globalSayHi.apply(person1)


//Bind -делает связку функции с конкретным контекстом
//Возвращает новую функцию 
var bound = globalSayHi.bind(person2)

//Accessors
var person = {
    name: "yanikarp",
    age_: 20,
    //Getter and setter 
    get age(){
        return this.age_
    },
    set age(value){
        this.age_ = value 
    }
}

//console.log(Object.getOwnPropertyDescriptor(person, "name"));
Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,
    enumerable: true,
    configurable: false
})
person.gender = 33

// for(property in person){
//     console.log(property);
// }

console.log(Object.keys(person));

var o = {}
Object.defineProperties(0, {
    x: {
        value: 12,
        enumerable: false,
        writable: false,
        writable: false
    }
})

console.log(o);*/

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
console.log(string[13]);*/

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
*/
console.log();
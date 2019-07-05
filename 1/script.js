// DOM : Доступ к элементам
/**
 * 
var div = document.getElementById('playground');
var p = document.getElementsByClassName('text'); //при вызове класса, мы получаем массив элементов 
var h1 = document.getElementsByTagName('h1');

console.log(div);
console.log(p);
console.log(h1);

 * 
 * 
 * 
 */

 var div = document.querySelector('#playground');
 var p = document.querySelectorAll('.text');
 var h1 = document.querySelector('h1');
 var ul = document.querySelector('div#playground ul');
 console.log(div);
 console.log(p);
 console.log(h1);
 console.log(ul);
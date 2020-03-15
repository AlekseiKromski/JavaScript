/*
var id = document.getElementById('playground');
console.log(id);

var p = document.getElementsByClassName('text');
console.log(p);

var h1 = document.getElementsByTagName('h1');
console.log(h1);

//Новые методы
var div = document.querySelector('#playground > ul ');
console.log(div);

div.innerHTML = '<h2 style="color:red;">Hello from JS</h2>'
h1.textContent = 'Changed from js'
console.log(div.innerHTML);
console.log(h1.textContent);

var input = document.querySelector('input')
console.log(input.value);
*/

var a = document.querySelector('a');
var oldHref = a.getAttribute('href');

a.setAttribute('href','https://ya.ru')
a.textContent = 'yandex'

console.log(a.attributes);

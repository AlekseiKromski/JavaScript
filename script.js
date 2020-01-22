/*
//Old version
var div = document.getElementById('playground')
var p = document.getElementsByClassName('text')
var h1 = document.getElementsByTagName('h1')

console.log(div)
console.log(p)
console.log(h1)
*/

//New version
//calss -> .CLASS_NAME
var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
div.innerHTML = '<h2 style="color:red;">Hellow from JS</h2>'
h1.textContent = 'Changed from js'
var input = document.querySelector('input')

console.log(input.value);
console.log(div.innerHTML);
console.log(p);
console.log(h1.textContent);




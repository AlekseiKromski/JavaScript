/*
var div = document.getElementById('playground')
var p = document.getElementsByClassName('text')
var h1 = document.getElementsByTagName('h1')
console.log(h1)

*/ 

var div = document.querySelector('#playground')
div.innerHTML = '<h2 style="color:red">From JS</h2>'
console.log(div.innerHTML)
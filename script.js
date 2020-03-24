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

var a = document.querySelector('a');
var oldHref = a.getAttribute('href');

a.setAttribute('href','https://ya.ru')
a.textContent = 'yandex'

console.log(a.attributes);


var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')
box2.classList.add('blue')

box2.classList.remove('blue')

var hasClass = box2.classList.contains('blue')
console.log(hasClass);

if(hasClass){
    box2.classList.remove('blue')
} else{
    box2.classList.add('blue')
}


var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

function buttonHandler(){
    h1.textContent = input.value
}

h1.addEventListener('mouseenter',function (){
    console.log('Mouse has entered h1');
    console.log(this.style.color = 'red');
    this.style.color = 'red'
    
})

h1.addEventListener('mouseleave',function (){
    console.log('Mouse has left h1');
})

button.addEventListener('click',buttonHandler)
*/

var divs = document.querySelectorAll('div')

for(var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click',function(){
        console.log(this.getAttribute('id'));
        
    }, true)
}
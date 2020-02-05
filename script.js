/*
//Old version
var div = document.getElementById('playground')
var p = document.getElementsByClassName('text')
var h1 = document.getElementsByTagName('h1')

console.log(div)
console.log(p)
console.log(h1)


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


//Атрибуты


var a = document.querySelector('a')
var oldHref = a.getAttribute('href')
a.setAttribute('href','https://yandex.ru')
a.textContent = 'Yandex'
console.log(a.getAttribute('href'))

var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red');
box2.classList.remove('blue');
var hasClass = box2.classList.contains('box');
console.log(hasClass)

var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

h1.style = 'width:10%; text-align:center;+'

function buttonHandler(){
    h1.textContent = input.value;
}
//Создание события 
button.addEventListener('click', buttonHandler) //Передаем ссылку на функцию 

h1.addEventListener('mouseenter',function (){
    this.style.color = 'white'
    this.style.backgroundColor = 'black'
})

h1.addEventListener('mouseleave', function(){
    this.style.color = 'black'
    this.style.backgroundColor = 'white'


})

var divs = document.querySelectorAll('div')

for (var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click',function(event){
        event.stopPropagation()
        console.log(this.getAttribute('id'))
    })
}

var a = document.querySelector('a')

a.addEventListener('click', linkClick)

function linkClick(event){
    event.preventDefault()
    var div = divs[0]
    if(div.style.display === 'none'){
        div.style.display = 'flex'
    } else{
        div.style.display = 'none'
    }
    console.log(div.style.display) 
}

var p = document.querySelectorAll('p')

for (var i = 0; i < p.length; i++){
    p[i].addEventListener('click', function(event){
        event.target.style.color = 'blue'
    })
}*/

document.getElementById('wrapper').addEventListener('click',function(event){
    console.log(event.target)

})
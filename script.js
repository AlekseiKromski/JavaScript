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


var divs = document.querySelectorAll('div')
var link = document.querySelector('a')

for(var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click',function(event){
        event.stopPropagation();
        console.log(this.getAttribute('id'));
        
    })
}

link.addEventListener('click',handleLinkClick)

function handleLinkClick(event){
    event.preventDefault()

    var div = divs[0]
    if(div.style.display == 'none'){
    console.log(div.style.display);
        div.style.display = 'flex'
    }else{
        div.style.display = 'none'  
    }
    console.log(div.style.display);
}


var p = document.querySelectorAll('p')

for(var i = 0 ; i < p.length; i++){
    p[i].addEventListener('click',function(event){
        this.style.color = 'blue'
    })
}

document.getElementById('wrapper').addEventListener('click', function(event){
    var tagName = event.target.tagName.toLowerCase()
    if(tagName = 'p'){
        event.target.style.color = 'blue'
    }
    
})


document.querySelector('#alert').addEventListener('click', function(){
    alert("You clicked")
})

document.querySelector('#confirm').addEventListener('click', function(){
    var test = confirm("Вы уверены?")
    if(test){
        alert("You clicked")
    }
    
})

document.querySelector('#prompt').addEventListener('click', function(){
    var age = prompt("Введите свой возраст: ", 0)
    if(age >= 18){
        alert("Вы можете купить алкоголь")
    }else{
        alert("Вы не можете купить алкоголь")
    }    
})

console.info('test')

throw new Error('eee')

var str = '1,2,3,4,5,6,7'
var array = str.split(',')

console.log(array.join(';'));
console.log(array.reverse());
console.log(array.reverse());

array.splice(3,0, '99')

var newArray = array.concat([1,2])

console.log(newArray);

var objArr = [
        {name: 'Max', age: 27},
        {name: 'Max2', age: 21},
        {name: 'Max3', age: 26}
]


var find_person = objArr.find(function(person){
    return person.age <= 22
    
})

console.log(find_person);

var oddArray = [1,2,3,4,5,6,7,8,9,].filter(function(i){
    return i & 2 != 0
})

console.log(oddArray);
*/
console.log(Math.random());
console.log(Math.floor(2.6));
console.log(Math.ceil(2.6));
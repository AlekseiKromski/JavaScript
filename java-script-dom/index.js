var a = document.querySelector('a');
var link = a.getAttribute('href');
a.setAttribute('href', 'https://ya.ru')
a.textContent = 'yandex'

var box1 = document.querySelector('#box1');
box1.classList.add('red')

var box2 = document.querySelector('#box2');
box2.classList.add('red')

var hasClass = box2.classList.contains('blue');


hasClass === true ? box2.classList.remove('blue') : box2.classList.add('blue')


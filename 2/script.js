// содержимое элементов 

var div = document.querySelector('#playground');
var h1 = document.querySelector('h1');
var input = document.querySelector('input')
div.innerHTML = '<h2 style="color:red;">From JavaScript</h2>'; // Вставляет новый тег
h1.textContent = 'JavaScript - DOM (Change from JS)'; // изменяет значение тега

console.log(h1.textContent);

console.log(input.value);
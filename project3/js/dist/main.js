'use strict';

var _element = require('./classes/element');

//Get elements
var button = new _element.Element('#button');
var input = new _element.Element('#input');
var prewie_block = new _element.Element('#preview');
var title = new _element.Element('#title');

input.$el.addEventListener('input', function (event) {
    event.preventDefault();
    prewie_block.$el.style.display = "block";
    if (input.$el.value === '') {
        title.$el.textContent = 'Title';
        prewie_block.$el.style.display = "none";
    } else {
        title.$el.textContent = input.$el.value;
    }
});

input.$el.addEventListener('blur', function (event) {
    if (input.$el.value === '') {
        prewie_block.$el.style.display = "none";
    }
});

button.$el.addEventListener('click', function (event) {
    event.preventDefault();
    if (input.$el.value !== '') {
        var block_of_do = new _element.Element('#block-of-do');
        block_of_do.$el.insertAdjacentHTML('afterbegin', getBlockOfDo(input.$el.value));
        prewie_block.$el.style.display = "none";
        input.$el.value = '';
    }
});

function getBlockOfDo(title) {
    return '<div class="col-md-12 to-do-block" >\n        <div class="row">\n            <div class="col-11">\n                <p class="m-0" id="title">' + title + '</p>\n            </div>\n            <div class="col-1 p-1">\n                <button class=\'delete-button\'><i class="fa fa-times" aria-hidden="true"></i></button>\n            </div>\n        </div>\n    </div>';
}
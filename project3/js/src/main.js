import {Element} from "./classes/element";

//Get elements
const button = new Element('#button');
const input = new Element('#input');
const prewie_block = new Element('#preview');
const title = new Element('#title');


input.$el.addEventListener('input', function(event){
    event.preventDefault();
    prewie_block.$el.style.display = "block";
    if(input.$el.value === ''){
        title.$el.textContent = 'Title';
        prewie_block.$el.style.display = "none";
    }else{
        title.$el.textContent = input.$el.value;
    }
})

input.$el.addEventListener('blur', function(event){
    if(input.$el.value === ''){
        prewie_block.$el.style.display = "none";
    }
})

button.$el.addEventListener('click', function(event){
    event.preventDefault();
    if(input.$el.value !== ''){
        const block_of_do = new Element('#block-of-do');
        block_of_do.$el.insertAdjacentHTML('afterbegin', getBlockOfDo(input.$el.value));
        prewie_block.$el.style.display = "none";
        input.$el.value = '';
    }
})

function getBlockOfDo(title){
    return `<div class="col-md-12 to-do-block" >
        <div class="row">
            <div class="col-11">
                <p class="m-0" id="title">${title}</p>
            </div>
            <div class="col-1 p-1">
                <button class='delete-button'><i class="fa fa-times" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>`
}

import {Element} from "./classes/element";

//Get elements
const button = new Element('#button');
const input = new Element('#input');
const prewie_block = new Element('#preview');
const title = new Element('#title');
let id = 0;

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
        block_of_do.$el.insertAdjacentHTML('afterbegin', getBlockOfDo(input.$el.value, id));
        prewie_block.$el.style.display = "none";
        input.$el.value = '';
        const delete_button = new Element('#delete_button'); 
        delete_button.$el.addEventListener('click',(event) => {
            let parent = (((delete_button.$el.parentNode).parentNode).parentNode).parentNode;
            let data_attr = delete_button.$el.getAttribute('data-id');
            for (var i = 0; i < block_of_do.$el.childNodes.length; i++) {
                if(block_of_do.$el.children[i] !== undefined){
                    if(block_of_do.$el.children[i].getAttribute('data-id') === data_attr){
                        console.log('YES');
                        
                        block_of_do.$el.children[i].remove();
                    }
                }
                
            }
        })
    }
})

function getBlockOfDo(title){
    return `<div class="col-md-12 to-do-block" data-id=${++id}>
        <div class="row">
            <div class="col-11">
                <p class="m-0" id="title">${title}</p>
            </div>
            <div class="col-1 p-1">
                <button class="delete-button" id='delete_button' data-id=${id}><i class="fa fa-times" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>`
}



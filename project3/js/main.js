//change backgroun color
const $body = document.querySelector('body');
$body.style = "background: #efefef";

//Get main element
const $block_of_do = document.querySelector('#block-of-do');

//Get input element
const $input = document.querySelector('#input');
$input.addEventListener('input', function(e){
    
})

//Get button element
const $button = document.querySelector('#button')
$button.addEventListener('click', function(e){
    const custom_link = 'link' + 1
    let html = `<div class="col-12 to-do-block mt-2">
        <div class="row">
        <div class="col-11">
            ${$input.value}
        </div>
        <div class="col-1">
            <a href="" id="${custom_link}"><i class="fa fa-times" aria-hidden="true"></i></a>
        </div>
        </div>
    </div>`
    $block_of_do.insertAdjacentHTML('beforeend',html)
    //Get links
    $link = document.querySelector('#' + custom_link);

    //add event listener to link
    $link.addEventListener('click', function(event){
        event.preventDefault()
        $block_of_do.remove()
        
    })

})



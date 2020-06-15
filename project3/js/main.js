//change backgroun color
const $body = document.querySelector('body');
$body.style = "background: #efefef";

//Get input element
const $input = document.querySelector('#input');
$input.addEventListener('click', function(e){
    $input.classList.add('setAnimation')
})
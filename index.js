function startGame(){
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'
    renderBox()
}


function renderBox(){
    $game.innerHTML = ''
    var box = document.createElement('div')
    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = '50px'; 
    box.style.left = '70px'; 
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement('afterbegin', box)
}

function handleBoxClick(event){
    if(event.target.dataset.box){
        score++
        renderBox()
    }
    
}

var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var score = 0

$start.addEventListener('click',startGame)
$game.addEventListener('click',handleBoxClick)

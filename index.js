function startGame(){
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'
    renderBox()
}


function renderBox(){
    
}

var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

$start.addEventListener('click',startGame)


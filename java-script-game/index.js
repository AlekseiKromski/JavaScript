var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var score_ = 0

$start.addEventListener('click', startGame)


function startGame(){
    $start.classList.add('hide');
    $game.style.backgroundColor = "white";
    renderBox();
}

function renderBox(){
    $game.innerHTML = '';
    var box = document.createElement('div');
    box.style.height = '50px';
    box.style.width = '50px';
    box.style.backgroundColor = 'red';
    box.style.position = 'absolute';
    box.style.top = '50px'
    box.style.top = '70px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement('afterbegin',box);

    $game.addEventListener('click', handleBoxClick)
}

function handleBoxClick(event){
    if(event.target.getAttribute('data-box')){
        score_++;
        renderBox();
    }
}

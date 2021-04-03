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

    var boxSize = getRandom(30, 100) + 'px';
    var gameScreen = $game.getBoundingClientRect();
    var maxTop = gameScreen.height - Number.parseInt(boxSize);
    var maxLeft = gameScreen.width - Number.parseInt(boxSize);
    var box = document.createElement('div');

    box.style.height = boxSize;
    box.style.width = boxSize;
    box.style.backgroundColor = 'red';
    box.style.position = 'absolute';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
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

function getRandom (min, max){
    return Math.floor(Math.random() * (max-min) + min)
}
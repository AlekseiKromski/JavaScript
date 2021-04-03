var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var score_ = 0;
var $time = document.querySelector('#time');
var isGameStarted = false;

$start.addEventListener('click', startGame)


function startGame(){
    isGameStarted = true;
    $start.classList.add('hide');
    $game.style.backgroundColor = "white";
    renderBox();

    var interval = setInterval(function() {
        var time = Number.parseFloat($time.textContent);
        if(time <= 0){
            // end game
            endGame();
            clearInterval(interval);
        }else{ 
            // resume game
            $time.textContent = (time - 0.1).toFixed(1);
        }
        
    },100)
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
    if(isGameStarted && event.target.getAttribute('data-box')){
        score_++;
        renderBox();
    }
}

function getRandom (min, max){
    return Math.floor(Math.random() * (max-min) + min)
}

function endGame(){
    //end game 
    isGameStarted = false;


}
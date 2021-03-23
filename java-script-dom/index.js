var boxs = document.querySelectorAll('div');

boxs.forEach(e => {
    e.addEventListener('click', function(event){
        event.stopPropagation();
        console.log(e.getAttribute('id'));
    })
})

var toggler = document.querySelector('#toggle');
var box2 = document.querySelector('.box2');
toggler.addEventListener('click' , function(event){
    event.preventDefault();
    if(box2.classList.contains('hide')){
        box2.classList.remove('hide')
    }else{
        box2.classList.add('hide')
    }
})
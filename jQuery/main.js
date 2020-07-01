$(document).ready(function(){

    let next_img = 1;

    $('#next').on('click', (event) => {
        event.preventDefault()
        if(next_img !== 3){
            let back = $('#img').attr('src');
            let test = back.indexOf('.jpg')
            back = Number(back.substr(0,test));
            next_img = back + 1;
        }else{
            next_img = 1;
        };
        $('#img').hide(1000)
        setTimeout(() => {
            $('#img').attr('src',next_img + '.jpg')
        },1000)
        $('#img').show(1000);
        
        console.log('Hide');
        setTimeout(() => {
            console.log('Change');
        },1000)
        console.log('Show');
        
        
    })


});
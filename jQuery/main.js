$(document).ready(function(){
   
    // $('#change_color').on('click', (() => {
    //     $('.move_block').toggleClass('bg-green')
    // }));


    $('#change_color').on('dblclick', (() => {
        $('.move_block').toggleClass('bg-green')
    }));

    $('.move_block').on('mouseenter', (() => {
        $('.move_block').css('border', '3px solid orange')
    }));

    $('#input').on('change', (() => {
        $('#output_name').text($('#input').val())
    }));
    
});
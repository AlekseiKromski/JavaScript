$(document).ready(function(){


    $('#submit').on('click', (event) => {
        event.preventDefault();
        let v1 = Number($('#input_1').val());
        let v2 = Number($('#input_2').val());
        
        $('#summ').text(v1 + v2);
    });


});
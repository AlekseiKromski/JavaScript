$(document).ready(function(){
    
    let a = 0 ,b = 0,operator;
    let result = $('#result_value').text();
    //For enbale a numbers input
    let is_a = true;

    //For enbale b numbers input
    let is_b;

    $('#button_1, #button_2, #button_3, #button_4, #button_5, #button_6, #button_7, #button_8, #button_9, #button_0').on('click',(e) => {

        if(is_a){
            let relust_field = $('#result_value').text() + e.target.innerText;
            $('#result_value').text(relust_field);

            a = Number(relust_field);

            //Global result variable
            result = $('#result_value').text();

        }else if(is_b){
            let result_field = $('#result_value').text() + e.target.innerText;      
            $('#result_value').text(result_field);
            result_field = result_field.substr(-1);
            console.log(b + result_field);
            
            b = Number(b + result_field);
            
        }
        
    });

    $('#operator_1, #operator_2, #operator_3, #operator_4').on('click',(e) => {
        is_a = false;
        operator = e.target.innerText;
        $('#result_value').text(result + e.target.innerText)
        is_b = true;

        
        
    });
    
    $('#enter_button').on('click', () => {
        is_a = true;
        is_b = false;
        if(operator == '+'){
            result = $('#result_value').text(a + b);
        }else if(operator == '-'){
            result = $('#result_value').text(a - b);
        }else if(operator == '*'){
            result = $('#result_value').text(a * b);
        }else if(operator == '/'){
            result = $('#result_value').text(a / b);
        }
    })

    $('#clear_button').on('click', () => {
        a = 0;
        b = 0;
        operator = undefined;
        result = '';
        is_a = true;
        is_b = false;
        $('#result_value').text(result)
    })
    
    
    
});


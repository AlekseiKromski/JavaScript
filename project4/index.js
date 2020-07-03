$(document).ready(function(){
    
    // let buttons_id = [];
    
    // for(let i = 0; i < 10; i++){
    //     buttons_id.push($('#buttons').children()[i].getAttribute('id'))
    // }

    let a,b,result;
    let is_operator = false;

    $('#button_1, #button_2, #button_3, #button_4, #button_5, #button_6, #button_7, #button_8, #button_9, #button_0').on('click',(e) => {

        if(!is_operator){
            $('#result_value').text(e.target.innerText);
            if(a === undefined){
                a = Number(e.target.innerText);
            }else{
                b = Number(e.target.innerText);
            }   
        }else{
            console.log('Enter Operator');
            
        }     
        
    });

    $('#operator_1, #operator_2, #operator_3, #operator_4').on('click',(e) => {

        is_operator = true;
        console.log();
        $('#result_value').text($('#result_value').text() + e.target.innerText)
        // $('#result_value').text(e.target.innerText);
        // if(a === undefined){
        //     a = Number(e.target.innerText);
        // }else{
        //     b = Number(e.target.innerText);
        // }         
        
    });
    

    
    
    
});


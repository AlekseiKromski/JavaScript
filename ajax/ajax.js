$("#submit").on('click', (e) => {
    e.preventDefault();
    let str = $("#name").serialize();
    // $.ajax({
    //     url: "form_handler.php",
    //     cache: false,
    //     type: "POST",
    //     data: str,
    //     success: function(data){
    //         $('#response').html(data)
    //     }
    // });

    $.ajax({
        url: "form_handler.php?" + str,
        cache: false,
        type: "GET",
        success: function(data){
            $('#response').html(data)
        }     
    });
})


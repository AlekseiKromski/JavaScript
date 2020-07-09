$.ajax({
    url: "php/form_handler.php",
    cache: false,
    success: function(data){
        $('#response').html(data)
    }
})
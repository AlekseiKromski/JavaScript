$(document).ready(() => {
    $('#thx').hide();
    const input_email = $("#exampleInputEmail1");
    const email_help = $("#emailHelp");
    input_email.on("focus", (e) => {

        input_email.on("keydown", (e) => {
            let str = input_email.val();
            if( str.length >= 8 ){;
                email_help.addClass("animate__flash");
                document.querySelector("#emailHelp").addEventListener('animationend', () => {
                    email_help.removeClass("animate__flash");
                });
                if(e.keyCode != 8 && e.keyCode != 116)  e.preventDefault() ;
            }
        })
    });

    $('form').submit((e) => {
        e.preventDefault();
        new Promise((resolve, reject) => {
            $('form').animate({
                opacity: 0
            },500, () => {
                $('form').hide();
                $('.email-logo').css({display: "block"})
                $('.logo').animate({
                    opacity: 1
                }, 1000, () => {
                    resolve();
                })
            });
        }).then(response => {
            $('.form-block').addClass("animate__backOutUp");
            document.querySelector(".form-block").addEventListener('animationend', () => {
                $('.form-block').removeClass("animate__backOutUp");
                $('form').hide();
                $('#thx').show();
            });
        });
        
        
    });
});
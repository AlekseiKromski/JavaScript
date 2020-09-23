jQuery(() => {
    $(".first").css({'color': 'red'});

    //Data tags 
    let data = $(".first").data('id');

    //Attributes
    // [] - для более строгой выборки css 
    // Есть моножество различных способов выборки см. документацию
    data = $("h1[title='test']").css({"color": "green"})

    //Filter
    data = $("ul li:nth-child(3)").css({"color": "green"})

    //Если есть слово 'Test'
    data = $("h1:contains('Test')").css({"color": "blue"})

    //Проверка, существует ли такой элемент
    data = $("ul li:has('span')").css({"color": "yellow"})

    //Проверка, существует ли такой элемент
    //data = $("ul li:parent").css({"color": "pink"})

    //Если сущесвует конетен внутри тега
    data = $("table tr td:parent").css({"background": "pink"})

    //Если не сущесвует конетен внутри тега
    data = $("table tr td:empty").css({"background": "black"})
    //console.log(data);

    //События
    // $('button').click((event) => {
    //     alert();
    // })

    //Click, dblclick, mouseenter, mouseleave
    //keypress, keydown, keyup
    //change
    // $('input[name="name"]').change(() => {
    //     $('input[name="submit"]').val(
    //         $('input[name="name"]').val()
    //     )
    // })

    //show, hide, delay - задержка, animate
    //fideIn, fadeOut - non displat use 
    $('form').show(1000).delay(2000).hide(1000)
    $('#box').animate({'width': '50px'}, 2000)

    //resize, scroll
    // $(window).resize(() => {
    //     //width and hight
    //     var width = $(this).width();
    //     console.log(width);
    // })
    // $(window).scroll(() => {
    //     //width and hight
    //     var height = $(this).height();
    //     console.log(height);        
    // })

    //addClass amd removeClass
    
    // let text = $('p').text();
    // let html = $('ul').html();

    //Append and prepend 
    //$('ul').append('<li>Test</li>')

    // $('form').wrap("<div style=\"background: pink\">Test</div>")
    // $('form').unwrap()

    $('.slider').slick({
        "setting-name": "setting-value"
    });

});
$(function() {
    function doMagic() {
        var btn = $('.btn');
        btn.click(function() {
            var lis = $('.menu__item a');
            lis.toggleClass('red');
        });
    };

    doMagic();

    $('add-btn').click(function() {
        $('li').before('<p>Spaaaaaan</p>')
    });

    $('#accordion').accordion();

    $('#tabs').tabs();

});





















 // $('a').css('border', '2px solid red')
    // .add('.p')
    // .css('background', 'yellow')
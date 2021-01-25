$(document).ready(function(){

    $('.button-up').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 510);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $('.button-up').slideDown(280);
        } else {
            $('.button-up').slideUp (265);
        }
    });

});



$(document).ready(function(){

    $(".contact-sec form input, .contact-sec form textarea").on('focusout', function(){

        var text_val = $(this).val();
        if (text_val === "") {
          $(this).removeClass('has-value');
        } else {
          $(this).addClass('has-value');
        }

      });

      $(window).scroll(function(){
          if($(this).scrollTop() > 100){
              $('.scrollToTop').fadeIn();
          }
          else{
              $('.scrollToTop').fadeOut();
          }
      });

      $('.scrollToTop').on('click', function(){
            $('html, body').animate({scrollTop : 0},600);
            return false;
      });

});

$(document).ready(function(){

    $(".contact-sec form input, .contact-sec form textarea").on('focusout', function(){

        var text_val = $(this).val();
        if (text_val === "") {
          $(this).removeClass('has-value');
        } else {
          $(this).addClass('has-value');
        }
      
      });

});
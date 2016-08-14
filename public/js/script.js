
$( document ).ready(function() {
    $(window).scroll(function() {
          if ((screen.width>=1024) && (screen.height>=768)) {
              if ($(document).scrollTop() > 50) {
                $('.underbar').addClass('shrink');
                $("#navlogo").addClass('shrinkimg');
              } else {
                $('.underbar').removeClass('shrink');
                $('#navlogo').removeClass('shrinkimg');
              }
          }
          var y = $(this).scrollTop();
          if (y > 300) {
              $('#geschikt1').fadeIn(2000);
          } else {
              $('#geschikt1').css('display', 'none');
          }

          if (y > 360) {
              $('#geschikt2').fadeIn(2000);
          } else {
              $('#geschikt2').css('display', 'none');
          }

    });
});

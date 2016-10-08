
$( document ).ready(function() {
    if ((screen.width<=1024) && (screen.height<=768)) {
        $('#geschikt1').css('display', 'block');
        $('#geschikt2').css('display', 'block');
        $('.service').css('display', 'block');
    }
    $(window).scroll(function() {

          if ((screen.width>=1024) && (screen.height>=768)) {
              if ($(document).scrollTop() > 150) {
                  $('.underbar').addClass('shrink');
                  $("#navlogo").addClass('shrinkimg');
                  $('.topbar').css('display', 'none');
              } else {
                  $('.underbar').removeClass('shrink');
                  $('#navlogo').removeClass('shrinkimg');
                  $('.topbar').css('display', 'block');
              }
          }


        //   var y = $(this).scrollTop();
        //   if (y > 300) {
        //       $('#geschikt1').fadeIn(1000);
        //       $('#geschikt1').css('display', 'block');
        //   }
          //
        //   if (y > 360) {
        //       $('#geschikt2').fadeIn(1000);
        //       $('#geschikt2').css('display', 'block');
        //   }
          //
        //   if (y > 2000) {
        //       $('.service').fadeIn(2000);
        //       $('.service').css('display', 'block');
        //   }

    });
});

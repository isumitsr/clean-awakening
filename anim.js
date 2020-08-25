$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".firstcontent").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });



  /* SCROLL ON BUTTONS */

  $('.scroll-to-first').click(function () {
    $('html, body').animate({scrollTop: $('.founders').offset().top}, 1000);
});

$('.scroll-to-second').click(function () {
    $('html, body').animate({scrollTop: $('.director').offset().top}, 1000);
});

$('.scroll-to-third').click(function () {
    $('html, body').animate({scrollTop: $('.awakening').offset().top}, 1000);
});


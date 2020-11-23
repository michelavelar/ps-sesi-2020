 
!(function($) {
  "use strict";
  
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.ps-sesi-back-to-top').fadeIn('slow');
    } else {
      $('.ps-sesi-back-to-top').fadeOut('slow');
    }
  });

  $('.ps-sesi-back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
 
 
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);
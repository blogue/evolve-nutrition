$(document).ready(function() {

  /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
      }
    });
  });

  /* Carousel */
  $('.carousel-slides').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1
  });

  /* SIDE CONTACT POPOUT */
  $('.js-wp-testimonial').waypoint(function(direction) {
    $('.side-contact').show('fade', 500);
  }, {
    offset: '15%'
  });

  $('.close').click(function() {
    $('.side-contact').hide('fade', 500);
  });

});

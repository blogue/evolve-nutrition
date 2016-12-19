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

  /* Sticky Nav */
  $('.js-wp-nutrition').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, { offset: '60px' });


  /* Carousel */
  $('.carousel-slides').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1
  });

  /* Mobile Nav */

  $('.js-nav-icon').click(function() {
    var nav = $('.main-nav');
    var icon = $('.js-nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  $(window).resize(function(){
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');

    if ($(window).width() > 888){
      nav.css("display", "block");
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
    nav.css("display", "none");
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
    }

  });

  /* Side contact popout */

  function closePopout() {
    $('.side-contact').addClass('slideOutRight');
    $('.side-contact').fadeOut(750);
  }

  $('.js-wp-testimonial').waypoint(function(direction) {
    $('.side-contact').show('fade', 200);
    $('.side-contact').addClass('animated slideInRight');
    this.destroy();
  }, {
    offset: '15%'
  });

  $('.close').click(function() {
    closePopout();
  });

  /* Contact Modal */

  function showModal() {
    $('.overlay').show('fade', 1500);
    $('.modal').show('fade', 200);
    $('.modal').addClass('animated bounceInUp');
  }

  $('.contact-btn').click(function() {
    closePopout();
    showModal();
  });

  $('#close-modal').click(function() {
    $('.overlay').hide('fade', 300);
    $('.modal').addClass('slideOutDown');
    $('.modal').hide('fade', 1400);
    setTimeout(function() { $('.modal').removeClass('slideOutDown');}, 2000);
  });

  $('.consultation').click(function() {
    showModal();
  });

  /* Animations */
  $('.js-wp-philosophy').waypoint(function(direction) {
    $('.js-philosophy').addClass('animated fadeInUp');
  }, {
    offset: '40%'
  });

});

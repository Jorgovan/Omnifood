/* eslint-env jquery */
/* global $ */



$('document').ready(function () {
    /*stiki nav*/
    var waypoint = new Waypoint({

        element: document.querySelector('.js--section-features'),

        handler: function (direction) {

            if (direction == 'down') {

                $('nav').addClass('sticky');

            } else {

                $('nav').removeClass('sticky');

            }

        },
         offset: 65
    });
    /*Scroll on buttons*/
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    
/*NAVIGATION SCROLL*/
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          
        });
      }
    }
  });

/*ANIMATION ON SCROLL*/


$('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
$('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
}, {
    offset: '50%'
});
$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated bounce');
}, {
    offset: '50%'
});

    
/*MOBILE NAV*/
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')
        
        nav.slideToggle(200);
        if(icon.attr('name')=='list') {
            $('.js--nav-icon ion-icon').attr('name', 'close')
        } else {
            $('.js--nav-icon ion-icon').attr('name', 'list')
        }
    });

    
    
});
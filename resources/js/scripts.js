$(document).ready(function() {

    
    /* For sticky navigation */
   $('.js--section-features').waypoint(function(direction) {
        if(direction=="down") {
            $('nav').addClass('sticky');
   } else {
       $('nav').removeClass('sticky');  
    }
   }, {
       offset: '65px;'
   });
       
    
/* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
        
    });
    
    /* Navigation scrolll */
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
    
    
    $('.js--wp-1').waypoint(function(direction) {
        $(this).addClass('animated fadeIn');
    }, {
        offset: '50%';
    });

});
    
       
                             
 /* Animation on scroll */


/*Mobile nav */
$('js--nav-icon').click(function() {
    var nav = $(".js--main-nav");
    var icon = $('.js--nav-icon i')
    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('iion-navicon-round');
        icon.removeClass('on-close-round');
    }
    
    
    
    
    
    
});





















    
    

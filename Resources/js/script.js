$(document).ready(function(){
    
    /* For sticky navigation */
    $('.js--section-about-us').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');   
        }else{
            $('nav').removeClass('sticky');
        }
        
    },{
        offset: '60px;'
      });
      
    /* Button scroll*/
    $('.js--scroll-to-product').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-product').offset().top}, 1000);
    });
    
     $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-about-us').offset().top}, 1000);
    });
    
     /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
     /* Animations on scroll */
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
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
     /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (ion-icon[name='reorder-four-outline']) {
            ion-icon[name='close-outline'];
        } else {
            ion-icon[name='reorder-four-outline'];
        }        
    });
    
});


'use strict';
var Expart = function($){

    /*============================
        private member
    ============================*/
    // ajaxified common message handler
    var _commonMsgHandler = function(form, isSuccess, msg){
        var msgClasses;

        if (isSuccess){
            msgClasses = "h3 text-center tada animated text-success";
        } else {
            msgClasses = "h3 text-center text-danger";
            $(form).removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
        }
        $(form).find("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

    // HTML form validator and handler
    var _formHandler = function(form){
        if ($().validator) {

            form.validator().on("submit", function (event) {
                if (event.isDefaultPrevented()) {
                    // handle the invalid form...
                    _commonMsgHandler(form, false, "Please check again if all fields are filled out correctly");
                } else {
                    event.preventDefault();
                    var url = $(form).attr('action');
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(form).serializeArray(),
                        success: function (text) {
                            if (text == "success"){
                                $(form)[0].reset();
                                _commonMsgHandler(form, true, "Contact form successfully submitted. Thank you, I will get back to you soon!");
                            } else {
                                _commonMsgHandler(form, false, "Please check again if all fields are filled out correctly");
                            }
                        }
                    });
                }
            });
        }
    };

    // Dom elements even binding
    var _actionHandler = function(){
        /*=========================
           main menu
        ==============================*/

        //jquery sticky menu on scroll
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0.5) {
                $('#sticker').addClass('stick');
            } else {
                $('#sticker').removeClass('stick');
            }
        });

        // jQuery page scrolling feature - requires jQuery Easing plugin
        $('nav a, .banner-content a, .price-inner a').unbind('click').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top -50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        // jQuery navbar dropdown item on click to collapse (small device)
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') ) {
                $(this).collapse('hide');
            }
        });
        // end main menu

        /*=========================
            jQuery isotope (Filtter portfolio on click)
        ==============================*/
        $('.filter-btn li').unbind('click').on('click', function(){
            $('.filter-btn .current').removeClass('current');
            $(this).addClass('current');
            handleIsotop($('.portfolio-gallery'), {
                filter: $(this).data('filter'),
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
        });
    };

    /*============================
        public member
    ============================*/
    // Preloader
    var showPreloader = function(){
        $('.spiner').fadeOut(); 
        $('.loader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    };
    // Isotop plugin handler
    var handleIsotop = function(jqObj, options) {
        if ($().isotope) {
            jqObj.isotope(options || {});
        }
    }
    // OwlCarousel plugin handler
    var handleOwlCarousel = function(jqObj,options){
        if ($().owlCarousel) {
            jqObj.owlCarousel(options);
        }
    };

    // contact form handler
    var contactForm = function(){
        _formHandler($('#contactForm'))
    };

    // Expert theme initialization
    var initializeExpert = function(){
        /*=========================
           jQuery lightbox (portfolio images)
        ==============================*/
        if (lightbox) {
            lightbox.option({
              'resizeDuration': 700,
              'wrapAround': false
            });
        }

        /*=========================
           jQuery skill chart
        ==============================*/
        if ($().waypoint) {
            $('.skill-chart').waypoint(function() {
                $('.progress-bar').each(function(){
                    $(this).find('.progress').animate({
                        width:$(this).attr('data-percent')
                    },3000);
                });
                //Viewport Code
             }, {
               offset: '100%'
             });
        }

        /*=========================
           jQuery owlCarousel
        ==============================*/
        //My team
        // handleOwlCarousel($(".team"),{
        //   navigation: true,
        //   pagination: false,
        //   navigationText: ['<i class="fa fa-angle-left"></i> <span>Prev</span>','<span>Next</span> <i class="fa fa-angle-right"></i>'],
        //   // autoPlay: 3000, //Set AutoPlay to 3 seconds
        //   items: 4,
        //   itemsDesktop: [1199, 3],
        //   itemsDesktopSmall: [991, 2],
        //   itemsTablet: [768, 2],
        //   itemsTabletSmall: [568, 2],
        //   itemsMobile: [479, 1]
        // });

         
        //Testimonial  
        // handleOwlCarousel($(".testimonial"), {
        //   navigation: false,
        //   // autoPlay: 3000, //Set AutoPlay to 3 seconds
        //   items: 3,
        //   itemsDesktop: [1199, 2],
        //   itemsDesktopSmall: [980, 2],
        //   itemsTablet: [768, 2],
        //   itemsTabletSmall: [568, 1],
        //   itemsMobile: [479, 1]
        // });  

        //Clients
        // handleOwlCarousel($(".client"), {
        //   navigation: false,
        //   pagination: false,
        //   autoPlay: 5000, //Set AutoPlay to 3 seconds
        //   items: 5,
        //   itemsDesktop: [1199, 3],
        //   itemsDesktopSmall: [980, 2],
        //   itemsTablet: [768, 3],
        //   itemsTabletSmall: [568, 2],
        //   itemsMobile: [479, 1]
        // });

        //initiate portfolio Gallery
        handleIsotop($('.portfolio-gallery'), {
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        /*=========================
            jQuery counterUp
        ==============================*/
        if ($().counterUp) {
            $('.counter').counterUp({
                delay: 9,
                time: 1500
            });
        }

        /*=========================
            jQuery wow js
        ==============================*/
        if(WOW) {
            var wow = new WOW(
                {
                    boxClass: 'wow',  // animated element css class (default is wow)
                    animateClass: 'animated',  // animation css class (default is animated)
                    offset: 0,    // distance to the element when triggering the animation (default is 0)
                    mobile: true, // trigger animations on mobile devices (default is true)
                    live: true    // act on asynchronously loaded content (default is true)
                }
            )
            wow.init();
        }

        /*=========================
            jQuery scrollUp (smooth scroll)
        ==============================*/
        if($.scrollUp) {
            $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '600',     // Distance from top/bottom before showing element (px)
            topSpeed: 300,          // Speed back to top (ms)    
            animation: 'fade',      // Fade, slide, none
            animationInSpeed: 200,  // Animation speed (ms)
            animationOutSpeed: 200,  // Animation speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>',  // Text or icon for element, can contain HTML
            activeOverlay: false,    // Set CSS color to display scrollUp active point, e.g '#00FFFF'
          });
        }
          

        contactForm();  //call contact form handler
        _actionHandler();  //call comon dom event binding handler
    };

    return {
        init: initializeExpert,
        preloader: showPreloader,
        isotop: handleIsotop,
        owlCarousel: handleOwlCarousel
    }
}(jQuery);
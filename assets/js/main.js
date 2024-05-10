$('.menu-btn img').on('click', function(){
    $('.nav-items').css({
        'display': 'flex',
        'top': '0'
    });
    $('.menu-btn').addClass('close');
    $('.left-c-img').css({
        'transition': 'all .5s ease-in-out',
        'z-index': '4',
        'opacity': '1',
        'animation':'descendAndShiftleft 1s'
    });
    $('.right-c-img').css({
        'transition': 'all 1s ease-in-out',
        'z-index': '4',
        'opacity': '1',
        'animation':'descendAndShiftright 1s'
    });
});
$('.menu-btn span').on('click', function(){
    $('.nav-items').css({
        'display': 'none',
        'top': '-100%'
    });
    $('.menu-btn').removeClass('close');
    $('.left-c-img').css({
        'transition': 'all .5s ease-in-out',
        'z-index': '0',
        'opacity': '0',
        'animation': 'descendAndShifttop 1s'
    });
    $('.right-c-img').css({
        'transition': 'all 1s ease-in-out',
        'z-index': '1',
        'opacity': '0',
        'animation': 'descendAndShiftbottom 1s'
    });
});
$('.tab-btn').on('click', function(){
    var tabId = $(this).attr('data-tab');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    
    $('.tab-content').removeClass('active');
    $('#' + tabId).addClass('active');
});

// Close board details
$('.btn-owl-close').on('click', function(){
    $('.cover-inner.about').css({
        'display':'block'
    });
    $('.profile-section').css({
        'display':'none'
    });
});

// Counter function
$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        
        //chnage count up speed here
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// Board Slider
$("#board_carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    startIndex: 2,
    navText: ["<img class='left-arrow' src='./assets/img/svg-icon/left-arrow-circle.svg'/>","<img class='right-arrow' src='./assets/img/svg-icon/right-arrow-circle.svg'/>"]
});
$('#tab2 .card-pro').on('click',function(){
    var cardId = $(this).attr('data-pro-no');
    $('.cover-inner.about').css({
        'display':'none'
    });
    $('.profile-section').css({
        'display':'block'
    });
    $('#board_carousel').trigger('to.owl.carousel', [cardId]); // Start from the third item (zero-based index)
});

// Management Slider
$("#team_carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    startIndex: 2,
    navText: ["<img class='left-arrow' src='./assets/img/svg-icon/left-arrow-circle.svg'/>","<img class='right-arrow' src='./assets/img/svg-icon/right-arrow-circle.svg'/>"]
});
$('#tab3 .card-pro').on('click',function(){
    var cardTId = $(this).attr('data-team-no');
    $('.cover-inner.about').css({
        'display':'none'
    });
    $('.team-section').css({
        'display':'block'
    });
    $('#team_carousel').trigger('to.owl.carousel', [cardTId]); // Start from the third item (zero-based index)
});
$(".service-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    dots: false,
    nav: false,
    autoplayHoverPause: true,
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown'
  });

  $('.screenshot_slider').on('initialized.owl.carousel translate.owl.carousel', function(e){
    idx = e.item.index;
    $('.owl-item.big').removeClass('big');
    $('.owl-item.pre-big').removeClass('pre-big');
    $('.owl-item.post-big').removeClass('post-big');
    $('.owl-item').eq(idx).addClass('big');
    $('.owl-item').eq(idx-1).addClass('pre-big');
    $('.owl-item').eq(idx+1).addClass('post-big');
  });
var owl = $('.screenshot_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 20,    
    autoplay: 1000,
    smartSpeed: 400,
    center: true,
    navText: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
});
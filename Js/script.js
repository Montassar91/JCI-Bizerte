$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.desktopNav').addClass('scrolledNav');
        } else {
            $('.desktopNav').removeClass('scrolledNav');
        }
    });

    var scrollLink = $('.scroll');
    var topPage = $('.navbar-brand');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 74
        }, 1000);
        console.log($(this.hash));
    });

    topPage.click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        console.log($(this.hash));
    });
});

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
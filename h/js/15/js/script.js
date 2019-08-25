//Anchors smooth scrolling
$(document).ready(function(){
    $(".nav-item").on('click', function(event) {
        $('html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800)
    });
});

// scroll to top button

const $btn = $('.btn-to-top');

$(document).scroll(function() {

    let $heightClient = $(window).innerHeight();

    ($(window).scrollTop() > $heightClient) ? $('.btn-to-top').fadeIn('slow'): $('.btn-to-top').fadeOut('slow');
});

$btn.click(function() {
    $('html').animate({scrollTop: 0}, 800)
});

// section visibility toggler

$(".btn-toggle-top-rated").html("Toggle this");
const btnToggleTopRated = document.querySelector(".btn-toggle-top-rated");
$(".btn-toggle-top-rated").click(function() {
    $("#top-rated").slideToggle("slow");
});

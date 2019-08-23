$(document).scroll(function (e) {
  const $screenHeight = $(window).innerHeight();
  const $screenTop = $(window).scrollTop();

  if($screenTop > $screenHeight){
    if(!$('.scrol-top-btn').length) {
      const $scrolTopBtn = $('<button hidden class="scrol-top-btn"></button>');

      $('script:first').before($scrolTopBtn);
      // $scrolTopBtn.fadeIn();

      $scrolTopBtn.click(() => {
        $('body, html').animate({
          scrollTop: 0
        }, 1000);
      });
       console.log($scrollTopBtn);
    }
  } else {
    $('.scrol-top-btn').fadeOut(500, () => {
      $('.scrol-top-btn').remove();
    });
    // $('.scrol-top-btn').fadeOut();
    // $('.scrol-top-btn').remove();
    
  }
 
});

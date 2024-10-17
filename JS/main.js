/*ハンバーガー　メニュー表示*/
$(".top-hamburger-icon").on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.top-nav').removeClass('open');
    $('.top-language').removeClass('open');
    $('body').removeClass('no-scroll'); 
  } else {
    $(this).addClass('active');
    $('.top-nav').addClass('open');
    $('.top-language').addClass('open');
    $('body').addClass('no-scroll');
  }
});

/*トップへ戻るボタン*/  
$(function() {
  var $btn = $('.box-container');
  var $trigger = $('.main-contents-img');
  var scrollTimer;

  $btn.hide();

  function checkIfInView() {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var triggerPos = $trigger.offset().top;

    if (scrollPos + windowHeight > triggerPos) {
      $btn.fadeIn(200);
    }

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
      $btn.fadeOut(200);
    }, 2000);
  }
  
  $(window).on('scroll resize', checkIfInView);

  $btn.click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});

/*slick slide*/
$(function() {
  var sliderOptions = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true, 
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  $(window).on('resize', function() {
    if ($(window).width() <= 767) {
      sliderOptions.fade = false;
    } else {
      sliderOptions.fade = true; 
    }
  }).resize();

  $('.slider').slick(sliderOptions);
});


/*言語プルダウン*/
/*$('.top-language').click(function(e) {
  console.log("クリック01");
    $('.top-language-box').toggle();
    e.stopPropagation();
});
  
$('.top-language-box-item').click(function(e) {
  e.stopPropagation();
  var language = $(this).text();
  $('.selected-language').text(language);
  $('.top-language-box').toggle();
});*/

/*ふわっと出現*/
function checkInView() {
  $('.inview').each(function() {
    var targetPosition = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetPosition - windowHeight) {
      $(this).addClass('show');
    }
  });
}

$(document).ready(function() {
  // ページ読み込み時に一度実行
  checkInView();
});

$(window).on('scroll', function() {
  // スクロール時に実行
  checkInView();
});

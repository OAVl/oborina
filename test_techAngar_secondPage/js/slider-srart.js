var slideNow = 1;
var slideCount = $('#slidewrapper-start').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
  var switchInterval = setInterval(nextSlide, slideInterval);

  $('#viewport-start').hover(function() {
    clearInterval(switchInterval);
  }, function() {
    switchInterval = setInterval(nextSlide, slideInterval);
  });

  $('#next-btn').click(function() {
    nextSlide();
  });

  $('#prev-btn').click(function() {
    prevSlide();
  });

  $('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
      translateWidth = -$('#viewport-start').width() * (navBtnId);
      $('#slidewrapper-start').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = navBtnId + 1;
    }
  });
});
$(document).ready(function() {
  $("#viewport-start").each(function () { // обрабатываем каждый слайдер
    var obj = $(this);

    $(obj).find("#nav-btns-start span").first().addClass("on"); // делаем активным первый элемент меню
  });
});
function sliderJS (obj, sl) { // slider function
  var ul = $(sl).find("ul"); // находим блок
  var bl = $(sl).find("li#viewport-start"+obj); // находим любой из элементов блока
  var step = $(bl).width(); // ширина объекта
  $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", "#nav-btns-start span", function() { // slider click navigate
  var sl = $(this).closest("#viewport-start"); // находим, в каком блоке был клик
  $(sl).find("span").removeClass("on"); // убираем активный элемент
  $(this).addClass("on"); // делаем активным текущий
  var obj = $(this).attr("rel"); // узнаем его номер
  sliderJS(obj, sl); // слайдим
  return false;
});


function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper-start').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport-start').width() * (slideNow);
    $('#slidewrapper-start').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$('#viewport-start').width() * (slideCount - 1);
    $('#slidewrapper-start').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$('#viewport-start').width() * (slideNow - 2);
    $('#slidewrapper-start').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow--;
  }
}

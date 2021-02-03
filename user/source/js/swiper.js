$(document).ready(function(){
  if($(window).width() >= 320 && $(window).width() < 1024){
    $('#popular').addClass('swiper-container');
    $('.popular_list').addClass('swiper-wrapper');
    $('.popular_list').removeClass('grid');
    $('.popular_list li').addClass('swiper-slide');
    
    
    var swiper1 = new Swiper('#popular', {
      breakpoints: {
        320: {
          width: 250,
          spaceBetween: 20
        },
        758: {
          width: 320,
          spaceBetween:20
        },
        1024: {
          width: 235,
          spaceBetween: 20
        }
      }
    });

    var swiper2 = new Swiper('#modelling', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          width: 250,
          spaceBetween: 20
        },
        758: {
          width: 320,
          spaceBetween: 20,
        },
        1024: {
          width: 235,
          spaceBetween:10
        }
      }
    });

  } else {
    $('#popular').removeClass('swiper-container');
    $('.popular_list').removeClass('swiper-wrapper');
    $('.popular_list').addClass('grid');
    $('.popular_list li').removeClass('swiper-slide');
   
    var swiper1 = new Swiper('#popular', {
      breakpoints: {
        320: {
          width: 250,
          spaceBetween: 20
        },
        758: {
          width: 320,
          spaceBetween:20
        },
        1024: {
          width: 235,
          spaceBetween: 20
        }
      }
    });

    var swiper2 = new Swiper('#modelling', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          width: 250,
          spaceBetween: 20
        },
        758: {
          width: 320,
          spaceBetween: 20,
        },
        1024: {
          width: 235,
          spaceBetween:10
        }
      }
    });
  }
});


$(window).resize(function() {
  if($(window).width() >= 320 && $(window).width() < 1024) {
      $('#popular').addClass('swiper-container');
      $('.popular_list').addClass('swiper-wrapper');
      $('.popular_list').removeClass('grid');
      $('.popular_list li').addClass('swiper-slide');
      
      var swiper1 = new Swiper('#popular', {
        breakpoints: {
          320: {
            width: 250,
            spaceBetween: 20
          },
          758: {
            width: 320,
            spaceBetween:20
          },
          1024: {
            width: 235,
            spaceBetween: 20
          }
        }
      });

      var swiper2 = new Swiper('#modelling', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            width: 250,
            spaceBetween: 20
          },
          758: {
            width: 320,
            spaceBetween: 20,
          },
          1024: {
            width: 235,
            spaceBetween:10
          }
        }
      });
  } else {
      $('#popular').removeClass('swiper-container');
      $('.popular_list').removeClass('swiper-wrapper');
      $('.popular_list').addClass('grid');
      $('.popular_list li').removeClass('swiper-slide').css({'margin-right':'0','width':'23.5rem'});

      var swiper1 = new Swiper('#popular', {
        breakpoints: {
          320: {
            width: 250,
            spaceBetween: 20
          },
          758: {
            width: 320,
            spaceBetween:20
          },
          1024: {
            width: 235,
            spaceBetween: 20
          }
        }
      });

      var swiper2 = new Swiper('#modelling', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            width: 250,
            spaceBetween: 20
          },
          758: {
            width: 320,
            spaceBetween: 20,
          },
          1024: {
            width: 235,
            spaceBetween:10
          }
        }
      });
      
  }
  
})
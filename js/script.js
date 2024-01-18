let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
    $(".menu-bars").toggleClass("open-bars");
  });
  if ($(window).width() <= 1199) {
    //slide down menu
    $(".menu-item-has-children > a").click(function (e) {
      e.preventDefault();
      $(this).siblings(".sub-menu").slideToggle(400);
      // $(".menu-item-has-children > a")
      //   .not(this)
      //   .siblings(".sub-menu")
      //   .slideUp(400);
      if ($(window).width() <= 991) {
        $(this).toggleClass("active");
        $(".menu-item-has-children > a").not(this).removeClass("active");
      }
    });
    // $subMenu = $(".big-menu > .menu-item-has-children > .sub-menu li");
    // $subMenu.click(function (e) {
    //   e.preventDefault();
    //   $(this).siblings(".sub-menu").slideToggle(400);
    //   // $subMenu.not(this).siblings(".sub-menu").slideUp(400);
    //   if ($(window).width() <= 991) {
    //     $(this).toggleClass("active");
    //     $subMenu.not(this).removeClass("active");
    //   }
    // });
  }
  //fixed nav3
  $stickySecondLogo = $(".second-logo");
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    preloadImages: false,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **services-section** /////////
  var servicesSlider = new Swiper(".services-section .swiper-container", {
    loop: true,
    autoplay: true,
    preloadImages: true,
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **news-section** /////////
  var newsSlider = new Swiper(".news-slider .swiper-container", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-slider .swiper-btn-next",
      prevEl: ".news-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **brands-section** /////////
  var brandsSlider = new Swiper(".brands-section .swiper-container", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".brands-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".brands-slider .swiper-btn-next",
      prevEl: ".brands-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  //news slider
  var newsSlider = new Swiper(".news-slider .swiper-container", {
    autoplay: true,
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-slider .swiper-btn-next",
      prevEl: ".news-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  
  lazyLoad();
});
// for counter //
const sectionExists =
document.getElementsByClassName("counter-cont").length > 0;

if (sectionExists) {
var a = 0;
function countFunction() {
  $(".counter-num").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({
      countNum: $this.text(),
    }).animate(
      {
        countNum: countTo,
      },

      {
        duration: 2000,
        easing: "swing",
        step: function () {
          if (this.countNum < 10) {
            $this.text("0" + Math.floor(this.countNum));
          } else {
            $this.text(Math.floor(this.countNum));
          }
        },
        complete: function () {
          if (this.countNum < 10) {
            $this.text("0" + this.countNum);
          } else {
            $this.text(this.countNum);
          }
          //alert('finished');
        },
      }
    );
  });
  a = 1;
}
// if ($(window).width() <= 767) {
//   window.onload(countFunction());
// }
$(window).scroll(function () {
  var oTop = $(".counter-cont").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    countFunction();
  }
});
var oTop = $(".counter-cont").offset().top - window.innerHeight;
if (a == 0 && $(window).scrollTop() > oTop) {
  countFunction();
}
} else {
}
//lazy load

function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
    // img.parentElement.parentElement.classList.add("lazy-head-img");
  };
}

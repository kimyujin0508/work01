$(function () {
  // 모바일 메뉴
  $(document).ready(function () {
    $(".mb-menu-btn").click(function () {
      $(".mb-menu-btn").toggleClass("on");
      $(".m-nav").toggleClass("on");
      $(".window").fadeToggle();
    });
    $(".window").click(function () {
      $(".mb-menu-btn").removeClass("on");
      $(".m-nav").removeClass("on");
      $(".window").fadeOut();
    });
    $(window).resize(function () {
      let windowWidth = $(window).width();
      if (windowWidth > 1200) {
        $(".mb-menu-btn").removeClass("on");
        $(".m-nav").removeClass("on");
        $(".window").fadeOut();
      }
    });
  });

  // 모바일 서브메뉴
  const mMenuLi = $(".m-menu > li");
  const mMainMenu = $(".m-menu > li > a");
  const mSubMenu = $(".m-submenu");

  $.each(mMenuLi, function (index, item) {
    let depth1 = $(this).find("a");
    depth1.click(function (e) {
      e.preventDefault;
      let temp = $(this).hasClass("active");
      if (temp) {
        $(this).removeClass("active");
        $(this).next().stop().slideUp();
      } else {
        mMainMenu.removeClass("active");
        mSubMenu.stop().slideUp();
        $(this).addClass("active");
        $(this).next().stop().slideDown();
      }
    });
  });

  // 메뉴 바
  const menuBar = $("nav > ul > li"),
    subMenubg = $(".header_bottom");
  menuBar.mouseenter(function () {
    subMenubg.addClass("on");
  });
  menuBar.mouseleave(function () {
    subMenubg.removeClass("on");
  });

  // menu 탭메뉴
  const tabLi = $("#menu .tabmenu li"),
    tabPanel = $(".sw-menu");
  tabLi.click(function (e) {
    e.preventDefault();
    tabLi.removeClass("active");
    $(this).addClass("active");
    let targetIdx = $(this).index();
    tabPanel.removeClass("focus");
    tabPanel.eq(targetIdx).addClass("focus");
  });
  tabLi.eq(0).trigger("click");

  // 비주얼 SWIPER
  new Swiper(".sw-visual", {
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });
  // 메뉴 Swiper
  new Swiper(".sw-menu", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 600,
    slidesPerView: 4,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      depth: 100,
      stretch: -6,
      modifier: 2,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".sw-menu-next",
      prevEl: ".sw-menu-prev",
    },
    breakpoints: {
      1025: {
        slidesPerView: 4,
      },
      800: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      440: {
        slidesPerView: 1.6,
      },
      0: {
        slidesPerView: 1.4,
      },
    },
  });
  AOS.init();
});

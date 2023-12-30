import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import '../../scss/base/swiper.scss';

// import "../../scss/libs/swiper.scss";

// import 'swiper/css';

function initSliders() {
  if (document.querySelector('.products-slider')) {
    new Swiper('.products-slider', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 800,
      grabCursor: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 'auto',
        },
        485: {
          slidesPerView: 2,
        },
        992: {
          sliderPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      },

      on: {},
    });
  }

  if (document.querySelector('.more__slider')) {
    new Swiper('.more__slider', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 800,
      grabCursor: true,

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    });
  }

  if (document.querySelector('.post__slider')) {
    new Swiper('.post__slider', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 800,
      grabCursor: true,

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    });
  }

  if (document.querySelector('.about-products__slider')) {
    new Swiper('.about-products__slider', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 40,
      speed: 800,
      grabCursor: true,

      pagination: {
        el: '.about-products__nav',
        dynamicBullets: true,
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
        },
        1580: {
          slidesPerView: 4,
        },
      },

      on: {},
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

initSliders();

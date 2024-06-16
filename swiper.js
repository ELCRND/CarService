import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const brandsSwiper = new Swiper(".swiper-brands", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-brands-button-next",
    prevEl: ".swiper-brands-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

const answersSwiper = new Swiper(".swiper-answers", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-answers-button-next",
    prevEl: ".swiper-answers-button-prev",
  },
});

const promotionsSwiper = new Swiper(".swiper-promotions", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-promotions-button-next",
    prevEl: ".swiper-promotions-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});

const instructionsSwiper = new Swiper(".swiper-instructions", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-instructions-button-next",
    prevEl: ".swiper-instructions-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});

const reviewsSwiper = new Swiper(".swiper-reviews", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-reviews-button-next",
    prevEl: ".swiper-reviews-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

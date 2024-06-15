import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const brandsSwiper = new Swiper(".swiper-brands", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-brands-button-next",
    prevEl: ".swiper-brands-button-prev",
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
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-promotions-button-next",
    prevEl: ".swiper-promotions-button-prev",
  },
});

const instructionsSwiper = new Swiper(".swiper-instructions", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-instructions-button-next",
    prevEl: ".swiper-instructions-button-prev",
  },
});

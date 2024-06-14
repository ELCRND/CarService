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

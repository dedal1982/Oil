// const swiper = new Swiper(".products-price-swiper", {
//   direction: "horizontal",
//   loop: false,
//   slidesPerView: 4,
//   spaceBetween: 40,

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 40,
//     },
//     375: {
//       slidesPerView: 1,
//       spaceBetween: 40,
//     },
//     425: {
//       slidesPerView: 1,
//       spaceBetween: 40,
//     },
//     500: {
//       slidesPerView: 1,
//       spaceBetween: 40,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     769: {
//       slidesPerView: 2.5,
//       spaceBetween: 10,
//     },
//     835: {
//       slidesPerView: 3.3,
//       spaceBetween: 40,
//     },
//     1280: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1920: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
const swiper = new Swiper(".products-price-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

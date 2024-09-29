const swiper = new Swiper(".products-price-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    375: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    690: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    870: {
      slidesPerView: 2.6,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1160: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1260: {
      slidesPerView: 3.8,
      spaceBetween: 20,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
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

//licenses__swiper
const swiperlicenses = new Swiper(".licenses-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 6,
  spaceBetween: 18,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    767: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
    820: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    910: {
      slidesPerView: 3.8,
      spaceBetween: 20,
    },
    980: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5.1,
      spaceBetween: 20,
    },
    1290: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1412: {
      slidesPerView: 6,
      spaceBetween: 18,
    },
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

//car-park-swiper
const swiperCarPark = new Swiper(".car-park-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1390: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
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

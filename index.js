// Toggle mobile menu
const toggle = document.querySelector('#mobile-menu');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('is-active');
  nav.classList.toggle('active');
});

// Add shrink-on-scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const swiper = new Swiper(".gallery-carousel", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
});

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

const featuredSwiper = new Swiper(".featured-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".featured-swiper .swiper-button-next",
    prevEl: ".featured-swiper .swiper-button-prev",
  },
  pagination: {
    el: ".featured-swiper .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const hours = {
  Monday: "8:00 am - 7:00 pm",
  Tuesday: "8:00 am - 7:00 pm",
  Wednesday: "8:00 am - 7:00 pm",
  Thursday: "8:00 am - 7:00 pm",
  Friday: "8:00 am - 7:00 pm",
  Saturday: "8:00 am - 7:00 pm",
  Sunday: "8:00 am - 7:00 pm"
};

const days = Object.keys(hours); // ["Monday", ..., "Sunday"]
const todayIndex = (new Date().getDay() + 6) % 7; // Sunday=0, Monday=0
const today = days[todayIndex];

const dropdown = document.getElementById("hoursDropdown");

// Add all days in order, mark today as selected, disable all to make read-only
days.forEach(day => {
  dropdown.innerHTML += `<option ${day === today ? "selected" : ""} disabled>
    ${day}: ${hours[day]}
  </option>`;
});

// Optional: prevent programmatic selection change
dropdown.addEventListener("change", e => {
  e.preventDefault();
  dropdown.value = `${today}: ${hours[today]}`;
});
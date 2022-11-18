
const burgerBtn = document.querySelector('.menu__burger');
const burgerLines = document.querySelector('.menu__burger .menu__burger-lines');
const menuHome = document.querySelector('.menu__home');


burgerBtn.addEventListener('click', ()=> {
    menuHome.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    burgerLines.classList.toggle('active');
});


const swiper = new Swiper('.swiper', {
    
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const footer_social_1 = document.querySelector('.footer_social_1');

footer_social_1.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});

const footer_social_2 = document.querySelector('.footer_social_2');

footer_social_2.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});

const footer_social_3 = document.querySelector('.footer_social_3');

footer_social_3.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});

const footer_social_telegram = document.querySelector('.footer_social_telegram');

footer_social_telegram.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});



const middle4_link_one1 = document.querySelector('.middle4_link_one1');

middle4_link_one1.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});

const middle4_link_two1 = document.querySelector('.middle4_link_two1');

middle4_link_two1.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});



const middle4_link_one2 = document.querySelector('.middle4_link_one2');

middle4_link_one2.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});

const middle4_link_two2 = document.querySelector('.middle4_link_two2');

middle4_link_two2.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});



const middle4_link_one3 = document.querySelector('.middle4_link_one3');

middle4_link_one3.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});

const middle4_link_two3 = document.querySelector('.middle4_link_two3');

middle4_link_two3.addEventListener('click', () => {
  location.href = 'https://github.com/selecta-z';
});
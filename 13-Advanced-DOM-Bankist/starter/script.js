'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting Elements
// console.log(document.documentElement);
//
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');
//
// document.getElementsByClassName('btn');

// Creating and Inserting Elements
// .insertAdjacentHTML (done previously)
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>'
//
// header.prepend(message);
//
// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });
//
// // styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
//
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';
// console.log(getComputedStyle(message).height);
//
// document.documentElement.style.setProperty('--color-primary', 'orangered');
//
// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
//
// // Non Standard
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');
//
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
//
// // data attributes
// console.log(logo.dataset.versionNumber);
//
// // Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');
// logo.className = 'jonas';

// Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coordinates = section1.getBoundingClientRect();
  console.log(s1coordinates);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // Scrolling
  // window.scrollTo(s1coordinates.left + window.pageXOffset, s1coordinates.top + window.pageYOffset);

  // Smoothing the scrolling
  // window.scrollTo({
  //   left: s1coordinates.left + window.pageXOffset,
  //   top: s1coordinates.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // New way
  section1.scrollIntoView({ behavior: 'smooth' })
});

const h1 = document.querySelector('h1');

const alertH1 = (e) => {
  alert('addEventListener: Great! You are reading the heading!');
}

// mouseenter = hover
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = (e) => {
//   alert('addEventListener: Great! You are reading the heading!');
// }

// Begin event propagation

// Hello there v12

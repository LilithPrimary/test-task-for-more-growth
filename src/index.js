import './scss/main.scss';

const changeHeaderScroll = () => {
  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 700);

  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.header__nav a.nav__link');

  window.addEventListener('scroll', () => {
    if (!window.scrollY) {
      header.classList.remove('header__scroll');
    }
    if (window.scrollY && !header.classList.contains('header__scroll')) {
      header.classList.add('header__scroll');
    }
  });

  burger.addEventListener('click', () => {
    console.log(navLinks);
    burger.classList.toggle('burger_open');
    nav.classList.toggle('nav_open');
    document.body.classList.toggle('body_disable');
  });

  navLinks.forEach((el) =>
    el.addEventListener('click', () => {
      if (nav.classList.contains('nav_open')) {
        nav.classList.remove('nav_open');
        burger.classList.remove('burger_open');
        document.body.classList.remove('body_disable');
      }
    })
  );
};

changeHeaderScroll();

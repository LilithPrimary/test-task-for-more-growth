import './scss/main.scss';

const app = () => {
  const closeMenu = () => {
    if (nav.classList.contains('nav_open')) {
      nav.classList.remove('nav_open');
      burger.classList.remove('burger_open');
      document.body.classList.remove('body_disable');
    }
  };

  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 700);

  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.header__nav a.nav__link');
  const shadow = document.querySelector('.nav__shadow');

  window.addEventListener('scroll', () => {
    if (!window.scrollY) {
      header.classList.remove('header__scroll');
    }
    if (window.scrollY && !header.classList.contains('header__scroll')) {
      header.classList.add('header__scroll');
    }
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_open');
    nav.classList.toggle('nav_open');
    document.body.classList.toggle('body_disable');
  });

  shadow.addEventListener('click', closeMenu);

  navLinks.forEach((el) => el.addEventListener('click', closeMenu));
};

app();

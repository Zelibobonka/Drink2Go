const navOpen = document.querySelector('.main-nav__toggle');
const siteList = document.querySelector('.site-list');

siteList.classList.remove('site-list--nojs');

navOpen.addEventListener('click', () => {
  if (!navOpen.classList.contains('main-nav__toggle--closed')) {
    siteList.style.display = 'block';
    navOpen.classList.remove('main-nav__toggle');
    navOpen.classList.add('main-nav__toggle--closed');
  } else {
    siteList.style.display = 'none';
    navOpen.classList.remove('main-nav__toggle--closed');
    navOpen.classList.add('main-nav__toggle');
  }
});

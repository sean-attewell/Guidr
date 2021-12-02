console.log('Sanity check')

const toggleMenu = () => {
  menu.classList.toggle('menu-appear');
  container.classList.toggle('container-blur');
  footer.classList.toggle('footer-blur');
}


// select DOM elements
const menuButton = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer');


menuButton.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

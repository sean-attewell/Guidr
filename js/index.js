console.log('Sannity check')

const toggleMenu = () => {
    menu.classList.toggle('menu-appear');
    container.classList.toggle('container-blur');
    footer.classList.toggle('footer-blur');
}

const menuButton = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer');

menuButton.addEventListener('click', toggleMenu);
// toggleMenu is a variable storing what the arrow function returns
// so don't try and invoke it because it's not a function
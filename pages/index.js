import Submenu from '../scripts/components/Submenu.js';

/*Submenu*/
const menus = Array.from(document.querySelectorAll('.menu'));
const submenu = new Submenu(menus);
submenu.setEventLister();


/* Mobile Menu */
const mobileMenuButton = document.querySelector('.button-menu');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', (e) =>{
  e.target.classList.toggle('opened');
  mobileMenu.classList.toggle('opened');
});


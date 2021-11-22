import { Fancybox, Carousel } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js";
import Submenu from '../scripts/components/Submenu.js';
import MenuSlider from '../scripts/components/MenuSlider.js';

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

  /* completed-works */

const sliders = Array.from(document.querySelectorAll('.carousel'));
sliders.forEach((slider) => {
  const worksSlider = new Carousel(slider, {
  });
  worksSlider.slideNext();
});


const workSlider = document.querySelector('.completed-works');
const runMenuSlider = new MenuSlider(workSlider);
runMenuSlider.setEventLister();

/* navigation-select */

const navigationSelect = document.querySelector('.navigation-select');
const navigationSelectButton = navigationSelect.querySelector('.navigation-select__selected');
const navigationSelectList = navigationSelect.querySelector('.navigation-select__list');

const toggleSelectList = () => {
  navigationSelectList.classList.toggle('open');
}

const closeSelectList = () => {
  if(event.target != navigationSelect && event.target != navigationSelectButton && event.target != navigationSelectList){
    navigationSelectList.classList.remove('open');
  }

}

navigationSelectButton.addEventListener('click', toggleSelectList);
document.addEventListener('click', closeSelectList);




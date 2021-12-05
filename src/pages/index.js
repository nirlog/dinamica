import "@fancyapps/ui/dist/fancybox.css";
import './index.css';
import 'owl.carousel';

import { Fancybox, Carousel } from "@fancyapps/ui";
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

$(document).ready(function(){
  $(".work-carousel").owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    navText: ['&larr;','&rarr;'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        800:{
            items:2,
            nav:true
        }
    }
  });

  $(".specialists__carousel").owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    navText: ['&larr;','&rarr;'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
        }
    }
  });


});




import 'normalize.css';
import '../styles/main.sass';
import $ from 'jquery';

// const header_image = $('#header-image');
// const image = new Image;

// image.onload = () => {
//   header_image.src = image.src;
// }
// image.src = './../assets/medias/image-intro-desktop.jpg';

const menuHamburger = () => {
  const menu = $('#mobile-menu');
  const menu_icon = $('#menu-icon');
  const close_icon = $('#close-icon');
  
  $('.hamburger').click(() => {
    menu.toggleClass('open');
    menu_icon.toggle();
    close_icon.toggle();
  });
};
menuHamburger();

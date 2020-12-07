/**
 * Dropdown menu
 */
document.addEventListener('DOMContentLoaded', () => {
  const menus = document.querySelectorAll('.navbar-burger');
  const dropdowns = document.querySelectorAll('.navbar-menu');

  if (menus.length && dropdowns.length) {
    for (let i = 0; i < menus.length; i++) {
      menus[i].addEventListener('click', () => {
        for (let j = 0; j < dropdowns.length; j++) {
          dropdowns[j].classList.toggle('is-active');
        }
      });
    }
  }
});

// jQeury
// slide
$(document).ready(function () {
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });

  $(".custom-carousel .slide__img").click(function () {
    $(".custom-carousel .slide__img").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

// Header
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

document.querySelectorAll(".navbar__menu a").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        icons.classList.remove("active");
    });
});

// Modal


const modalNotice = document.querySelector('.modal__notice');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');

modalNotice.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
});


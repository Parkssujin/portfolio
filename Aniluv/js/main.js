// Header
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

// Modal

const modalNotice = document.querySelector('.modal__notice');
console.log(modalNotice);
const modal = document.querySelector('.modal');

modalNotice.addEventListener('click', () => {
    modal.classList.add('show');
});

const btnClose = document.querySelector('.btn-close');

btnClose.addEventListener('click', () => {
    modal.classList.remove('show');
});
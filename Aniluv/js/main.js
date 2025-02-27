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
});


btnClose.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) { 
        modal.classList.remove('show');
    }
});


//Image slider

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".Image__slider").forEach((sliderSection) => {
        const slider = sliderSection.querySelector(".slider");
        const prevBtn = sliderSection.querySelector(".slider-btn.prev");
        const nextBtn = sliderSection.querySelector(".slider-btn.next");
        let currentIndex = 0;

        function getSlidesPerView() {
            return window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 5;
        }

        function updateSlider() {
            const slideWidth = slider.querySelector(".slide").offsetWidth + 10;
            const totalSlides = slider.querySelectorAll(".slide").length;
            const maxIndex = totalSlides - getSlidesPerView();

            currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

            prevBtn.style.display = currentIndex === 0 ? "none" : "block";
            nextBtn.style.display = currentIndex >= maxIndex ? "none" : "block";
        }

        nextBtn.addEventListener("click", () => {
            currentIndex++;
            updateSlider();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex--;
            updateSlider();
        });

        window.addEventListener("resize", updateSlider);

        updateSlider();
    });
});





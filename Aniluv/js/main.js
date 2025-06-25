// jQeury
// slide
$(document).ready(function () {
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    nav: false,   // 기본 내비게이션 숨김
    dots: true
  });

  $(".custom-carousel .slide__img").click(function () {
    $(".custom-carousel .slide__img").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

$(document).on("keydown", function (e) {
  const carousel = $(".custom-carousel.owl-carousel");

  if (e.key === "ArrowLeft") {
    carousel.trigger("prev.owl.carousel");
  }
  if (e.key === "ArrowRight") {
    carousel.trigger("next.owl.carousel");
  }
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

//character slide

const characterMembers = [
	{ name: "리바이 아커만", role: "진격의 거인" },
	{ name: "이누마케 토게", role: "주술회전" },
	{ name: "고죠 사토루", role: "주술회전" },
	{ name: "쿠도 신이치", role: "명탐정 코난" },
	{ name: "토도로키 쇼토", role: "나의 히어로 아카데미아" },
	{ name: "피카츄", role: "포켓몬스터" }
];

const characters = document.querySelectorAll(".character");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".character__name");
const memberRole = document.querySelector(".character__desc");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + characters.length) % characters.length;

	characters.forEach((character, i) => {
		const offset = (i - currentIndex + characters.length) % characters.length;

		character.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			character.classList.add("center");
		} else if (offset === 1) {
			character.classList.add("right-1");
		} else if (offset === 2) {
			character.classList.add("right-2");
		} else if (offset === characters.length - 1) {
			character.classList.add("left-1");
		} else if (offset === characters.length - 2) {
			character.classList.add("left-2");
		} else {
			character.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	memberName.style.opacity = "0";
	memberRole.style.opacity = "0";

	setTimeout(() => {
		memberName.textContent = characterMembers[currentIndex].name;
		memberRole.textContent = characterMembers[currentIndex].role;
		memberName.style.opacity = "1";
		memberRole.style.opacity = "1";
	}, 300);

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

leftArrow.addEventListener("click", () => {
	updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
	updateCarousel(currentIndex + 1);
});

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

characters.forEach((character, i) => {
	character.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);

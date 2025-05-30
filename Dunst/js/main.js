
//nav 메뉴 모바일

document.addEventListener("DOMContentLoaded", function() {
    const navHamburger = document.querySelector(".nav-hamburger");
    const navLinks = document.querySelector(".nav-links");

    navHamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        navHamburger.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            navHamburger.classList.remove("active");
        });
    });
});
//MAIN 배경 이미지 슬라이드
const mainSection = document.querySelector(".main");

if (mainSection) {
const images = [
    "./img/1-2.jpg",
    "./img/1-3.jpg",
    "./img/1-4.jpg"
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // 다음 이미지 선택
    mainSection.style.backgroundImage = `url(${images[currentIndex]})`; // 배경 변경
}

// 초기 배경 설정
mainSection.style.backgroundImage = `url(${images[0]})`;


setInterval(changeBackground, 3000);

}

//동영상 애니메이션 패럴랙스 효과

document.addEventListener("scroll", function () {
    let newSection = document.querySelector(".new");
    let video = document.querySelector(".new-video");
    let newContent = document.querySelector(".new-content");
    let menContent = document.querySelector(".men-content");
    let accContent = document.querySelector(".acc-content");
    
    let scrollPosition = window.scrollY;
    let newPosition = newSection.offsetTop;
    let windowHeight = window.innerHeight;

    // 패럴랙스 효과 적용
    if (scrollPosition >= newPosition - windowHeight) {
        let offset = (scrollPosition - newPosition) * 0.3;
        video.style.transform = `translateY(${offset}px)`;
    }

    // 텍스트 애니메이션
    if (scrollPosition >= newPosition - windowHeight / 1.5) {
        newContent.style.opacity = "1";
        newContent.style.transform = "translateY(0)";
    }
    if (scrollPosition >= newPosition - windowHeight / 1.5) {
        menContent.style.opacity = "1";
        menContent.style.transform = "translateY(0)";
    }
    if (scrollPosition >= newPosition - windowHeight / 1.5) {
        accContent.style.opacity = "1";
        accContent.style.transform = "translateY(0)";
    }
});

// 스크롤 시 나타나는 애니메이션
document.addEventListener("DOMContentLoaded", function () {
    const fadeSections = document.querySelectorAll(".fade-section");

    function fadeInOnScroll() {
        fadeSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.style.opacity = 1;
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // 페이지 로드 시 실행
});
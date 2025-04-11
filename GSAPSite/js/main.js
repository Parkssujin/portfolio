// 질문/답변 데이터
const quizData = [
    {
      question: "🍹 어떤 분위기의 카페가 좋아요?",
      answers: ["조용하고 차분한", "트렌디하고 활기찬", "감성적인 무드"]
    },
    {
      question: "🌈 어떤 맛을 선호하나요?",
      answers: ["달콤한 맛", "상큼한 맛", "쓴맛"]
    },
    {
      question: "🌿 지금 기분은 어때요?",
      answers: ["기분전환하고 싶어요", "피곤해요", "편안하게 쉬고 싶어요"]
    }
  ];
  
  // 결과 + 무드 스타일
  const results = [
    {
      name: "자몽에이드",
      img: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132602_1717993562754_oDf7jybQYy.jpg",
      moodColor: "#fff3cd",
      emojis: ["🍋", "🌞", "✨"]
    },
    {
      name: "딸기 라떼",
      img: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250116001724_1736954244791_8qDsY0gj14.jpg",
      moodColor: "#ffe4e1",
      emojis: ["🍓", "💖", "🌸"]
    },
    {
      name: "아메리카노",
      img: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000925_1742396965069_ekSqAIVc1L.jpg",
      moodColor: "#2f2f2f",
      emojis: ["☕", "🌙", "💨"]
    }
  ];
  
  let currentQ = 0;
  let answerTotal = [0, 0, 0];
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const resultEl = document.getElementById("result");
  const drinkNameEl = document.getElementById("drink-result");
  const drinkImageEl = document.getElementById("drink-image");
  
  function showQuestion() {
    const q = quizData[currentQ];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
  
    gsap.fromTo(".question", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
  
    q.answers.forEach((ans, idx) => {
      const btn = document.createElement("button");
      btn.textContent = ans;
      btn.onclick = () => {
        answerTotal[idx]++;
        currentQ++;
        if (currentQ < quizData.length) {
          showQuestion();
        } else {
          showResult();
        }
      };
      answersEl.appendChild(btn);
      gsap.fromTo(btn, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, delay: 0.1 * idx });
    });
  }
  
  function showResult() {
    document.querySelector('.quiz-box').style.display = "none";
  
    const maxIndex = answerTotal.indexOf(Math.max(...answerTotal));
    const result = results[maxIndex];
  
    // 배경색 바꾸기
    document.body.style.background = result.moodColor;
  
    // 결과 출력
    drinkNameEl.textContent = `당신에게 어울리는 음료는\n${result.name}!`;
    drinkImageEl.src = result.img;
    drinkImageEl.classList.add("show");
  
    // 이모지 파티클 생성
    createEmojiParticles(result.emojis);
  
    // GSAP 효과
    gsap.fromTo("#drink-result", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo("#drink-image", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });
  }
  
  function createEmojiParticles(emojiList) {
    const container = document.createElement("div");
    container.className = "emoji-container";
    document.body.appendChild(container);
  
    for (let i = 0; i < 30; i++) {
      const emoji = document.createElement("span");
      emoji.className = "emoji";
      emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.fontSize = `${Math.random() * 24 + 16}px`;
      container.appendChild(emoji);
  
      gsap.fromTo(emoji, {
        y: -50,
        opacity: 1
      }, {
        y: window.innerHeight,
        opacity: 0,
        duration: Math.random() * 2 + 2,
        delay: Math.random(),
        ease: "power1.out",
        onComplete: () => emoji.remove()
      });
    }
  }
  
  // 초기 실행
  showQuestion();
  
  // 모바일 환경에서는 커서 비활성화
  if (window.innerWidth < 768) {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.display = "none";
    }
  } else {
    // 커서 GSAP 애니메이션
    document.addEventListener("mousemove", function (e) {
      const cursor = document.querySelector(".cursor");
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  
    document.addEventListener("click", function () {
      const cursor = document.querySelector(".cursor");
      gsap.fromTo(cursor, { scale: 1 }, {
        scale: 2,
        duration: 0.2,
        ease: "power1.out",
        yoyo: true,
        repeat: 1
      });
    });
  }
  
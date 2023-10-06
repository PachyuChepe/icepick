// 전역 변수 선언
let currentSlide = 0; // 현재 표시된 슬라이드의 인덱스
let slideTimer; // 자동 슬라이드 타이머 변수

// 이미지 슬라이드 함수
function showSlide(n) {
  const slides = document.querySelectorAll(".slideshow img");

  // 현재 슬라이드를 숨김
  slides[currentSlide].style.display = "none";

  // 다음 슬라이드 인덱스 계산
  currentSlide += n;

  // 슬라이드 순환
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // 새로운 슬라이드를 표시
  slides[currentSlide].style.display = "block";

  // 자동 슬라이드 타이머 재설정 (5초 후에 자동으로 다음 슬라이드로 이동)
  clearInterval(slideTimer);
  slideTimer = setInterval(function () {
    plusSlides(1); // 1은 다음 슬라이드로 이동
  }, 5000); // 5000밀리초(5초) 간격으로 실행
}

// 이전 슬라이드 표시
function plusSlides(n) {
  showSlide(n);
}

// 초기 슬라이드 표시
showSlide(0);

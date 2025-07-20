// script.js
let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slides = carousel.querySelectorAll("img");
  const totalSlides = slides.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function goToDiary() {
  window.location.href = "diary.html";
}

function openFeatures() {
  alert("功能区正在建设中：\n1. 关系图鉴\n2. 系统日志\n3. 未来愿望树");
}

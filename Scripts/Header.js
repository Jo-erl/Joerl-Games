const sliderContainer = document.querySelector(".slider");
const navigationContainer = document.querySelector(".slider-navigation");
const totalSlides = 18;
let currentSlide = 0;

// SLIDES AND NAVIGATION DOTS
for (let i = 1; i <= totalSlides; i++) {
  // Create slide
  const slide = document.createElement("div");
  slide.className = `slide ${i === 1 ? "active" : ""}`;
  slide.style.backgroundImage = `url('./Images/${i}.jpg')`;
  sliderContainer.appendChild(slide);

  // NAVIGATION DOT
  const dot = document.createElement("div");
  dot.className = `slider-dot ${i === 1 ? "active" : ""}`;
  dot.addEventListener("click", () => goToSlide(i - 1));
  navigationContainer.appendChild(dot);
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-dot");

function goToSlide(index) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = index;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}

// PRELOAD IMAGES FOR SMOOTHER TRANSITIONS
function preloadImages() {
  for (let i = 1; i <= totalSlides; i++) {
    const img = new Image();
    img.src = `./Images/${i}.jpg`;
  }
}

// INITIALIZE
preloadImages();
setInterval(nextSlide, 2000);

// KEYBOARD NAVIGATION
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  }
});

// SMOOTH SCROLL FUNCTIONALITY
document.querySelector(".scroll-down").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#favorites").scrollIntoView({
    behavior: "smooth",
  });
});

const slider = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-wrapper img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0;
let isAnimating = false;

const moveToSlide = (index) => {
  isAnimating = true;

  slider.style.transform = `translateX(-${index * 100}%)`;

  currentSlide = index;


  setTimeout(() => {
    isAnimating = false;
  }, 500); // Adjust transition duration as needed
};

// Autoplay (optional)
let autoplayInterval = setInterval(() => {
  const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
  moveToSlide(nextSlide);
}, 10000); // Adjust autoplay interval as needed

// Button click handlers
prevBtn.addEventListener('click', () => {
  const prevSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
  moveToSlide(prevSlide);
});

nextBtn.addEventListener('click', () => {
  const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
  moveToSlide(nextSlide);
});

// Pause autoplay on hover (optional)
slider.addEventListener('mouseenter', () => {
  clearInterval(autoplayInterval);
});

slider.addEventListener('mouseleave', () => {
  autoplayInterval = setInterval(() => {
    const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    moveToSlide(nextSlide);
  }, 10000); // Adjust autoplay interval as needed
});

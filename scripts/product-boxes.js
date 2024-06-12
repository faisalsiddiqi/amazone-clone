const sliderContainer = document.querySelector('.p-slider-container');
const pnextBtn = document.querySelector('.p-next-btn');
const pprevBtn = document.querySelector('.p-prev-btn');

const imageWrappers = document.querySelectorAll('.p-image-wraper');
const imageWidth = imageWrappers[0].clientWidth;  // Get image width for calculations

let pcurrentSlide = 0;

// Function to slide the images
function slideImages(slideIndex) {
  sliderContainer.style.transform = `translateX(-${slideIndex * imageWidth}px)`;
  pcurrentSlide = slideIndex;
}

// Next button click event listener
pnextBtn.addEventListener('click', () => {
  if (pcurrentSlide < imageWrappers.length - 1) {
    pcurrentSlide++;
    slideImages(pcurrentSlide);
  }
});

// Previous button click event listener
pprevBtn.addEventListener('click', () => {
  if (pcurrentSlide > 0) {
    pcurrentSlide--;
    slideImages(pcurrentSlide);
  }
});
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let counter = 1;
const slideWidth = images[0].clientWidth;

function slide() {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;

  if (counter === images.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      counter = 1;
    }, 1000);
  }
}

setInterval(slide, 3000); // Change slide every 3 seconds (3000 milliseconds)

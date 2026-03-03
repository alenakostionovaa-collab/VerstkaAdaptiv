const banners = document.querySelectorAll('.slider_banner .big_banner .banner');
const sliderLine = document.querySelector('.slider_banner .big_banner');
const dots = document.querySelectorAll('.slider_dots .dot');

let count = 0;
let width;


function init() {
  width = document.querySelector('.slider_banner').offsetWidth;

  sliderLine.style.width = width * banners.length + 'px';

  banners.forEach(banner => {
    banner.style.width = width + 'px';
  });

  updateSlider();
}


function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[count]) {
    dots[count].classList.add('active');
  }
}


function updateSlider() {
  sliderLine.style.transform = `translateX(-${count * width}px)`;
  updateDots();
}


document.querySelectorAll('.banner_btn--left').forEach(btn => {
  btn.addEventListener('click', () => {
    count--;
    if (count < 0) count = banners.length - 1;
    updateSlider();
  });
});

document.querySelectorAll('.banner_btn--right').forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    if (count >= banners.length) count = 0;
    updateSlider();
  });
});


window.addEventListener('resize', init);
init();

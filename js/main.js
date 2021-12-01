const body = document.querySelector('body');

const BackgroundColors = {
  GREEN: '#849D8F',
  BLUE: '#8996A6',
  GREY: '#9D8B84',
}

//слайдер
let slides = document
  .querySelectorAll('.slide-item');

let controls = document
  .querySelector('.slider-controls')
  .querySelectorAll('input');

const setBackgroundColor = (index) => {
  switch (index) {
    case 0:
      return BackgroundColors.GREEN;
    case 1:
      return BackgroundColors.BLUE;
    case 2:
      return BackgroundColors.GREY;
    default:
      BackgroundColors.GREEN;
  }
}

controls.forEach((control, index) => {
  control.addEventListener('change', () => {
    controls.forEach(control => control.checked = false);
    slides.forEach(slide => slide.classList.remove('show'));
    control.checked = true;
    slides[index].classList.add('show');
    body.style.backgroundColor = setBackgroundColor(index);
  });
});

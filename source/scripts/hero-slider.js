/* Работа слайдера в hero-блоке */
const buttonPrevious = document.querySelector('.slider__button--previous');
const buttonNext = document.querySelector('.slider__button--next');
const sliderPagination = document.querySelector('.slider-pagination');
const paginationButtons = document.querySelectorAll('.slider-pagination__button');
const sliderItems = document.querySelectorAll('.slider__item');

let current = 0;

const changeSliderControls = () => {
  if (current <= 0) {
    buttonPrevious.disabled = true;
    buttonNext.disabled = false;
  } else if (current >= sliderItems.length - 1) {
    buttonNext.disabled = true;
    buttonPrevious.disabled = false;
  } else {
    buttonNext.disabled = false;
    buttonPrevious.disabled = false;
  }

  sliderItems.forEach((elem) => {
    elem.classList.remove('slider__item--top');
  });
  sliderItems[current].classList.add('slider__item--top');

  paginationButtons.forEach((elem) => {
    elem.classList.remove('slider-pagination__button--current');
  });
  paginationButtons[current].classList.add('slider-pagination__button--current');
};

const onButtonPreviousClick = () => {
  buttonPrevious.addEventListener('click', () => {
    current--;
    changeSliderControls();
  });
};

const onButtonNextClick = () => {
  buttonNext.addEventListener('click', () => {
    current++;
    changeSliderControls();
  });
};

paginationButtons.forEach((element, index) => {
  element.dataset.id = index;
});

const onSliderPaginationClick = () => {
  sliderPagination.addEventListener('click', (evt) => {
    if (evt.target.type === 'button') {
      current = +evt.target.dataset.id;
      changeSliderControls();
    }
  });
};

export { onButtonPreviousClick, onButtonNextClick, onSliderPaginationClick };

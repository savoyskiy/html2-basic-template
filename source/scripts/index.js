/* в этот файл добавляет скрипты*/
/* Работа меню в мобильном варианте */
const headerButtom = document.querySelector('.header__button');
const headerMainMenu = document.querySelector('.header__main-menu');

headerButtom.addEventListener('click', () => {
  headerMainMenu.classList.toggle('header__main-menu--hidden');
  headerButtom.classList.toggle('header__button--open');
});

/* работа слайдера */
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

buttonPrevious.addEventListener('click', () => {
  current--;
  changeSliderControls();
});

buttonNext.addEventListener('click', () => {
  current++;
  changeSliderControls();
});

paginationButtons.forEach((element, index) => {
  element.dataset.id = index;
});

sliderPagination.addEventListener('click', (evt) => {
  if (evt.target.type === 'button') {
    current = +evt.target.dataset.id;
    changeSliderControls();
  }
});

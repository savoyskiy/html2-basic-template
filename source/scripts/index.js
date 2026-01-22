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

/* слайдер цены */
const priceSlider = document.querySelector('.price__slider');
const priceMin = document.querySelector('.price__input--min');
const priceMax = document.querySelector('.price__input--max');

noUiSlider.create(priceSlider, {
  start: [0, 900],
  step: 1,
  connect: true,
  range:{
    'min': 0,
    'max': 1000
  },
  cssPrefix: 'noui-',
  format: {
    to: function (value) {
      return parseInt(value, 10);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

priceSlider.noUiSlider.on('update', () => {
  priceMin.value = priceSlider.noUiSlider.get()[0];
  priceMax.value = priceSlider.noUiSlider.get()[1];
});

const setSliderMinValue = (value) => {
  priceSlider.noUiSlider.set([value, null]);
};

const setSliderMaxValue = (value) => {
  priceSlider.noUiSlider.set([null, value]);
};

priceMin.addEventListener('change', () => {
  setSliderMinValue(priceMin.value);
});

priceMax.addEventListener('change', () => {
  setSliderMaxValue(priceMax.value);
});

/* сброс формы */
const buttonReset = document.querySelector('.filter__button--reset');

buttonReset.addEventListener('click', () => {
  setSliderMinValue(0);
  setSliderMaxValue(900);
});

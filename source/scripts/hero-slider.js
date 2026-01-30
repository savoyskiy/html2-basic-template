/* Работа слайдера в hero-блоке */
const buttonPrevious = document.querySelector('.slider__button--previous');
const buttonNext = document.querySelector('.slider__button--next');
const sliderPagination = document.querySelector('.slider-pagination');
const sliderItems = document.querySelectorAll('.slider__item');
let paginationButtons = document.querySelectorAll('.slider-pagination__button');

let current = 0;

if (sliderItems.length < 2) {
  buttonNext.disabled = true;
}

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

/* добавление нужного количества кнопок пагинации слайдера */
if (paginationButtons.length < sliderItems.length) {
  for (let i = paginationButtons.length; i < sliderItems.length; i++) {
    const newPaginationItem = document.querySelector('.slider-pagination__item').cloneNode(true);
    const newPaginationItemButton = newPaginationItem.querySelector('button');
    newPaginationItemButton.classList.remove('slider-pagination__button--current');
    const newPaginationItemButtonText = newPaginationItemButton.querySelector('span');
    newPaginationItemButtonText.textContent = i + 1;
    sliderPagination.append(newPaginationItem);
  }
}

paginationButtons = document.querySelectorAll('.slider-pagination__button');
paginationButtons.forEach((element, index) => {
  element.dataset.id = index;
});

const onSliderPaginationClick = () => {
  if (sliderItems.length >= 2) {
    sliderPagination.addEventListener('click', (evt) => {
      if (evt.target.type === 'button') {
        current = +evt.target.dataset.id;
        changeSliderControls();
      }
    });
  }
};

export { onButtonPreviousClick, onButtonNextClick, onSliderPaginationClick };

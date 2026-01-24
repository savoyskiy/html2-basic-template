/* пагинация в каталоге */
const previousButton = document.querySelector('.pagination__link--previous');
const nextButton = document.querySelector('.pagination__link--next');
const linkList = document.querySelectorAll('a.pagination__link');
const pagination = document.querySelector('.pagination');

let current = 1; /* начальное значение установлено 1 для отображения как в макете */

const changePagination = () => {
  if (current <= 0) {
    previousButton.classList.add('pagination__link--hidden');
    nextButton.classList.remove('pagination__link--hidden');
  } else if (current >= linkList.length - 1) {
    nextButton.classList.add('pagination__link--hidden');
    previousButton.classList.remove('pagination__link--hidden');
  } else {
    nextButton.classList.remove('pagination__link--hidden');
    previousButton.classList.remove('pagination__link--hidden');
  }

  linkList.forEach((elem) => {
    elem.classList.remove('pagination__link--current');
    linkList[current].classList.add('pagination__link--current');
  });
};

const onNextButtonClick = () => {
  nextButton.addEventListener('click', () => {
    current++;
    changePagination();
  });
};

const onPreviousButtonClick = () => {
  previousButton.addEventListener('click', () => {
    current--;
    changePagination();
  });
};

linkList.forEach((element, index) => {
  element.dataset.id = index;
});

const onlinkListClick = () => {
  pagination.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'A') {
      evt.preventDefault();
      current = +evt.target.dataset.id;
      changePagination();
    }
  });
};

export { onNextButtonClick, onPreviousButtonClick, onlinkListClick };

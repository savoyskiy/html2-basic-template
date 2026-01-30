/* Отправка данных в фильтре каталога */
const SERVER_ADDRESS = 'https://echo.htmlacademy.ru';
const catalogFilter = document.querySelector('.catalog__filter');
const submitButton = catalogFilter.querySelector('.filter__button--submit');
const resetButton = catalogFilter.querySelector('.filter__button--reset');
const modal = document.querySelector('.modal');
const modalText = modal.querySelector('.modal__text');
const modalButton = modal.querySelector('.modal__button');

const disableFilterButtons = () => {
  submitButton.disabled = true;
  resetButton.disabled = true;
};

const undisableFilterButtons = () => {
  submitButton.disabled = false;
  resetButton.disabled = false;
};

const onClickBackdrop = (evt) => {
  const isOnBackdropClick = evt.target === evt.currentTarget;

  if (isOnBackdropClick) {
    modal.close();
  }
};

const onSubmitFilter = (evt) => {
  evt.preventDefault();
  disableFilterButtons();
  const formData = new FormData(evt.target);

  let requestData = '';
  let modalParameters = 'method: GET';
  for (const [key, value] of formData) {
    requestData += `${key}=${value}&`;
    modalParameters += `, ${key}: ${value}`;
  }
  requestData = requestData.slice(0, requestData.length - 1);

  fetch(`${SERVER_ADDRESS}?${requestData}`)
    .then(
      (responce) => {
        if (!responce.ok) {
          throw new Error;
        }
        modalText.textContent = `Запрос отправлен. Параметры запроса: ${modalParameters}`;
      }
    )
    .catch(
      () => {
        modalText.textContent = 'Что-то пошло не так... попробуйте ещё раз';
        modal.showModal();
      }
    )
    .finally(
      () => {
        undisableFilterButtons();
        modal.showModal();
      }
    );
};

const setFilterEventListeners = () => {
  modal.addEventListener('click', onClickBackdrop);
  modalButton.addEventListener('click', () => {
    modal.close();
  });
  catalogFilter.addEventListener('submit', onSubmitFilter);
};

export { setFilterEventListeners };

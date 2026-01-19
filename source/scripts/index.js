/* в этот файл добавляет скрипты*/
/* Работа меню в мобильном варианте */
const headerButtom = document.querySelector('.header__button');
const headerMainMenu = document.querySelector('.header__main-menu');

headerButtom.addEventListener('click', () => {
  headerMainMenu.classList.toggle('header__main-menu--hidden');
  headerButtom.classList.toggle('header__button--open');
});

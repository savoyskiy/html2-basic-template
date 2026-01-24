/* в этот файл добавляет скрипты*/
import { onMobileMenuButtonClick } from './mobile-menu.js';
import { onButtonPreviousClick, onButtonNextClick, onSliderPaginationClick } from './hero-slider.js';
import { setPriceInputsValues, setPriceMinSliderValue, setPriceMaxSliderValue, resetSliderValues } from './price-slider.js';
import { onNextButtonClick, onPreviousButtonClick, onlinkListClick } from './catalog-pagination.js';

/* Работа меню в мобильном варианте */
onMobileMenuButtonClick();

/* Работа слайдера в hero-блоке */
onButtonPreviousClick();
onButtonNextClick();
onSliderPaginationClick();

/* слайдер цены */
setPriceInputsValues();
setPriceMinSliderValue();
setPriceMaxSliderValue();
resetSliderValues();

/* пагинация в каталоге */
/* реализовано только переключение ссылок и их стилей */
onNextButtonClick();
onPreviousButtonClick();
onlinkListClick();

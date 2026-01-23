/* в этот файл добавляет скрипты*/
import { onMobileMenuButtonClick } from './mobile-menu.js';
import { onButtonPreviousClick, onButtonNextClick, onSliderPaginationClick } from './hero-slider.js';
import { setPriceInputsValues, setPriceMinSliderValue, setPriceMaxSliderValue, resetSliderValues } from './price-slider.js';

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

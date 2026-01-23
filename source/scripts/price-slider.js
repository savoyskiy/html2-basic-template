/* Слайдер цены */
const priceSlider = document.querySelector('.price__slider');
const priceMin = document.querySelector('.price__input--min');
const priceMax = document.querySelector('.price__input--max');
const buttonReset = document.querySelector('.filter__button--reset');

noUiSlider.cssClasses.target += ' price__slider-target';
noUiSlider.cssClasses.connect += ' price__slider-connect';
noUiSlider.cssClasses.handle += ' price__slider-handle';

noUiSlider.create(priceSlider, {
  start: [0, 900],
  step: 1,
  connect: true,
  range:{
    'min': 0,
    'max': 1000
  },
  format: {
    to: function (value) {
      return parseInt(value, 10);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

const setPriceInputsValues = () => {
  priceSlider.noUiSlider.on('update', () => {
    priceMin.value = priceSlider.noUiSlider.get()[0];
    priceMax.value = priceSlider.noUiSlider.get()[1];
  });
};

const setSliderMinValue = (value) => {
  priceSlider.noUiSlider.set([value, null]);
};

const setSliderMaxValue = (value) => {
  priceSlider.noUiSlider.set([null, value]);
};

const setPriceMinSliderValue = () => {
  priceMin.addEventListener('change', () => {
    setSliderMinValue(priceMin.value);
  });
};

const setPriceMaxSliderValue = () => {
  priceMax.addEventListener('change', () => {
    setSliderMaxValue(priceMax.value);
  });
};

/* сброс значений слайдера цены при сбросе формы */
const resetSliderValues = () => {
  buttonReset.addEventListener('click', () => {
    setSliderMinValue(0);
    setSliderMaxValue(900);
  });
};

export { setPriceInputsValues, setPriceMinSliderValue, setPriceMaxSliderValue, resetSliderValues };

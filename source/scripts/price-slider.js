/* Слайдер цены */
const priceSlider = document.querySelector('.price__slider');
const priceMin = document.querySelector('.price__input--min');
const priceMax = document.querySelector('.price__input--max');
const buttonReset = document.querySelector('.filter__button--reset');
const radixParameter = 10;
const sliderParameters = {
  minHandIndex: 0,
  maxHandIndex: 1,
  minHandStart: 0,
  maxHandStart: 900,
  minSliderValue: 0,
  maxSliderValue: 1000,
  sliderValueStep: 1
};

noUiSlider.cssClasses.target += ' price__slider-target';
noUiSlider.cssClasses.connect += ' price__slider-connect';
noUiSlider.cssClasses.handle += ' price__slider-handle';

noUiSlider.create(priceSlider, {
  start: [sliderParameters.minHandStart, sliderParameters.maxHandStart],
  step: sliderParameters.sliderValueStep,
  connect: true,
  range:{
    'min': sliderParameters.minSliderValue,
    'max': sliderParameters.maxSliderValue
  },
  format: {
    to: function (value) {
      return parseInt(value, radixParameter);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

const setPriceInputsValues = () => {
  priceSlider.noUiSlider.on('update', () => {
    priceMin.value = priceSlider.noUiSlider.get()[sliderParameters.minHandIndex];
    priceMax.value = priceSlider.noUiSlider.get()[sliderParameters.maxHandIndex];
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
    setSliderMinValue(sliderParameters.minHandStart);
    setSliderMaxValue(sliderParameters.maxHandStart);
  });
};

export { setPriceInputsValues, setPriceMinSliderValue, setPriceMaxSliderValue, resetSliderValues };

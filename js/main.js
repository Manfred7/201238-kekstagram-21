'use strict';
(() => {

  const renderAd = (template, adObj) => {
    let adElement = template.cloneNode(true);
    let img = adElement.querySelector(`img`);

    img.src = adObj.url;
    img.alt = adObj.description;

    // adElement.style.left = `${adObj.location.x - DELTA_X}px`;
    // adElement.style.top = `${adObj.location.y + DELTA_Y}px`;

    adElement.addEventListener(`click`, () => {
      const obj = {
        element: adElement,
        data: adObj,
      };
      window.card.show(obj);
    });

    return adElement;
  };

  const makeFragment = (ads) => {
    const pinTemplate = document.querySelector(`#picture`)
      .content
      .querySelector(`.picture`);

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < ads.length; i++) {
      fragment.appendChild(renderAd(pinTemplate, ads[i]));
    }
    return fragment;
  };

  /*
  const clearOldPins = () => {
    let renderedPins = document.querySelectorAll(`.map__pin`);
    let pins = Array.prototype.slice.call(renderedPins);

    pins.forEach((item) => {
      if (!item.classList.contains(`map__pin--main`)) {
        item.remove();
      }
    });

  };
  */

  /*
  const markActivePin = (pin) => {
    let renderedPins = document.querySelectorAll(`.map__pin`);
    let pins = Array.prototype.slice.call(renderedPins);

    pins.forEach((item) => {
      if (!item.classList.contains(`map__pin--main`)) {
        item.classList.remove(`map__pin--active`);
      }
    });

    pin.classList.add(`map__pin--active`);

  };
  */

  const createPictures = (data) => {
    // clearOldPins();
    const pictures = makeFragment(data);
    const picturesContainer = document.querySelector(`.pictures`);
    picturesContainer.appendChild(pictures);
  };

  const onLoad = (data) => {

    createPictures(data);
    //  theMap.classList.remove(`map--faded`);
    // window.filters.setActive();
    // window.map.pins = window.filters.getOnlyWithOffer(pinsData);
    // const top5Pins = window.filters.getTop5Pins(window.map.pins);
    // window.map.updateData(top5Pins);
    //  window.form.setActiveState();
  };

  const setActiveState = () => {
    window.backendAPI.load(onLoad, window.utils.onError);
  };

  setActiveState();

})();

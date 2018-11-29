const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
  this.regions = [];
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:AllMunrosLoaded', (event) => {
    // Get data
    const munroData = event.detail;
    // Send data to populate function
    this.filterRegions(munroData);
    this.populate();

    this.container.addEventListener('change', (event) => {
      const userSelection = event.target.value;
      PubSub.publish('SelectView:UserWantsSomething', userSelection);
    })
  })
};

SelectView.prototype.filterRegions = function (munroData) {
  this.regions = munroData
    .map(munro => munro.region)
    .filter((region, index, regionArray) => {
      return index === regionArray.indexOf(region);
    });
};

SelectView.prototype.populate = function () {
  this.regions.forEach((region) => {
    const optionElement = document.createElement('option');
    optionElement.value = region;
    optionElement.textContent = region;
    this.container.appendChild(optionElement);
  })
};

module.exports = SelectView;

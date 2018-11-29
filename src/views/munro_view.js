const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (munro) {
  this.munro = munro;
}

MunroView.prototype.render = function (container) {
  // Create overall element
  const sectionElement = document.createElement('section');
  // Put appropriate data into sub-elements, adding to overall
  const headerElement = document.createElement('h1');
  headerElement.textContent = this.munro.name;

  const list = document.createElement('ul');

  const heightElement = document.createElement('li');
  heightElement.textContent = `Height: ${this.munro.height}m`;

  const meaningElement = document.createElement('li');
  meaningElement.textContent = `Meaning: ${this.munro.meaning}`;

  list.appendChild(heightElement);
  list.appendChild(meaningElement);
  // Add overall element to container
  sectionElement.appendChild(headerElement);
  sectionElement.appendChild(list);

  container.appendChild(sectionElement);

};

module.exports = MunroView;

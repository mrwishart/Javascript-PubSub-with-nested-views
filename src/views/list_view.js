const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const ListView = function (container) {
  this.container = container;
  this.munros = [];
}

ListView.prototype.bindEvents = function () {

  PubSub.subscribe('Munro:MunrosLoaded', (event) => {
    this.container.innerHTML = '';
    // Save data in instance variable
    this.munros = event.detail;
    // Run Render function.
    this.render();
  })
};

ListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    // Create new MunroView
    const munroView = new MunroView(munro);
    // Run munroView's render, which will append the container we pass in
    munroView.render(this.container);
  })
};

module.exports = ListView;

const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munro = function () {
  this.munros = null;
}

Munro.prototype.bindEvents = function () {
  const request = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  request.get((data) => {
    // Save data
    this.munros = data;
    // Publish it to the ether, POSSIBLY to be picked up by list_view
    PubSub.publish('Munro:AllMunrosLoaded', this.munros);
  })
};

module.exports = Munro;

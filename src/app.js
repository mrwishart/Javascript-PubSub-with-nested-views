const Munro = require('./models/munro.js');
const ListView = require('./views/list_view.js');
const MunroView = require('./views/munro_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listElement = document.querySelector('main');
  const listView = new ListView(listElement);
  listView.bindEvents();

  const munro = new Munro();
  munro.bindEvents();
})

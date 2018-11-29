const Munro = require('./models/munro.js');
const ListView = require('./views/list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listElement = document.querySelector('main');
  const listView = new ListView(listElement);
  listView.bindEvents();

  const selectionElement = document.querySelector('#select-menu');
  const selectView = new SelectView(selectionElement);
  selectView.bindEvents();

  const munro = new Munro();
  munro.bindEvents();

})

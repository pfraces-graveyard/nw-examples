var gui = require('nw.gui');

document.getElementById('canvas')
  .innerHTML = '<h1>Args: ' + gui.App.argv + '</h1>';

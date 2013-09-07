var canvas = document.getElementById('canvas');

canvas.innerHTML = '<h1>Stdin</h1>';

process.stdin.on('data', function (data) {
  canvas.innerHTML += data;
});

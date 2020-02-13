// draw canvas
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

// canvas works with any device
var size = window.innerWidth / 4;
var dpr = window.devicePixelRatio;
canvas.width = size*dpr;
canvas.height = size*dpr;
context.scale(dpr,dpr);

// square canvas
context.lineCap = "square";
context.lineWidth = 2;

// clear canvas
function clearCanvas(){
  context.globalCompositeOperation = "source-over";
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("caption").innerHTML = "";
}

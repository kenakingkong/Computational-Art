// TILED LINES TUTORIAL
// https://generativeartistry.com/tutorials/tiled-lines/

function tiledLines(){
  
  context.restore();
  clearCanvas();
  
  // change caption
  document.getElementById("caption").innerHTML = "Impossible maze??";
  
  // draw 1 line
  //draw(0, 0, size, size);

  // draw multiple lines
  //var step = 80;  // fits in 4 times (width 320)
  var steps = [10, 20, 40, 80];
  var step = steps[Math.floor(Math.random()*steps.length)];
  for (var x=0; x < size; x += step){
    for (var y=0; y < size; y += step){
      drawTiledLines(x,y, step, step);
    }
  }
}

function drawTiledLines(x, y, width, height){
  // static line
  //context.moveTo(x,y);
  //context.lineTo(x+width, y+height);
  //context.stroke();
  
  // generative line 
  var leftToRight = Math.random() >= 0.5;
  
  if (leftToRight){
    //left -> right
    context.moveTo(x,y);
    context.lineTo(x+width, y+height);
  } else {
    // right -> left
    context.moveTo(x+width, y);
    context.lineTo(x,y + height);
  }
  
  context.stroke();
  
}

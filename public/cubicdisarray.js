// CUBIC DISARRAY 
// https://generativeartistry.com/tutorials/cubic-disarray/

function cubicDisarray(){
  clearCanvas();
  document.getElementById("caption").innerHTML = "FUnky cubes idk";
  
  var squareSize = 30;
  
  var randomDisplacement = 15;  //translate out of position
  var rotateMultiplier = 20;    //how much they rotate
  var offset = 10;              //how much to offset entire drawing to center it on canvas
  
  for (var i=squareSize; i<= size-squareSize; i += squareSize) {
    for (var j=squareSize; j <= size - squareSize; j+= squareSize) {
      
      // random rotation
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var rotateAmt = j/size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;
      
      // random translation
      plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var translateAmt = j/size * plusOrMinus * Math.random() * randomDisplacement;
      
      context.save();
      //context.translate(i,j);   //for orderly squares
      
      context.translate(i + translateAmt + offset, j + offset);
      context.rotate(rotateAmt);
      
      drawCubicDisarray(squareSize, squareSize);
      context.restore();
    }
  }
  
}

// draw the cube
function drawCubicDisarray(width, height){
  context.beginPath();
  context.rect(-width/2, -height/2, width, height);
  context.stroke();
}
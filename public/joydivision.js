// JOY DIVISION MOUNTIANS
//https://generativeartistry.com/tutorials/joy-division/


function joyDivision(){
  
  clearCanvas();
  
  document.getElementById("caption").innerHTML = "The Unknown Pleasures cover shows a series of radio frequency periods from the first pulsar discovered.";

  
  var step = 10;
  var lines = [];
  
  // create the lines
  for (var i = step; i<= size - step; i+= step){
    
    var line = [];
    for (var j = step; j<= size - step; j+= step){
      
      // straight lines
      //var point = {x: j, y: i};
      
      // jumpy lines
      //var random = Math.random()*10;
      //var point = {x: j, y: i+random};
      
      //jumpy toward center
      var distanceToCenter = Math.abs(j - size / 2);
      var variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
      var random = Math.random() * variance / 2 * -1;
      var point = {x: j, y: i+random};
      
      
      line.push(point);
    }
    lines.push(line);
  }
  
  drawJoyDivision(lines);
  
}

function drawJoyDivision(lines){
  
  for (var i=10; i<lines.length; i++){
    
    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);
    
    // really jagged lines
    //for (var j=0; j < lines[i].length; j++){
    //  context.lineTo(lines[i][j].x, lines[i][j].y);
    //}
    
    // less jagged lines
    for (var j=0; j<lines[i].length-2; j++){
      var xc = (lines[i][j].x + lines[i][j+1].x) /2;
      var yc = (lines[i][j].y + lines[i][j+1].y) /2;
      context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);

    }
    
    // less jagged lines p2
    context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j+1].x, lines[i][j+1].y,)
    
    // global composite operations 
    // destout - erase our new shape from existing lines above it
    context.save();
    context.globalCompositeOperation = "destination-out";
    context.fill();
    context.restore();
    
    context.stroke();
  }
}
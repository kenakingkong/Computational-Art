const p5IFrameIds = ["p5-chaotic-circles", "p5-create-circles" , "p5-chase-dot", "p5-random-dots"];

function showP5Embed(id){
  
  // save state
  let x = document.getElementById(id);
  let state = x.style.display;
  
  // hide all the other projects
  p5IFrameIds.forEach(el_id => document.getElementById(el_id).style.display = "none")
  
  //show the new project
  if (state == "none"){
    x.style.display = "";
    x.src = x.src; 
  } else {
    x.style.display = "none";
  }
}

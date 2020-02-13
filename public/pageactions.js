function hideSection(id) {
  
  var x = document.getElementById(id);
  var rightArrow = document.getElementById(id.concat("-arrow-right"));
  var downArrow = document.getElementById(id.concat("-arrow-down"));
  
  if (x.style.display === "none") {
    x.style.display = "";
    rightArrow.style.display = "none";
    downArrow.style.display = "inline";
  } 
  else {
    x.style.display = "none";
    rightArrow.style.display = "inline";
    downArrow.style.display = "none";
  }
}
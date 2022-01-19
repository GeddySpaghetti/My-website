
function toggle(targetID) {
  var imgElement = document.getElementById(targetID);
  if(imgElement.style.display == "block"){
     imgElement.style.display = "none";
  }else{
     imgElement.style.display = "block";
  }
}
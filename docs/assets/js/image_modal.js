var modal = document.getElementById("Modal");
document.body.addEventListener('keydown', function(e) {
  if (e.key == "Escape") {
    modal.style.display = "none";
  }
});

function create_modal(imgName) {
  var img = document.getElementById(imgName);
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
}

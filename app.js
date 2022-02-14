var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");
var mouseIsPressed = false;

ctx.fillStyle="#FFF";
ctx.strokeWeight = 110;
cnv.addEventListener("mousedown",function() {
    mouseIsPressed = true;
});
cnv.addEventListener("mouseup",function() {
    mouseIsPressed = false;
});
cnv.addEventListener("mousemove",function(e) {
  if (mouseIsPressed) {
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2, true);
    ctx.stroke();ctx.fill();
  }
});
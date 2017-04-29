var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

imgFrog = new Image();
imgFrog.src = "images/mikethefrog.png";
imgFrog.addEventListener("load", init, false);

var requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000/60);
        };

function init() {
  requestAnimationFrame(update);
}
  function update() {
    context.drawImage(imgFrog, frogX, frogY, 100, 77);
    context.fillRect( 10, 10, 40, 380, #000000);
    context.fillRect( 10, 10, 380, 40, #000000);
    context.fillRect( 10, 350, 380, 40, #000000);
    context.fillRect( 10, 350, 40, 380, #000000);

    requestAnimationFrame(update);

  }


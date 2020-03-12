// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  $(".nav-list").draggable();

  for (var i=1; i <= 3; i++) {
  	var x = Math.max(0, Math.min(100, Math.ceil(Math.random() * 100)));
  	var y = Math.max(0, Math.min(100, Math.ceil(Math.random() * 100)));
    var d = Math.floor(Math.random() * Math.floor (360));
  	$('.nav-list').css({
  		top: y + '%',
  		left: x + '%',
      transform: 'rotate(' + d + 'deg)'
  	});

    console.log(d)
  }
  function setup() {
    createCanvas(710, 400);
    background(102);
  }

  function draw() {
    // Call the variableEllipse() method and send it the
    // parameters for the current mouse position
    // and the previous mouse position
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  }

  // The simple method variableEllipse() was created specifically
  // for this program. It calculates the speed of the mouse
  // and draws a small ellipse if the mouse is moving slowly
  // and draws a large ellipse if the mouse is moving quickly

  function variableEllipse(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    ellipse(x, y, speed, speed);
  }









// End of Your Code . Don't delete that line below!!
});

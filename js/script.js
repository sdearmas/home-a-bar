// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  $(".nav-list").draggable();


  for (var i=1; i <= 3; i++) {
  	var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
  	var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
  	$('.nav-list').css({
  		top: y + '%',
  		left: x + '%',
  	});
  }









// End of Your Code . Don't delete that line below!!
});

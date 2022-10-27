// draw some randomly placed coloured stripes

function fun(count) {
   while (count-- > 0)
   {
      canvas = document.getElementById('turtlecanvas')
      var canvasWidth = canvas.width
      var canvasHeight = canvas.height   
      var x = random(-canvasWidth/2, canvasWidth/2);
      var y = random(-canvasHeight/2, canvasHeight/2);
      goto(x,y);
      var r = random(0, 255);
      var g = random(0, 255);
      var b = random(0, 255);
      colour(r, g, b, Math.random());
      angle(random(0, 180));
      width(random(1, 10));
      forward(random(10, 30));
   }
}

function main(count=5) {
   hideTurtle();
   redrawOnMove(false);
   fun(count);
   redrawOnMove(true);
   draw();
}

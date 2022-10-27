// randomly spaced spirals

canvas = document.getElementById('turtlecanvas')
var canvasWidth = canvas.width
var canvasHeight = canvas.height

function spiral(steps,angle) {
   widthInc = 5 / steps;
   distInc = 10 / steps;
   w = 0.1;
   while (steps-- > 0) {
      width(w);
      forward(random(1,10));
      right(angle--);
      w += widthInc;
   }
}

function fun(count) {
   while (count-- > 0) {
      colour(random(0,255), random(0,255), random(0,255), Math.random());
      goto(random(-canvasWidth/2,canvasWidth/2), random(-canvasHeight/2, canvasHeight/2));
      angle(random(0,360));
      spiral(random(100,1000), random(5,90));
   }
}

function main(count=5) {
   hideTurtle();
   redrawOnMove(false);
   fun(count);
   redrawOnMove(true);
   draw();
}

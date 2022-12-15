function main() 
{ 
    pendown(); 
    var sideLength = 150; 
    var minX = -getWidth()/2 
    var minY = -getHeight()/2 
    var maxY = getHeight()/2 
    var maxX = getWidth()/2
     goto(minX,maxY); 
    console.log(turtle.pos); 
    console.log(sideLength); left(45); 
    var a = getWidth() 
    var b = getHeight() 
    var abSquared = a*a+b*b 
    var c = Math.sqrt(abSquared); forward(c);
     goto(maxX,minY); console.log(turtle.pos); 
     console.log(sideLength); right(90); forward(c); 
    
    
}

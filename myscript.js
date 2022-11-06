var min = -getWidth()/2;
var max =  getHeight()/2;
function square(side) {
    for(var i = 0; i < 4; i++){
       forward(side);
       right(90);
    }
 }
function randomSquares(sideLength, numSquares){
    for(var i = 0; i < numSquares; i++)
    {
        square(50);
        var xCoord = random(min, max);
        var yCoord = random(min, max);
        goto(xCoord, yCoord);
        square(sideLength);
    }
}


function main()
{
    var sideLength = prompt("side length: ");
    var numSquares = prompt("number of squares: ")
    randomSquares(sideLength, numSquares);
    console.log(turtle.pos);
    //raise num to the power of expv
    Math.pow(num, exp);
    //take the square root of num
    Math.sqrt(num)
}
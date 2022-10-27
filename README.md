# JS Turtle

## Background 
[Turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics) are vector graphics using a relative cursor (the "turtle") upon a Cartesian plane (x and y axis). 

This program is an environment to learn/teach programming with JavaScript language. Idea initialy comes from [Seymour Papert](http://www.papert.org/). Javascript version of turtle graphycs initialy started by  [bjpop](https://github.com/bjpop), than forked and developed and documented by [hanumanum](https://github.com/hanumanum). This version has been further modified by (philbowman)[https://github.com/philbowman]. [GitHub Repository is here](https://github.com/cs-acs/js-turtle).

The __turtle__ can move about the plane and has a few __attributes__: *location (x,y coordinates)*, *direction (angle the turtle is pointing)*, and *pen*.  

The __pen__ also has attributes: *color*, *width*, and *up/down state* (whether the pen will make a mark or not). Imagine a robot on wheels with a pen it can lift up and down.

## Syntax & Style
JS Turtle is written in JavaScript and it's important to write your code in the proper __syntax__ so that the __interpreter__ can understand what you've written and run the code correctly. __Style__, on the other hand, makes your code easier for humans to read and can help you stay organized and __debug__ (find and remove errors).

### Syntax
__Syntax__ refers to the rules of a programming language and are necessary for your program to run correctly.

* Every line should end with a semicolon `;` unless a set of curly braces `{}` follows it, as in loops and conditionals.
* Variable declarations should start with the word `var` like so:
```
var foo = 1;
```
* Conditions (expressions that can be evaluated as `true` or `false`) should be enclosed with parenthesis `()` like so:
```
if (x == 2)
{
    doSomething()
}
```

### Style
__Style__ refers to best practices for organizing your code. It does not affect how the code runs, but is necessary so that your code is easily understandable and so that pesky problems like missing curly braces are more easily found.

* The names of functions and variables should start with a lower-case letter and be written in __lowerCamelCase__.
* Add white space in between sections (an extra line before and after variable declarations and functions, for instance)
* Add white space in between operators such as `==` (less than) and `+`.
* Indent every line that is inside of curly braces.
#### Example:
```
var circleHeight = 8
function doSomething()
{
    if (x == 2)
    {
        doSomethingElse()
    }
}
```
* 

## Getting started
Open turtle.html in a browser. You can write and run some code in this page as described below, but it will not be saved. To write a script do so in the myscript.js file, save it, reload turtle.html, then click *Load Script*, then *Run Script*.

Look over the [documentation](documentation.md) and try out the basic movements (`forward`, `left`, `right`, `angle`, `goto`, `colour`, `penup`, `pendown`). You can put these commands directly into the *Command* box or into the *Definitions* box. To run the demo program in the *Definitions* box, run the command `demo()`. You can also load the example scripts by copy/pasting their locations into the *Script* box, pressing *Load Script*, then *Run Script*. You can do this with your own external scripts too, but make sure that you include a function called `main()` because that is the function run when you click *Run Script*.

Play around and make some designs. Then, try these challenges:

* Draw a single shape in each corner of the canvas.
* Draw a series of rectangles or other shapes inside of each other
* Draw a triangle whose vertices are in the bottom-left, bottom-right, and top-center of the canvas.
* Draw circles or other shapes of random sizes and locations all over the canvas.
* Recreate an 8-bit image like an original Mario sprite.
* Draw a snowman out of three circles: the largest circle sitting on the bottom of the canvas, and two more circles above it, each 3/4 the size of the one below it.

## Using loops
A __for loop__ in JavaScript looks a bit arcane at first:
```
var num = 10;
for (var i = 0; i < num; i++)
{
    console.log(i);
}
```
where `num` is the number of times the loop will run. In this case, the loop will run 10 times and it will print the numbers 0 - 9 to the console.

What's actually happening is:
* the first statement in parenthesis is run (in this case `var i = 0`) which __initializes__ a variable called i with a __value__ of 0
* the second statement (a condition) is tested for being true or false.
* if the statement is true, the code inside the curly braces is run. If not, the loop exits.
* *After* the code inside the curly braces is run, the third statement runs. In this case, it adds 1 to the value of `i`

A __while loop_ in JavaScript looks like this:
```
var x = 0;
while (x < 10)
{
    console.log(x)
    x++
}
```
which does the same thing as the example above. The condition is tested and as long as it is true, the code inside the curly braces is run.

## Using Conditionals
A conditional controls the flow of the program by testing some condition and running code if that condition is true.

For example, the following code will print "beep" but not "boop":

```
var x = 9;
if (x < 10)
{
    console.log("beep");
}
if (x > 10)
{
    console.log("boop");
}
```

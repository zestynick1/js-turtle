## Intro

js-turtle is an environment to learn/teach programming with JavaScript language. Idea initialy comes from [Seymour Papert](http://www.papert.org/).  
Javascript version of turtle graphycs initialy started by [bjpop](https://github.com/bjpop), than forked and developed by [hanumanum](https://github.com/hanumanum)

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/flower.gif)



## Turtle terms

turtle

\- green triangle

canvas

\- area where turtle moves

coordinates

\- point in canvas, in x y

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/turtle_intro.gif)

#### Useful Tip:

Coordinates will been copyed to buffer, than you click on the canvas.

#### Useful Tip:

You can divide execution speed using «ֆ» or «f» keys.

## Basic functions

### forward()

Turtle moves forward and draw line by given steps, if we write 100 between parentheses, than turtle will move by 100 step.

forward(steps)

**arguments**

int: steps

###### Example 1

```javascript
forward(100)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/forward.gif)

### left()

Turtle turn left by given degree, if we write 30 between parentheses, than turtle will turn by 30 degrees.

left(degrees)

**arguments**

int: degrees

###### Example 1

```javascript
left(30)
left(60)
left(90)
                                                
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/left.gif)

###### Example 2

```javascript
forward(100)
left(30)
forward(100)
left(50)
                                                    
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/left_2.gif)

###### Geometry

#### Note!

turtle turns by angle, not becomes to an angle provided to function left()

You can play with it [here.](https://www.geogebra.org/m/TzAjZFst)

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/angles.gif)

### right()

Same as in left but to right :)

See [left](https://hanumanum.github.io/js-turtle/index_en.html#left)

### width()

Sets line thickness

width(thickness)

**arguments**

int: thickness

###### Example

```javascript
width(3)
forward(100)
                                                       
width(15)
forward(100)

width(6)
forward(100)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/width.gif)

### color()

Sets color of next lines

color(r \[, g \[, b \]\]\])

**arguments**

string: a (color name)  
int: a, b, c (RGB)  
string: a (color hexcode)  
array: \[a,b,c\]

###### Example 1 (color name)

```javascript
color("red")
forward(100)

color("green")
forward(60)

color("dodgerblue")
forward(120)
```

  
You can explore all [available color names here](https://github.com/hanumanum/js-turtle/blob/master/lib/library.js#L597)

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/color_name.gif)

###### Example 2 (RGB)

```javascript
color(255,15,20)
forward(100)

color(12,250,65)
forward(60)

color(89,100,36)
forward(120)
```

  
You can [pick colors from here](https://htmlcolorcodes.com/color-picker/)

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/color_rgb.gif)

###### Example 3 (HEX)

```javascript
color("#3EEF0F")
forward(100)

color("#ED16A2")
forward(60)

color("#EDCD16")
forward(120)
```

  
You can [pick colors from here](https://htmlcolorcodes.com/color-picker/)

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/color_hex.gif)

###### Example 4 (array RGB)

```javascript
color([15,20,200])
forward(100)

color([65,250,150])
forward(60)

color([255,100,200])
forward(120)
```

  
You can [pick colors from here](https://htmlcolorcodes.com/color-picker/)

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/color_rgb_array.gif)

### goto()

Move to x,y coordinates without drawing a line

goto(x,y)

**arguments**

int: x, int: y

###### Example 1

```javascript
color("red")
goto(-213,128)
forward(100)

color("blue")
goto(-7,105)
forward(60)

color("green")
goto(238,-182)
forward(120)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/goto.gif)

### penup() & pendown()

penup() sets to not draw next lines. pendown() removes that setting

penup()

pendown()

**arguments**

no arguments

###### Example

```javascript
color("red")
forward(100)

penup()
forward(60)

pendown()
color("blue")
forward(100)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/penup.gif)

### clear()

Clear all canvas. Use clear() mostly for animations.

clear()

**arguments**

no arguments

###### Example

```javascript
clear()
```

## Helper Functions

We have some interesting and useful functions here.

### showGrid()

Shows Euclidean grid on canvas. We recomend call this function before all others. Argument sets grid scale.

showGrid(scale)

**arguments**

int: scale

###### Example 1

```javascript
showGrid(50)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/grid2.png)

###### Example 2

```javascript
showGrid(20)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/grid1.png)

### randomColor\_h()

Set random color on each time it called.

randomColor\_h()

**arguments**

no arguments

###### Example 1

```javascript
width(4)

setInterval(function(){
    goto(0,0)
    randomColor_h()
    forward(100)
    left(10)
},300)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/randomColor_h.gif)

## "Strange" Functions

### strangeLine()

strangeLine() is like forward() but line has random pattern

strangeLine(\[steps\])

**arguments**

int: steps

###### Example

```javascript
color("red")
strangeLine(200)

goto(186,-164)

color("blue")
strangeLine(250)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/strangeLine.gif)

### strangeSquare()

strangeSquare() draws patterned square, by particles

strangeSquare(length\[,step\])

**arguments**

int: length  
int: step

###### Example

```javascript
goto(-206,169)
color("red")
strangeSquare(200,15)

goto(138,98)
color("blue")
strangeSquare(100,5)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/strangeSquare.png)

### strangeCircle()

strangeCircle() draws patterned cirlce, by particles

strangeCircle(radius)

**arguments**

int: radius

###### Example

```javascript
goto(-15,-26)
color("red")
strangeCircle(200)

goto(37,-63)
color("blue")
strangeCircle(100)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/strangeCircle.png)

### strangeGalaxy()

strangeGalaxy() draws patterned "galaxy", by particles

strangeGalaxy(radius)

**arguments**

int: radius

###### Example

```javascript
goto(-158,167)
color("red")
strangeGalaxy(180)

goto(149,-165)
color("blue")
strangeGalaxy(100)
```

###### Result

![](https://hanumanum.github.io/js-turtle/index_en.htmlassets/images/strangeGalaxy.png)
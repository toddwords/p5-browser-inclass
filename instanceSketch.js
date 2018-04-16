var sketch = function(p){
    var circleX = 100;
    var circleY = 100;
    var speedX = 5;
    var speedY = 3;
    var circleSize = 50;

    p.setup = function() { 
      p.createCanvas(600, 400);
    } 

     p.draw = function() {
        p.background(200);
        p.fill("red");
        p.ellipse(circleX,circleY, circleSize,circleSize);
        circleX = circleX + speedX;
        circleY += speedY;
        // circleSize += 1;
        //same as circleY = circleY + speed;
        //width and height are p5 variables for the width and height of the canvas
        if((circleX + circleSize/2)  >= p.width || (circleX - circleSize/2) <= 0){
            speedX = speedX * -1;
        }
        if((circleY + circleSize/2) >= p.height || (circleY - circleSize/2) <= 0){
            speedY = speedY * -1;
        }
    }
}
var smallSketch = function(p){
    var circleX = 50;
    var circleY = 50;
    var speedX = 5;
    var speedY = 3;
    var circleSize = 20;

    p.setup = function() { 
      p.createCanvas(200, 100);
    } 

     p.draw = function() {
        p.background(200);
        p.fill("red");
        p.ellipse(circleX,circleY, circleSize,circleSize);
        circleX = circleX + speedX;
        circleY += speedY;
        // circleSize += 1;
        //same as circleY = circleY + speed;
        //width and height are p5 variables for the width and height of the canvas
        if((circleX + circleSize/2)  >= p.width || (circleX - circleSize/2) <= 0){
            speedX = speedX * -1;
        }
        if((circleY + circleSize/2) >= p.height || (circleY - circleSize/2) <= 0){
            speedY = speedY * -1;
        }
    }
}

var myP5 = new p5(sketch, "container");
var smallSketch1 = new p5(smallSketch, "small1");
var smallSketch2 = new p5(smallSketch, "small2");
var smallSketch3 = new p5(smallSketch, "small3");
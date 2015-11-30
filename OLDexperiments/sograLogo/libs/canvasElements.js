/***
* Draws a dot, centered on x,y coordinates
*/
function drawDot(x,y,r,color,lineWidth) {
    vars.context.beginPath();
    vars.context.arc(x, y, r, 0, 2*Math.PI, false);
    vars.context.lineWidth = lineWidth;
    vars.context.strokeStyle = color;
    vars.context.stroke();
}

/***
* Draws a line
*/
function drawLine(x1,y1,x2,y2) {
    vars.context.beginPath();
    vars.context.moveTo(x1,y1);
    vars.context.lineTo(x2,y2);
    vars.context.stroke();
}

/***
* Returns a random integer
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
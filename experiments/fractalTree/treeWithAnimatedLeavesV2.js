/* Tree with Animated Leaves - juulio.github.io
* Julio Del Valle - Costa Rica */

// Create the Canvas Element
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);

// Apply Basic styles to the Canvas Element
document.body.style.margin = 0;

canvas.width = 450;
canvas.height = 300;
canvas.style.border = 'solid 1px red';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

var DEPTH = 2,
    lineLength = 8,
    angleOffset = 2,
    rotationAngle = 10.0,
    fractalProportion = 0.8,
    startX = canvas.width/2,
    startY = canvas.height - 100;

function drawScreen(){
    requestAnimationFrame(drawScreen);
    drawTree(DEPTH, rotationAngle);
}

function drawTree(){
    context.translate(startX, startY);
    canvasElements.drawLine(0,canvas.height,0,0,context);
    drawBranches();
}

function drawBranches(){
    var newAngle = rotationAngle+angleOffset,
        randomOffset = canvasElements.getRandomInt(0, 0.17),
        newLeftAngle = rotationAngle + randomOffset + angleOffset;

    context.save();
    context.rotate(newLeftAngle);
    drawLeaf(newLeftAngle);
    context.restore();
    context.rotate(-newAngle);
    drawLeaf(newAngle);
}

function drawLeaf(){
    var leafLength = lineLength * DEPTH,
        leafSize = 20;

    context.translate(0, -leafLength);

    canvasElements.drawLine(0, leafLength,0,0,context);

    if(DEPTH == 0) {
        if(canvasElements.getRandomInt(0,100)>0){
            canvasElements.drawDot(0,0,5,'#000',3,context);
        }
    }

    if(DEPTH > 0) {
        DEPTH--;
        drawBranches()
    }
}

drawScreen();

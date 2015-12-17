/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 500;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

context.fillStyle = '#000';
context.lineWidth = 1;


/******************************
 Set the Tree's variables up */
var deg_to_rad = Math.PI / 180.0,
    depth = 11;

function drawTree(x1, y1, angle, depth){
    var leafSize = 1,
        leafType = 1,
        roationAngle = 0,
        branchColor = '',
        leafProbabilty = canvasElements.getRandomInt(0,1);

    if (depth !== 0){
        if(depth > 3){
            branchColor = 'rgb(100,69,19)'; //Brown
        }
        else {
            branchColor = 'rgb(143,154,90)'; //Green
        }

        context.strokeStyle = branchColor;
        depth--;

        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 5.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 6.0);
        context.lineWidth = depth*1.6;
        canvasElements.drawLine(x1, y1, x2, y2, context, branchColor);

        drawTree(x2, y2, angle - canvasElements.getRandomInt(18, 20), depth);
        drawTree(x2, y2, angle + canvasElements.getRandomInt(5, 30), depth);
    }
    if(depth == 1 && leafProbabilty == 1) {
        rotationAngle = canvasElements.getRandomInt(0, 360);
        leafType = canvasElements.getRandomInt(1, 2);
        leafSize = canvasElements.getRandomInt(0, 3);

        drawLeaf(x2, y2, rotationAngle, leafSize, 2);
    }
}

function drawLeaf(x, y, angle, scale, type) {
    
    context.translate(x, y);
    context.rotate(angle);
    context.beginPath();

    context.moveTo(0,0);

    if(type == 1) { // Leaf #1
        context.lineTo(scale*5, scale*-10);
        context.lineTo(scale*15,scale*-5);
        context.lineTo(scale*20, scale*0);
        context.lineTo(scale*15, scale*5);
        context.lineTo(scale*5, scale*10);
    }
    else {
        if(type == 2) { // Leaf #2
            context.lineTo(scale*0, scale*-1);
            context.lineTo(scale*2,scale*-3);
            context.lineTo(scale*4, scale*-1);
            context.lineTo(scale*6, scale*-3);
            context.lineTo(scale*8, scale*-1);
            context.lineTo(scale*10, scale*0);

            context.lineTo(scale*8, scale*1);
            context.lineTo(scale*6, scale*3);
            context.lineTo(scale*4, scale*1);
            context.lineTo(scale*2, scale*3);
            context.lineTo(scale*0, scale*1);
            context.lineTo(scale*0, scale*0);
        }
    }

    context.closePath();
    context.fillStyle = 'rgba(143,154,90,0.6)';
    context.strokeStyle = 'rgb(25, 66, 0)';
    context.fill();

    context.stroke();
    context.rotate(-angle);
    context.translate(-x, -y);
}

drawTree(250, 500, -90, depth);
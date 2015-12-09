/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 400;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

context.fillStyle = '#000';
context.lineWidth = 1;


/******************************
 Set the Tree's variables up */
var deg_to_rad = Math.PI / 180.0,
    depth = 10;

function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

function drawTree(x1, y1, angle, depth){
    var leafRadius = 7,
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

        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 6.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 7.0);
        context.lineWidth = depth*1.6;
        drawLine(x1, y1, x2, y2);

        drawTree(x2, y2, angle - canvasElements.getRandomInt(18,21), depth - 1);
        drawTree(x2, y2, angle + canvasElements.getRandomInt(19,23), depth - 1);
    }
    if(depth == 1 && leafProbabilty == 1) {
        drawLeaf(x2, y2, 40, 40, canvasElements.getRandomInt(0, 360));
    }
}

function drawLeaf(x, y, imageWidth, imageHeight, rotationAngle) {
    var imageObj = new Image();

    imageObj.onload = function() {
        context.translate(x, y);
        context.rotate(rotationAngle*Math.PI/180);
        context.drawImage(imageObj, (imageWidth/2) * (-1), (imageHeight/2) * (-1));
        context.rotate(-rotationAngle*Math.PI/180);
        context.translate(-x, -y);
    };

    imageObj.src = 'http://juulio.github.io/img/2015dic/leaf-02.png';
}

drawTree(250, 400, -90, depth);

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



/************************************************/
var // contadorDeHojas = 0,
    deg_to_rad = Math.PI / 180.0,
    depth = 7;

function drawLine(x1, y1, x2, y2){
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
}

function drawTree(x1, y1, angle, depth){
    var leafRadius = 7;

    if (depth !== 0){
        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 6.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 6.0);
        drawLine(x1, y1, x2, y2);

        drawTree(x2, y2, angle - 26, depth - 1);
        drawTree(x2, y2, angle + 26, depth - 1);
    }
    if(depth == 1) {
        // drawLeaf(x2-20, y2-20, canvasElements.getRandomInt(0, 360));
        drawLeaf(x2-20, y2-20, 20);
    }
}

function drawLeaf(x, y, imageWidth, imageHeight, rotationAngle) {
    var imageObj = new Image();

    imageObj.onload = function() {
        context.translate(x, y);
        context.rotate(rotationAngle*Math.PI/180);
        context.drawImage(imageObj, (imageWidth/2) * (-1), (imageHeight/2) * (-1));
    };

    imageObj.src = 'http://juulio.github.io/img/2015dic/leaf-02.png';
}


// context.beginPath();
// drawTree(250, 400, -90, depth);
// context.closePath();
// context.stroke();
// console.log(contadorDeHojas);

canvasElements.drawDot(200, 200, 10, 1, context);
drawLeaf(200, 200, 40, 40, 270);

/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Fractal Brinary Tree color - juulio.github.io
 */

 /**
Create and set up the Canvas Element.
*/
var canvasWidth = JUULIO.global.setRendererWidth(700),
  canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, 600),
  context = canvas.getContext("2d");

document.body.style.margin = 0;

context.fillStyle = '#000';
context.lineWidth = 1;


/******************************
 Set the Tree's variables up */
var deg_to_rad = Math.PI / 180.0,
    depth = 11;

function drawTree(x1, y1, angle, depth){
    var alpha = 0.3,
        leafSize = 1,
        roationAngle = 0,
        branchColor = '',
        leafProbabilty = JUULIO.canvasElements.getRandomInt(0,1);

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
        JUULIO.canvasElements.drawLine(x1, y1, x2, y2, context, branchColor);

        drawTree(x2, y2, angle - JUULIO.canvasElements.getRandomInt(18, 20), depth);
        drawTree(x2, y2, angle + JUULIO.canvasElements.getRandomInt(5, 30), depth);
    }
    if(depth == 1 && leafProbabilty == 1) {
        rotationAngle = JUULIO.canvasElements.getRandomInt(0, 360);
        alpha = JUULIO.canvasElements.getRandomArbitrary(0.3, 1);
        leafSize = JUULIO.canvasElements.getRandomInt(0, 3);

        drawLeaf(x2, y2, rotationAngle, leafSize, alpha);
    }
}

function drawLeaf(x, y, angle, scale, alpha) {

    context.translate(x, y);
    context.rotate(angle);
    context.beginPath();

    context.moveTo(0,0);

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

    context.closePath();
    context.fillStyle = 'rgba(143,154,90,' + alpha + ')';
    context.strokeStyle = 'rgb(25, 66, 0)';
    context.fill();

    context.stroke();
    context.rotate(-angle);
    context.translate(-x, -y);
}

drawTree(250, 500, -90, depth);



// Leaf #1
// context.lineTo(scale*5, scale*-10);
// context.lineTo(scale*15,scale*-5);
// context.lineTo(scale*20, scale*0);
// context.lineTo(scale*15, scale*5);
// context.lineTo(scale*5, scale*10);

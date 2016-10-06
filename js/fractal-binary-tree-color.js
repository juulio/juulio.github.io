/**
 * @author Julio Del Valle - Costa Rica
 * Fractal Brinary Tree color - juulio.github.io
 */

 /**
Create and set up the Canvas Element.
*/
var canvasWidth = JUULIO.global.setRendererWidth(450),
  canvasHeight = 380,
  canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, canvasHeight, '2d');


function drawTree(x1, y1, angle, depth){
    var alpha = 0.3,
        leafMaxSize = 5,
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

        depth--;
        var lineWidth = depth*1.6;

        var x2 = x1 + (Math.cos(JUULIO.canvasElements.degToRad(angle)) * depth * 5.0);
        var y2 = y1 + (Math.sin(JUULIO.canvasElements.degToRad(angle)) * depth * 6.0);
        JUULIO.canvasElements.drawLine(x1, y1, x2, y2, branchColor, lineWidth);

        drawTree(x2, y2, angle - JUULIO.canvasElements.getRandomInt(18, 20), depth);
        drawTree(x2, y2, angle + JUULIO.canvasElements.getRandomInt(5, 30), depth);
    }
    if(depth == 1 && leafProbabilty == 1) {
        rotationAngle = JUULIO.canvasElements.getRandomInt(0, 360);
        alpha = JUULIO.canvasElements.getRandomArbitrary(0.3, 1);
        leafSize = JUULIO.canvasElements.getRandomInt(0, leafMaxSize);

        JUULIO.canvasElements.drawLeaf(x2, y2, rotationAngle, leafSize, alpha);
    }
}

/**
 * Set the Tree's variables up
 */
var depth = 11;
    startX = canvas.width/2,
    startY = canvas.height;

drawTree(startX, startY, -90, depth);

/**
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Fractal Binary Tree - juulio.github.io
 */
var fractalTree = fractalTree || {};

(function (context) {

    // Initial Setup
    var canvasWidth = JUULIO.global.setRendererWidth(450);
  	var canvasHeight = 320;
    var branchLength = 80;

    if (JUULIO.global.isMobile()){
      branchLength = 55;
      canvasHeight = 220;
  	}

  	var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, canvasHeight, '2d');
  	var context = canvas.getContext('2d');
  	var message = "Gradient on Text";

    var canvasHalfWidth = canvas.width/2,
        fractalProportion = 0.8,
        angle = 30 * Math.PI / 180;

    // Helper function: draws a Line from (x1,y1) to (x2,y2)
    function drawLine(x1, y1, x2, y2){
        context.beginPath();

        context.moveTo(x1,y1);
        context.lineTo(x2, y2);

        context.closePath();
        context.stroke();
    }

    // Helper function: draws a dot at (x,y) with a radius r
    function drawDot(x,y,r) {
        context.beginPath();
        context.arc(x, y, r, 0, 2*Math.PI, false);
        context.stroke();
    }

    // Recursive Fractal Function
    function drawTree(startX, startY, branchLength, angle, depth, lineWidth){
        context.lineWidth = lineWidth;
        context.translate(startX, startY);

        // drawLine(0, 0, 0, -branchLength);
        for(var i=0;i>-branchLength;i-=0.7){
            drawLine(0, 0, 0, -branchLength);
        }

        //--------------------------------

        if(depth > 0 ){
            depth--;
            context.translate(0, -branchLength);

            angle += fractalProportion;
            lineWidth *= fractalProportion;
            branchLength *= fractalProportion;

            context.save();

            // Draw Right Branch
            context.rotate(angle * Math.PI / 180);
            //drawLine(x1, y1, x2, y2);
            drawTree(0, 0, branchLength, angle, depth, lineWidth);

            context.restore();
            context.save();

            // Draw Left Branch
            context.rotate(-angle * Math.PI / 180);
            //drawLine(x1, y1, x2, y2);
            drawTree(0, 0, branchLength, angle, depth, lineWidth);
            context.restore();
        }
    }

    function init(){
        context.clearRect(0,0,canvas.width, canvas.height);
        drawTree(canvasHalfWidth, canvas.height, branchLength, 25, 6, 14);
    }

    init();


}(fractalTree));

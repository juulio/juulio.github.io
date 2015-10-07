 /***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Fractals Forest - juulio.github.io
 */
var fractalTree = fractalTree || {};

(function (context) {

    // Initial Setup
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        canvasHalfWidth = canvas.width/2,
        fractalProportion = 0.8,
        branchLength = 50,
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

    // Helper function: draws a line from (x1,y1) to (x2,y2), animating dot by dot until it reaches (x2,y2)
    function drawAnimatedLine(y1,y2) {
        //http://stackoverflow.com/questions/9762877/html5-js-how-to-animate-straight-line-between-two-coordinates
        console.log('hola');
        for(y1=0;y1>y2;y1-=0.01){
            drawLine(0,0,0,y1);
        }
    }

    // Recursive Fractal Function
    function drawTree(startX, startY, branchLength, angle, depth, lineWidth){
        context.lineWidth = lineWidth;
        context.translate(startX, startY);

        // drawLine(0, 0, 0, -branchLength);
        for(var i=0;i>-branchLength;i-=0.7){
            drawLine(0, 0, 0, -branchLength);
        }
        // drawAnimatedLine(0, -branchLength);

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
        var button = document.getElementsByClassName("fractalTreeButton");
        button[0].onclick = function(){
            // First clear the whole canvas area.
            context.clearRect(0,0,canvas.width, canvas.height);

            drawTree(canvasHalfWidth, canvas.height, 70, 25, 1, 14);    
        }
    }

    init();
    

}(fractalTree));
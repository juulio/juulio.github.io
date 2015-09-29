/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Fractal Tree - juulio.github.io
 */
var fractalTree = fractalTree || {};

(function (context) {

    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');
        
    function random(min, max){
		return min + Math.floor(Math.random()*(max+1-min));
	}

    function cos (angle) {
        return Math.cos(deg_to_rad(angle));
    }

    function sin (angle) {
        return Math.sin(deg_to_rad(angle));
    }

    function deg_to_rad(angle){
        return angle*(Math.PI/180.0);
    }

    function drawLine(x1,y1,x2,y2) {
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();
    }

    function drawDot(x,y,r,lineWidth) {
        context.beginPath();
        context.arc(x, y, r, 0, 2*Math.PI, false);
        context.lineWidth = lineWidth;
        context.stroke();
    }

    var drawFourthTree = function(x1, y1, angle, treeDepth, lineLength){
        var x2 = x1 + (cos(angle) * treeDepth * lineLength),
            y2 = y1 + (sin(angle) * treeDepth * lineLength);

        if(treeDepth !=0) {
            treeDepth--;

            drawLine(x1, y1, x2, y2);

            drawFourthTree(x2, y2, angle - random(20,26), treeDepth, lineLength);
            drawFourthTree(x2, y2, angle + random(30,58), treeDepth, lineLength);
        }
        else {
            context.strokeStyle = 'rgb(' + random(0,255) +',' + random(0,255) +'    ,34)';
            drawDot(x2, y2, 6, 2);
            context.strokeStyle = '#000000';
        }
    };

    function init(){

        drawFourthTree(canvas.width/2, canvas.height-150, -90, 8, 10);
    }

    init();

}(fractalTree));

//--------------------------------------------------------------
function drawLeaf(treeDepth, angle) {
    var leafLength = lineLength*treeDepth,
        leafSize = 20;

    //appInfo += ofToString(leafLength)+"\n";
    context.translate(0,-leafLength);

    if(treeDepth<5) {
        context.lineWidth = 1;
        context.strokeStyle = "rgb(0, 100, 0)";
    }
    else {
        context.lineWidth = 3;
        context.strokeStyle = "rgb(92, 51, 23)";
    }
    drawLine(0,leafLength,0,0);


    if(treeDepth == 0) {
        // ofEnableAlphaBlending();
        context.strokeStyle = "rgb(ofRandom(255),0,0,15)";

        if (getRandomInt(0, 100) > 0) {
            // ofFill();
            // ofEllipse(0,0,leafSize,leafSize);
            drawDot(0, 0, 5, "#0010A5", 1);
        }
    }
    if(treeDepth>0){
        drawBranch(treeDepth-1, angle);
    }
}
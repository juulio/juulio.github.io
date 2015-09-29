/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Fractal Tree - juulio.github.io
 */
var fractalTree = fractalTree || {};

(function (context) {

    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        angleOffset = 2,
        i = 0;

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

    var drawFourthTree = function(x1, y1, angle, treeDepth, lineLength){

        if(treeDepth !=0) {

            var x2 = x1 + (cos(angle) * treeDepth * lineLength),
                y2 = y1 + (sin(angle) * treeDepth * lineLength);

            treeDepth--;
            lineLength*=0.8;

            drawLine(x1, y1, x2, y2);

            drawFourthTree(x2, y2, angle - random(15,20), treeDepth, lineLength);
            drawFourthTree(x2, y2, angle + random(15,20), treeDepth, lineLength);
        }
    };

    function init(){

        drawFourthTree(canvas.width/2, canvas.height-150, -90, 13, 8);
    }

    init();

}(fractalTree));





//-----------------------------------------------------------------------------------------------------------------
// function: drawTrunk: draws the trunk from the initial starting point. This is not part of the recursive process.
//   drawTrunk(DEPTH, rotationAngle);
//--------------------------------------------------------------
// (function drawTrunk() {
//     context.lineWidth = 6;
//     drawLine(startingPointX, startingPointY, startingPointX, canvas.height);
//     context.translate(startingPointX, startingPointY);
//     // //ofSetLineWidth(treeDepth*4);
//     // ofSetLineWidth(3);
//     // ofSetColor(92, 51, 23);
//     // ofLine(0,ofGetHeight(),0,0);
//     drawBranch(treeDepth, rotationAngle);
// }());

//--------------------------------------------------------------
function drawBranch(treeDepth, angle) {
    var newAngle = angle + angleOffset,
        randomOffset = getRandomInt(0, 0.17),
        newLeftAngle = angle + randomOffset + angleOffset;

// Resolver usando setTransform   http://www.w3schools.com/tags/canvas_settransform.asp
// https://www.safaribooksonline.com/blog/2012/04/26/html5-canvas-games-tracking-transformation-matrices/

    //ofPushMatrix();

    context.rotate(newLeftAngle); //ofRotate(newLeftAngle);
    drawLeaf(treeDepth, newLeftAngle);

    //ofPopMatrix();

    context.rotate(-newLeftAngle); //ofRotate(-newAngle);
    drawLeaf(treeDepth, newAngle);
}

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

// (function drawFrame () {
//     window.requestAnimationFrame(drawFrame, canvas);
//     context.clearRect(0, 0, canvas.width, canvas.height);
//
//     drawTrunk(treeDepth, rotationAngle);
// }());

//-----------------------------------------------------------------------------------------------------------------
// function: animateFractalTree: animates the tree's recursive process. The tree will go as deep as treeDepth.
// TOOD: animation will show each step unitl it reaches treeDepth. Steps will increase each loop cycle. Then it'll remain as is and move the leafs a bit.
// animateFractalTree(drawTrunk(frameNumber, rotationAngle));

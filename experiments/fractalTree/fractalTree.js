var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    treeDepth = 10,
    rotationAngle = 10.0,
    lineLength = 8,
    angleOffset = 2,
    startingPointX = canvas.width/2,
    startingPointY = canvas.height-150;


//-----------------------------------------------------------------------------------------------------------------
// function: drawTrunk: draws the trunk from the initial starting point. This is not part of the recursive process.
//   drawTrunk(DEPTH, rotationAngle);
//--------------------------------------------------------------
function drawTrunk(treeDepth, angle) {
    drawLine(startingPointX, startingPointY, startingPointX, canvas.height);
    context.translate(startingPointX, startingPointY);
    // //ofSetLineWidth(treeDepth*4);
    // ofSetLineWidth(3);
    // ofSetColor(92, 51, 23);
    // ofLine(0,ofGetHeight(),0,0);
    drawBranch(treeDepth, angle);
}

//--------------------------------------------------------------
function drawBranch(treeDepth, angle) {
    var newAngle = angle + angleOffset,
        randomOffset = getRandomInt(0, 0.17),
        newLeftAngle = angle + randomOffset + angleOffset;

// Resolver usando setTransform   http://www.w3schools.com/tags/canvas_settransform.asp
// https://www.safaribooksonline.com/blog/2012/04/26/html5-canvas-games-tracking-transformation-matrices/
    ofPushMatrix();
    ctx.rotate(newLeftAngle); //ofRotate(newLeftAngle);

    drawLeaf(treeDepth, newLeftAngle);
    ofPopMatrix();
    ctx.rotate(-newLeftAngle); //ofRotate(-newAngle);
    drawLeaf(treeDepth, newAngle);
}

//--------------------------------------------------------------
function drawLeaf(treeDepth, angle) {
    var leafLength = lineLength*treeDepth,
        leafSize = 20;

    //appInfo += ofToString(leafLength)+"\n";
    ofTranslate(0,-leafLength);

    if(treeDepth<5) {
        ofSetLineWidth(1);
        ofSetColor(0, 100, 0);
    }
    else {
        ofSetLineWidth(3);
        ofSetColor(92, 51, 23);
    }
    ofLine(0,leafLength,0,0);


    if(treeDepth == 0) {
        ofEnableAlphaBlending();
        ofSetColor(ofRandom(255),0,0,15);

        if (ofRandom(100) > 0) {
            ofFill();
            ofEllipse(0,0,leafSize,leafSize);
        }
    }
    if(treeDepth>0){
        drawBranch(treeDepth-1, angle);
    }
}

(function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawTrunk(treeDepth, rotationAngle);
}());
//-----------------------------------------------------------------------------------------------------------------
// function: animateFractalTree: animates the tree's recursive process. The tree will go as deep as treeDepth.
// TOOD: animation will show each step unitl it reaches treeDepth. Steps will increase each loop cycle. Then it'll remain as is and move the leafs a bit.
// animateFractalTree(drawTrunk(frameNumber, rotationAngle));

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
function drawTrunk(depth, angle) {
    drawLine(startingPointX, startingPointY, startingPointX, canvas.height);

    // context.translate = ofTranslate

    // ofTranslate(startingPointX, startingPointY);
    // //ofSetLineWidth(depth*4);
    // ofSetLineWidth(3);
    // ofSetColor(92, 51, 23);
    // ofLine(0,ofGetHeight(),0,0);
    // drawBranch(depth, angle);
}

//--------------------------------------------------------------
function drawBranch(depth, angle) {
    var newAngle = angle + angleOffset,
            randomOffset = ofRandom(0.17),
            newLeftAngle = angle + randomOffset + angleOffset;

    ofPushMatrix();
    ofRotate(newLeftAngle);
    drawLeaf(depth, newLeftAngle);
    ofPopMatrix();
    ofRotate(-newAngle);
    drawLeaf(depth, newAngle);
}

//--------------------------------------------------------------
function drawLeaf(depth, angle) {
    var leafLength = lineLength*depth,
        leafSize = 20;

    //appInfo += ofToString(leafLength)+"\n";
    ofTranslate(0,-leafLength);

    if(depth<5) {
        ofSetLineWidth(1);
        ofSetColor(0, 100, 0);
    }
    else {
        ofSetLineWidth(3);
        ofSetColor(92, 51, 23);
    }
    ofLine(0,leafLength,0,0);


    if(depth == 0) {
        ofEnableAlphaBlending();
        ofSetColor(ofRandom(255),0,0,15);

        if (ofRandom(100) > 0) {
            ofFill();
            ofEllipse(0,0,leafSize,leafSize);
        }
    }
    if(depth>0){
        drawBranch(depth-1, angle);
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
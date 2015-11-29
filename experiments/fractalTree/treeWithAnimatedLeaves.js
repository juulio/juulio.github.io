/* Tree with Animated Leaves - juulio.github.io
* Julio Del Valle - Costa Rica */

// The amount of branches is a random value between 2 and 4.

// Create the Canvas Element
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);

// Apply Basic styles to the Canvas Element
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 400;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';


/****************
 Create Arrays */
var branches = [],
    leaves = [];

/************************************
 Rotaton angle for circular motion */
// var rotationAngle = 0;

/**************************************************************************************************************
* Recursive function that generates the fracal tree and stores the values on the branches and leaves arrays  */
var growTree = function(x1, y1, angle, treeDepth){

    var BRANCH_LENGTH = canvasElements.getRandomInt(2, 20),
        x2 = x1 + (canvasElements.cos(angle) * treeDepth * BRANCH_LENGTH),
        y2 = y1 + (canvasElements.sin(angle) * treeDepth * BRANCH_LENGTH),
        branch = {},
        leaf = {};

    if(treeDepth > 0) {

        if(treeDepth > 3){
            branchColor = 'rgb(139,126,102)'; //Brown
        }
        else {
            branchColor = 'rgb(34,139,34)'; //Green
        }

        branch._x1 = x1;
        branch._y1 = y1;
        branch._x2 = x2;
        branch._y2 = y2;
        branch.color = branchColor;
        branch.thickness = treeDepth*1.5;
        branches.push(branch);

        treeDepth--;

        growTree(x2, y2, angle + canvasElements.getRandomInt(-20, -1), treeDepth);
        growTree(x2, y2, angle + canvasElements.getRandomInt(20, 40), treeDepth);
    }
    else {
        leaf._x = x2;
        leaf._y = y2;
        leaf._shape = canvasElements.getRandomInt(0,2);
        leaf._startingAngle = canvasElements.getRandomInt(0,360);
        leaves.push(leaf);
    }
};

/**************************************
* Draws the tree */
var drawTree = function(){
    var _x1,
        _y1,
        _x2,
        _y2;

    context.lineWidth = 3;

    for(var i=0;i<branches.length;i++){
        _x1 = branches[i]._x1;
        _y1 = branches[i]._y1;
        _x2 = branches[i]._x2;
        _y2 = branches[i]._y2;

        context.strokeStyle = branches[i].color;
        context.lineWidth = branches[i].thickness;
        canvasElements.drawLine(_x1, _y1, _x2, _y2, context);
    }
}

/**************************************
* Draws a leaf */
// shape = 0 : circle
// shape = 1 : square
// shape = 2 : triangle
var drawLeaf = function(x, y, radius, color, lineWidth, canvasContext, shape, size){
    context.strokeStyle = color;
    if (shape == 0){
        canvasElements.drawDot(x, y, size, 2, context);
    }
    if (shape == 1){
        canvasContext.rect(x, y, size, size);
        canvasContext.stroke();
    }
    if (shape == 2){
        canvasElements.drawTriangle(x, y, size, context);
    }
}

/**************************************
* Draws the leaves and animates them */
var animateLeaves = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTree();

    var _x,
        _y,
        shape = 0,
        size = 9,
        // leafColor = 'rgb(' + canvasElements.getRandomInt(0,255) +',' + canvasElements.getRandomInt(0,255) +'    ,34)';
        leafColor = 'rgb(255, 165, 0)',
        radius = 7,
        rotationAngle = 0,
        shape = 0;

    for(var i=0;i<leaves.length;i++){
        // _x = leaves[i]._x + canvasElements.getRandomInt(-2,2)*0.6;
        // _y = leaves[i]._y + canvasElements.getRandomInt(-1,1)*0.4;

        rotationAngle = leaves[i]._startingAngle;
        shape = leaves[i]._shape;
        _x = leaves[i]._x + radius*canvasElements.cos(rotationAngle);
        _y = leaves[i]._y + radius*canvasElements.sin(rotationAngle)

        leaves[i]._startingAngle++;

        // drawLeaf(_x, _y, 7, 'rgba(0,0,0,1)', 2, context, shape, size);
        drawLeaf(_x, _y, 7, leafColor, 2, context, shape, size);
    }

    requestAnimationFrame(animateLeaves);
}
/***********************************************
* Draws all the elements on the screen */
var drawScreen = function(){
    growTree(canvas.width*0.5, canvas.height, -90, 6);
    // console.log(leaves);
    animateLeaves();
};

drawScreen();

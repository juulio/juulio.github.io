/* Tree with Animated Leaves - juulio.github.io
* Julio Del Valle - Costa Rica */

// Create the Canvas Element
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);

// Apply Basic styles to the Canvas Element
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 550;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';


/**********************
 Create Arrays */
var branches = [],
    leaves = [];

/**************************************************************************************************************
* Recursive function that generates the fracal tree and stores the values on the branches and leaves arrays  */
var growTree = function(x1, y1, angle, treeDepth, lineLength){
    var x2 = x1 + (canvasElements.cos(angle) * treeDepth * lineLength),
        y2 = y1 + (canvasElements.sin(angle) * treeDepth * lineLength),
        branch = {
            _x1 : 0,
            _y1 : 0,
            _x2 : 0,
            _y2 : 0
        },
        leaf = {
            _x : 0,
            _y : 0
        },
        amountOfLeaves = canvasElements.getRandomInt(2,4);
        // context.strokeStyle = 'rgb(' + canvasElements.getRandomInt(0,255) +',' + canvasElements.getRandomInt(0,255) +'    ,34)';

    if(treeDepth > 0) {
        treeDepth--;

        branch._x1 = x1;
        branch._y1 = y1;
        branch._x2 = x2;
        branch._y2 = y2;
        branches.push(branch);

        for(var i=0;i<amountOfLeaves;i++){
            growTree(x2, y2, angle + canvasElements.getRandomInt(-45,30), treeDepth, lineLength);
        }
        // growTree(x2, y2, angle + canvasElements.getRandomInt(-55,-6), treeDepth, lineLength);
        // growTree(x2, y2, angle + canvasElements.getRandomInt(-25,-6), treeDepth, lineLength);
        // growTree(x2, y2, angle + canvasElements.getRandomInt(30,58), treeDepth, lineLength);
    }
    else {
        leaf._x = x2;
        leaf._y = y2;
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

    for(var i=0;i<branches.length;i++){
        _x1 = branches[i]._x1;
        _y1 = branches[i]._y1;
        _x2 = branches[i]._x2;
        _y2 = branches[i]._y2;

        canvasElements.drawLine(_x1, _y1, _x2, _y2, context);
    }
}

/**************************************
* Draws a leaf */
// shape = 0 : circle
// shape = 1 : square
// shape = 2 : triangle
var drawLeaf = function(x, y, radius, color, lineWidth, canvasContext, shape, size){
    if (shape == 0){
        canvasElements.drawDot(x, y, size, 'rgba(0,0,0,1)', 2, context);
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
        size = 2;

    for(var i=0;i<leaves.length;i++){
        _x = leaves[i]._x + canvasElements.getRandomInt(-3,3);
        _y = leaves[i]._y + canvasElements.getRandomInt(-3,3);
        shape = canvasElements.getRandomInt(0,2);

        drawLeaf(_x, _y, 7, 'rgba(0,0,0,1)', 2, context, shape, size);
    }


    requestAnimationFrame(animateLeaves);
}
/***********************************************
* Draws all the elements on the screen */
var drawScreen = function(){
    growTree(canvas.width*0.5, canvas.height, -90, 5, 15);
    animateLeaves();
};

drawScreen();

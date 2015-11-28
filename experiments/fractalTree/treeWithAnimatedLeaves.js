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
        }

        // context.strokeStyle = 'rgb(' + canvasElements.getRandomInt(0,255) +',' + canvasElements.getRandomInt(0,255) +'    ,34)';

    if(treeDepth > 0) {
        treeDepth--;
        // canvasElements.drawLine(x1, y1, x2, y2, context);
        branch._x1 = x1;
        branch._y1 = y1;
        branch._x2 = x2;
        branch._y2 = y2;
        branches.push(branch);

        growTree(x2, y2, angle - canvasElements.getRandomInt(20,26), treeDepth, lineLength);
        growTree(x2, y2, angle + canvasElements.getRandomInt(30,58), treeDepth, lineLength);
    }
    else {
        leaf._x = x2;
        leaf._y = y2;
        leaves.push(leaf);
    }
};

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

// drawLeaf(_x, _y, 7, 'rgba(0,0,0,1)', 2, context, shape);
// drawDot : function(x,y,r,color,lineWidth, canvasContext) {
// shape = 0 : circle
// shape = 1 : square
// shape = 2 : triangle
var drawLeaf = function(x, y, radius, color, lineWidth, canvasContext, shape){
    if (shape == 0){
        canvasElements.drawDot(x, y, 7, 'rgba(0,0,0,1)', 2, context);
    }
    if (shape == 1){
        canvasContext.rect(x, y, 10, 10);
        canvasContext.stroke();
    }
    if (shape == 2){
        canvasElements.drawTriangle(x, y, context);
    }
}

var animateLeaves = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTree();

    var _x,
        _y,
        shape = 0;

    for(var i=0;i<leaves.length;i++){
        shape = canvasElements.getRandomInt(0,2);
        _x = leaves[i]._x + canvasElements.getRandomInt(-3,3);
        _y = leaves[i]._y + canvasElements.getRandomInt(-3,3);

        // canvasElements.drawDot(_posX,k _posY, 5, 'rgba(255, 0, 0, 0.1)', 2, context);
        drawLeaf(_x, _y, 7, 'rgba(0,0,0,1)', 2, context, shape);
    }


    requestAnimationFrame(animateLeaves);
}
/***********************************************
* Draws all the elements on the screen */
var drawScreen = function(){
    growTree(canvas.width*0.5, canvas.height, -90, 6, 20);
    animateLeaves();
};

drawScreen();

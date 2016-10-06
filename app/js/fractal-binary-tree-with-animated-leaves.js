/**
 * @author Julio Del Valle - Costa Rica
 * Tree with Animated Leaves - juulio.github.io
 */

// The amount of branches is a random value between 2 and 4.

/**
 *Create and set up the Canvas Element.
 */
var canvasWidth = JUULIO.global.setRendererWidth(650),
  canvasHeight = 550,
  branchLength = 70,
  branchWidth = 60;

if (JUULIO.global.isMobile()){
  branchLength = 40;
  branchWidth = 40;
  canvasHeight = 290;
}
canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, canvasHeight, '2d'),
context = canvas.getContext("2d");

/**
 * Create Arrays
 */
var branches = [],
    leaves = [],
    contadorDeHojas = 0;

/************************************
 Rotaton angle for circular motion */
// var rotationAngle = 0;

/**************************************************************************************************************
* Recursive function that generates the fracal tree and stores the values on the branches and leaves arrays  */
var growTree = function(x1, y1, angle, treeDepth){
    var BRANCH_LENGTH = JUULIO.canvasElements.getRandomInt(5,16),
        branch = {},
        leaf = {};

    if(treeDepth != 0) {

        var x2 = x1 + (JUULIO.canvasElements.cos(angle) * treeDepth * BRANCH_LENGTH),
            y2 = y1 + (JUULIO.canvasElements.sin(angle) * treeDepth * BRANCH_LENGTH);

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

        if(treeDepth == 1){
            leaf._x = x2;
            leaf._y = y2;
            leaf._shape = JUULIO.canvasElements.getRandomInt(0,2);
            leaf._shape = 2;
            leaf._startingAngle = JUULIO.canvasElements.getRandomInt(0,360);
            leaves.push(leaf);
        }

        growTree(x2, y2, angle + JUULIO.canvasElements.getRandomInt(-20, -1), treeDepth);
        growTree(x2, y2, angle + JUULIO.canvasElements.getRandomInt(20, 40), treeDepth);
    }
    if(treeDepth == 0){
        contadorDeHojas++;
        // leaf._x = x2;
        // leaf._y = y2;
        // leaf._shape = JUULIO.canvasElements.getRandomInt(0,2);
        // leaf._shape = 2;
        // leaf._startingAngle = JUULIO.canvasElements.getRandomInt(0,360);
        // leaves.push(leaf);
    }
};

/**************************************
* Draws the tree */
var drawTree = function(){
    var _x1,
        _y1,
        _x2,
        _y2,
        branch,
        leaf;

    context.lineWidth = 3;

    for(var i=0;i<branches.length;i++){
        branch =branches[i];
        _x1 = branch._x1;
        _y1 = branch._y1;
        _x2 = branch._x2;
        _y2 = branch._y2;

        context.strokeStyle = branch.color;
        context.lineWidth = branch.thickness;
        JUULIO.canvasElements.drawLine(_x1, _y1, _x2, _y2, context);
    }

    for(var j=0;j<leaves.length;j++){
        leaf = leaves[j];
        _x1 = leaf._x;
        _y1 = leaf._y;
        drawLeaf(_x1, _y1, leaf.radius, '#000', 2, context, 0, 4);
    }
}

/**************************************
* Draws a leaf */
// shape = 0 : circle
// shape = 1 : square
// shape = 2 : triangle
var drawLeaf = function(x, y, radius, color, lineWidth, canvasContext, shape, size){
    var rotationAngle = 0;
    context.strokeStyle = color;

    if (shape == 0){
        JUULIO.canvasElements.drawDot(x, y, size, 2, context);
    }
    if (shape == 1){
        canvasContext.rect(x, y, size, size);
        canvasContext.stroke();
    }
    if (shape == 2){
        // alert('hola');
        // rotationAngle = JUULIO.canvasElements.getRandomInt(0,100);
        // console.log(rotationAngle);
        // context.rotate(rotationAngle*Math.PI/180);
        JUULIO.canvasElements.drawTriangle(x, y, size, context);
        // context.rotate(-rotationAngle*Math.PI/180);
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
        size = 19,
        // leafColor = 'rgb(' + JUULIO.canvasElements.getRandomInt(0,255) +',' + JUULIO.canvasElements.getRandomInt(0,255) +'    ,34)';
        leafColor = 'rgb(255, 165, 0)',
        radius = 7,
        rotationAngle = 0;

    for(var i=0;i<leaves.length;i++){
        // _x = leaves[i]._x + JUULIO.canvasElements.getRandomInt(-2,2)*0.6;
        // _y = leaves[i]._y + JUULIO.canvasElements.getRandomInt(-1,1)*0.4;

        rotationAngle = leaves[i]._startingAngle;
        shape = leaves[i]._shape;
        _x = leaves[i]._x + radius*JUULIO.canvasElements.cos(rotationAngle);
        _y = leaves[i]._y + radius*JUULIO.canvasElements.sin(rotationAngle)

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
    console.log(leaves.length);
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTree();
    animateLeaves();
};

drawScreen();


/*

OJO Este código funciona perfecto. Tomado de http://rosettacode.org/wiki/Fractal_tree#JavaScript

var contadorDeHojas = 0;
context.fillStyle = '#000';
context.lineWidth = 1;

var deg_to_rad = Math.PI / 180.0;
var depth = 6;

function drawLine(x1, y1, x2, y2, brightness){
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
}

function drawTree2(x1, y1, angle, depth){
    if (depth !== 0){
        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 10.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 10.0);
        drawLine(x1, y1, x2, y2, depth);

        drawTree2(x2, y2, angle - 20, depth - 1);
        drawTree2(x2, y2, angle + 20, depth - 1);
    }
    if(depth == 1) {
        contadorDeHojas++;
    }
}

context.beginPath();
drawTree2(250, 400, -90, depth);
context.closePath();
context.stroke();
console.log(contadorDeHojas);
*/

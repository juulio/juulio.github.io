/**
 * @author Julio Del Valle - Costa Rica
 * juulio.github.io
 */

/**
 * Trees list
 * fractal binary tree
 * fractal binary tree black and white
 * fractal binary tree color
 * fractal binary tree thick
 *
 */

var JUULIO = JUULIO || {};

JUULIO.fractalTrees = JUULIO.fractalTrees || (function () {

  'use strict';

  /**
   * Global Variables
   */
  var canvasWidth = JUULIO.global.setRendererWidth(800);
  var canvasHeight = 500;
  var depth = 11;

  var tree02BranchLength = 70;
  var tree02BranchWidth = 60;

  /**
   * If Mobile, load proper values
   */
  if (JUULIO.global.isMobile()){
    depth = 8;
    canvasHeight = 290;

    tree02BranchLength = 40;
    tree02BranchWidth = 40;
  }

  var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', JUULIO.global.setRendererWidth(800), canvasHeight, '2d');
  var canvasContext = canvas.getContext("2d")
  var startPositionX = canvas.width/2;
  var startPositionY = canvas.height;

  /**
   * Init all required functions
   */
  var init = function () {
    var buttons = document.getElementsByTagName('button')[0];
    var button01 = document.getElementById('button-tree-01');
    var button02 = document.getElementById('button-tree-02');
    var button03 = document.getElementById('button-tree-03');
    var button04 = document.getElementById('button-tree-04');

    buttons.addEventListener('click', function() {
    }, false);

    button01.addEventListener('click', function() {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      drawTree01(startPositionX, startPositionY, -90, depth);
    }, false);

    button02.addEventListener('click', function() {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      drawTree02(canvasContext, startPositionX, startPositionY, tree02BranchLength, -Math.PI / 2, 6, tree02BranchWidth);
    }, false);

    button03.addEventListener('click', function() {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      console.log('fractal binary tree black and-white');
    }, false);

    button04.addEventListener('click', function() {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      console.log('draw Tree #4');
    }, false);
  };

  /**
   * Tree 01 : Colorful Tree
   */
  var drawTree01 = function(x1, y1, angle, depth){
    var alpha = 0.3,
    leafSize = 0,
    leafMaxSize = 5,
    rotationAngle = 0,
    branchColor = '',
    leafProbabilty = JUULIO.canvasElements.getRandomInt(0,1);

    if (depth !== 0){
    if(depth > 3){
    branchColor = 'rgb(100,69,19)'; //Brown
    }
    else {
    branchColor = 'rgb(143,154,90)'; //Green
    }

    depth--;
    var lineWidth = depth*1.6;

    var x2 = x1 + (Math.cos(JUULIO.canvasElements.degToRad(angle)) * depth * 5.0);
    var y2 = y1 + (Math.sin(JUULIO.canvasElements.degToRad(angle)) * depth * 6.0);
    JUULIO.canvasElements.drawLine(x1, y1, x2, y2, branchColor, lineWidth);

    drawTree01(x2, y2, angle - JUULIO.canvasElements.getRandomInt(18, 20), depth);
    drawTree01(x2, y2, angle + JUULIO.canvasElements.getRandomInt(5, 30), depth);
    }
    if(depth == 1 && leafProbabilty == 1) {
    rotationAngle = JUULIO.canvasElements.getRandomInt(0, 360);
    alpha = JUULIO.canvasElements.getRandomArbitrary(0.3, 1);
    leafSize = JUULIO.canvasElements.getRandomInt(0, leafMaxSize);

    JUULIO.canvasElements.drawLeaf(x2, y2, rotationAngle, leafSize, alpha);
    }
  };

  /**
   * Tree 02 : Thick trunk Tree
   */
  var drawTree02 = function (context, startX, startY, length, angle, depth, branchWidth) {
    var rand = Math.random,
        newLength,
        newAngle,
        newDepth,
        maxBranch = 4,
        endX, endY,
        maxAngle = 2 * Math.PI / 4,
        subBranches,
        lenShrink;

    // Draw a branch, leaning either to the left or right (depending on angle).
    // First branch (the trunk) is drawn straight up (angle = 1.571 radians)
    context.beginPath();
    context.moveTo(startX, startY);
    endX = startX + length * Math.cos(angle);
    endY = startY + length * Math.sin(angle);

    // console.log(endX + ' ' + endY);

    context.lineCap = 'round';
    context.lineWidth = branchWidth;
    context.lineTo(endX, endY);

    // If we are near the end branches, make them green to look like leaves.
    if (depth <= 1) {
        context.strokeStyle = 'rgba(0,' + (((rand() * 64) + 128) >> 0) + ',0,0.8)';
    }
    // Otherwise, choose a random brownish color.
    else {
        context.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ',50,25)';
    }

    context.stroke();

    // Reduce the branch recursion level.
    newDepth = depth - 1;

    // If the recursion level has reached zero, then the branch grows no more.
    if (!newDepth) {
        return;
    }

    // Make current branch split into a random number of new branches.
    // Add in some random lengths, widths, and angles for a more natural look.
    subBranches = (rand() * (maxBranch - 1)) + 1;

    // Reduce the width of the new branches.
    branchWidth *= 0.7;

    // Recursively call drawTree for the new branches with new values.
    for (var i = 0; i < subBranches; i++) {
        newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
        newLength = length * (0.7 + rand() * 0.3);
        drawTree02(context, endX, endY, newLength, newAngle, newDepth, branchWidth);
    }
  };

  /**
   * Tree 03 : Tree
   */
  var drawTree03 = function(x1, y1, angle, depth){

  };

  /**
   * Tree 04 : Tree
   */
  var drawTree04 = function(x1, y1, angle, depth){

  };

  init();

 })();

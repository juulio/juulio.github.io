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
  var globalDepth = 1;

  var tree02BranchLength = 70;
  var tree02BranchWidth = 60;

  var tree03FractalProportion = 0.8;
  var tree03Depth = 8;

  var toggleAnimation = false;
  var toggleAnimation = true;

  // - - - --- - - - Animation
  var animationSpeed = 0.5;
  var startAnimationX = 0;
  var startAnimationY = 0;
  var endAnimationX;
  var endAnimationY;

  var animationDepth = 1;

  // - - - --- - - - Animation


  /**
   * If Mobile, load proper values
   */
  if (JUULIO.global.isMobile()){
    depth = 8;
    canvasHeight = 290;

    tree02BranchLength = 40;
    tree02BranchWidth = 40;

    tree03Depth = 5;
  }

  var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', JUULIO.global.setRendererWidth(800), canvasHeight, '2d');
  var canvasContext = canvas.getContext("2d")
  var startPositionX = canvas.width/2;
  var startPositionY = canvas.height;

  /**
   * Init all required functions
   */
  var init = function () {
    var button01 = document.getElementById('button-tree-01');
    var button02 = document.getElementById('button-tree-02');
    var button03 = document.getElementById('button-tree-03');
    var button04 = document.getElementById('button-tree-04');

    button01.addEventListener('click', function() {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      drawTree01(startPositionX, startPositionY, -90, 12);
      globalDepth++;
    }, false);

    button02.addEventListener('click', function() {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      drawTree02(startPositionX, startPositionY, canvasContext, tree02BranchLength, -Math.PI / 2, 6, tree02BranchWidth);
    }, false);

    button03.addEventListener('click', function() {
      // drawTree03(startPositionX, startPositionY, 70, 25, tree03Depth, 14);
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);

      var animationIsEnabled = document.getElementById("toggleAnimation").checked;
      if(animationIsEnabled){
        requestAnimationFrame(drawTree03);
        if(animationDepth<10){
          animationDepth += 0.6;
        }
        else{
          animationDepth = 0;
        }
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        depth = animationDepth;
      }

      drawTree03(startPositionX, startPositionY, 70, 25, depth, 14);

    }, false);

    button04.addEventListener('click', function() {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      animationSpeed = 0.4;
      startAnimationX = 0;
      startAnimationY = 0;
      endAnimationX = 300;
      endAnimationY = 400;


      drawTree04();
    }, false);
  };

  /**
   * Tree 01 : Colorful Tree
   */
  var drawTree01 = function(startX, startY, angle, depth){
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

      depth -= 1;
      var lineWidth = depth*1.6;

      var x2 = startX + (Math.cos(JUULIO.canvasElements.degToRad(angle)) * depth * 5.0);
      var y2 = startY + (Math.sin(JUULIO.canvasElements.degToRad(angle)) * depth * 6.0);
      JUULIO.canvasElements.drawLine(startX, startY, x2, y2, branchColor, lineWidth);

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
  var drawTree02 = function(startX, startY, context, length, angle, depth, branchWidth) {
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
    canvasContext.beginPath();
    canvasContext.moveTo(startX, startY);
    endX = startX + length * Math.cos(angle);
    endY = startY + length * Math.sin(angle);

    // console.log(endX + ' ' + endY);

    canvasContext.lineCap = 'round';
    canvasContext.lineWidth = branchWidth;
    canvasContext.lineTo(endX, endY);

    // If we are near the end branches, make them green to look like leaves.
    if (depth <= 1) {
        canvasContext.strokeStyle = 'rgba(0,' + (((rand() * 64) + 128) >> 0) + ',0,0.8)';
    }
    // Otherwise, choose a random brownish color.
    else {
        canvasContext.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ',50,25)';
    }

    canvasContext.stroke();

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
        drawTree02(endX, endY, context, newLength, newAngle, newDepth, branchWidth);
    }
  };

  /**
   * Tree 03 : Tree
   */
  var drawTree03 = function(startX, startY, branchLength, angle, depth, lineWidth){
    canvasContext.save();
    canvasContext.translate(startX, startY);

    JUULIO.canvasElements.drawLine(0, 0, 0, -branchLength, '#000000', lineWidth);

    if(depth > 0 ){
        depth--;
        canvasContext.translate(0, -branchLength);

        angle += tree03FractalProportion;
        lineWidth *= tree03FractalProportion;
        branchLength *= tree03FractalProportion;

        canvasContext.save();

        // Draw Right Branch
        canvasContext.rotate(angle * Math.PI / 180);
        drawTree03(0, 0, branchLength, angle, depth, lineWidth);

        canvasContext.restore();
        canvasContext.save();

        // Draw Left Branch
        canvasContext.rotate(-angle * Math.PI / 180);
        drawTree03(0, 0, branchLength, angle, depth, lineWidth);
        canvasContext.restore();
    }
    canvasContext.restore();
  };

  /**
   * Tree 04 : Tree
   */
  //  var drawTree04 = function(startX, y1, angle, depth){
  var drawTree04 = function(){


  };

  init();

 })();

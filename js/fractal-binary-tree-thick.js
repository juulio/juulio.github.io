/**
 * @author Julio Del Valle - Costa Rica
 * juulio.com
 */
var fractalBinaryTree = fractalBinaryTree || {};

(function (context) {

  /**
   * Init all required functions
   */
  function init () {

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

    var startX = canvasWidth / 2;

    var button = document.getElementsByClassName("fractalTreeButton");

    var drawTree = function (context, startX, startY, length, angle, depth, branchWidth) {
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
          drawTree(context, endX, endY, newLength, newAngle, newDepth, branchWidth);
      }
    }

    button[0].onclick = function(){
      context.clearRect(0,0,canvas.width, canvas.height);
      drawTree(context, startX, canvasHeight, branchLength, -Math.PI / 2, 8, branchWidth);
    };

    drawTree(context, startX, canvasHeight-40, branchLength, -Math.PI / 2, 8, branchWidth);
  }

  init();

}(fractalBinaryTree));

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

var fractalTrees = fractalTrees || {};

(function (context) {

  /**
   * Global Variables
   */
  var canvasWidth = JUULIO.global.setRendererWidth(800);
  var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, 500, '2d');
  var startPositionX = canvas.width/2;
  var startPositionY = canvas.height;
  var depth = 11;


  /**
   * Init all required functions
   */
  function init () {

    var button01 = document.getElementById("button-tree-01");
    var button02 = document.getElementById("button-tree-02");
    var button03 = document.getElementById("button-tree-03");
    var button04 = document.getElementById("button-tree-04");

    button01.addEventListener('click', function() {
      drawTree01(startPositionX, startPositionY, -90, depth);
    }, false);

    button02.addEventListener('click', function() {
      console.log('fractal binary tree thick');
    }, false);

    button03.addEventListener('click', function() {
      console.log('fractal binary tree black and-white');
    }, false);

    button04.addEventListener('click', function() {
      console.log('draw Tree #4');
    }, false);
  }

 /**
  * Tree 01 : Colorful Tree
  */
  function drawTree01(x1, y1, angle, depth){
    var alpha = 0.3,
        leafMaxSize = 5,
        roationAngle = 0,
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
  }

  /**
   * Tree 02 : Tree
   */
   function drawTree02(x1, y1, angle, depth){

   }

   /**
    * Tree 03 : Tree
    */
    function drawTree03(x1, y1, angle, depth){

    }

    /**
     * Tree 04 : Tree
     */
     function drawTree04(x1, y1, angle, depth){

     }

  init();

}(fractalTrees));
;

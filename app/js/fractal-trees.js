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
   * Init all required functions
   */
  function init () {

    /**
     * Initial code to create and set up the Canvas Element.
     */
    var canvasWidth = JUULIO.global.setRendererWidth(800);
    var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, 500, '2d');

    var button01 = document.getElementById("button-tree-01");
    var button02 = document.getElementById("button-tree-02");
    var button03 = document.getElementById("button-tree-03");
    var button04 = document.getElementById("button-tree-04");

    button01.addEventListener('click', function() {
      console.log('fractal binary tree color');
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

  init();

}(fractalTrees));
;

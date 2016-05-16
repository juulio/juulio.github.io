/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2016
 * juulio.github.io
 */
var particleSystem = particleSystem || {};

(function (context) {

  /********************************************************
   Initial code to create and set up the Canvas Element. */
  canvasElements.createCanvasElement('post-content');
  var canvas = canvasElements.canvas,
      canvasWidth = $('.post-content').innerWidth();

  canvasWidth -= (canvasWidth*0.2);

  canvasElements.createCanvasElement('home', canvasWidth, 600);
  var canvas = canvasElements.canvas,
      context = canvas.getContext("2d");

  canvas.style.margin = '0';

    /***
     * Init all required functions
     */
    function init () {

      /********************************************************
       Initial code to create and set up the Canvas Element. */
      canvasElements.createCanvasElement('post-content');
      var canvas = canvasElements.canvas;

      recursiveDrawClingingPlant(canvas.width/2, 20, 9, 18, 22, 6);

    }

    init();

}(particleSystem));

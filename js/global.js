/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * juulio.github.io
 */
var homePage = homePage || {};

(function (context) {

  /* Global Variables */
    vars = {
  };

  /*****************************
   * Init all required functions
   */
  function init () {
    var isHome = document.getElementsByClassName('home');

    if(isHome.length>0) {
      /********************************************************
      Initial code to create and set up the Canvas Element. */
      var homeElementWidth = isHome[0].offsetWidth;

      // canvasElements.createCanvasElement('home', homeElementWidth, 600);
      canvasElements.createCanvasElement('home', 700, 600);
      var canvas = canvasElements.canvas,
          context = canvas.getContext("2d");

      canvas.style.marginBottom = '20px';

      /*******************************************
      * Draw a Background Grass and Sky (Gradient) */
      var drawSkyAndGrass = function() {
        context.save();

        context.globalAlpha = 0.2;
        // First create a CanvasGradient object.
        var linGrad = context.createLinearGradient(0, 0, 0, canvas.height);

        linGrad.addColorStop(0, '#00BFFF'); // Light Blue
        linGrad.addColorStop(0.45, 'white'); // White in the middle
        linGrad.addColorStop(0.85, '#55dd00'); // Green

        context.fillStyle = linGrad;
        context.fillRect(0, 0, canvas.width, canvas.height);// The canvas and the gradient have the same area
        context.restore();
      };

      /***************************************************
      * Recursive function that draws The Clinging Plant */
      var recursiveDrawClingingPlant = function(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns){
        var dotHorizontalPos = 0,
            dotVerticalPos = spaceBetweenRows,
            leftMostPoint = x-(((plantColumns-1)*spaceBetweenColumns)/2);

        dotHorizontalPos = leftMostPoint;
        y+=spaceBetweenRows;

        for(var j=0; j<plantColumns; j++){
          canvasElements.drawLeaf(dotHorizontalPos, y, canvasElements.getRandomInt(50, 130), 3, 0.6);
          dotHorizontalPos += spaceBetweenColumns;
        }

        spaceBetweenColumns+=0.8;
        plantRows--;

        if(plantRows>0) {
          recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns);
        }
      }

      /*******************************
      * Begin Code for Fractal Tree */
      var drawFractalTree = function(x, y, angle, depth){

        var drawBranch = function(x1, y1, x2, y2, thickness, color) {
          context.beginPath();
          context.moveTo(x1,y1);
          context.lineTo(x2,y2);
          context.closePath();
          context.strokeStyle = color;
          context.lineWidth = thickness;
          context.stroke();
        };

        var drawLeaf = function(x, y, angle, scale, alpha) {
          context.translate(x, y);
          context.rotate(angle);
          context.beginPath();

          context.moveTo(0,0);

          context.lineTo(scale*0, scale*-1);
          context.lineTo(scale*2,scale*-3);
          context.lineTo(scale*4, scale*-1);
          context.lineTo(scale*6, scale*-3);
          context.lineTo(scale*8, scale*-1);
          context.lineTo(scale*10, scale*0);

          context.lineTo(scale*8, scale*1);
          context.lineTo(scale*6, scale*3);
          context.lineTo(scale*4, scale*1);
          context.lineTo(scale*2, scale*3);
          context.lineTo(scale*0, scale*1);
          context.lineTo(scale*0, scale*0);

          context.closePath();

          context.lineWidth = 1;
          context.fillStyle = 'rgba(143,154,90,' + alpha + ')';
          context.strokeStyle = 'rgb(25, 66, 0)';
          context.fill();

          context.stroke();
          context.rotate(-angle);
          context.translate(-x, -y);
        };

        var drawFruit = function(x, y, alpha) {
          var radius = canvasElements.getRandomArbitrary(0,7)
          context.beginPath();
          context.arc(x, y, radius, 0, 2*Math.PI, false);
          context.fillStyle = 'rgba(255,153,0,' + alpha + ')';
          context.fill();
          context.lineWidth = 1;
          context.stroke();
        };

        var alpha = 0.3,
          afSize = 1,
          roationAngle = 0,
          branchColor = '',
          leafProbabilty = canvasElements.getRandomArbitrary(0,1);

        if (depth !== 0){
          if(depth > 3){
            branchColor = 'rgb(100,69,19)'; //Brown
          }
          else {
            branchColor = 'rgb(143,154,90)'; //Green
          }

          context.strokeStyle = branchColor;
          depth--;

          var x2 = x + (Math.cos(canvasElements.degToRad(angle)) * depth * 4.0);
          var y2 = y + (Math.sin(canvasElements.degToRad(angle)) * depth * 13.0);
          branchThickness = depth*2.4;
          drawBranch(x, y, x2, y2, branchThickness, branchColor);

          drawFractalTree(x2, y2, angle - canvasElements.getRandomInt(24, 26), depth);
          drawFractalTree(x2, y2, angle + canvasElements.getRandomInt(20, 22), depth);
        }

        if(depth == 1 && leafProbabilty > 0.2) {
          rotationAngle = canvasElements.getRandomInt(0, 360);
          alpha = canvasElements.getRandomArbitrary(0.3, 1);
          leafSize = canvasElements.getRandomInt(0, 3);

          drawFruit(x2, y2, alpha);
          drawLeaf(x2, y2, rotationAngle, leafSize, alpha);
        }
      };

      /********************************************
      * Initial Variables to set environment up */
      var plantRows = 19,
        spaceBetweenRows = 22,
        canvasWidth = canvas.width,
        canvasHeight = canvas.height,
        treeStartingX = canvasWidth*0.3,
        clinginPlantStartingX = treeStartingX*1.3,
        clinginPlantHeight = plantRows*spaceBetweenRows,
        clinginPlantStartingY = canvasHeight - clinginPlantHeight;

      drawSkyAndGrass();

      drawFractalTree(treeStartingX, canvas.height, -90, 10);

      recursiveDrawClingingPlant(clinginPlantStartingX, clinginPlantStartingY, 8, plantRows, spaceBetweenRows, 4);
    } // End if

  } // End init

  init();

}(homePage));

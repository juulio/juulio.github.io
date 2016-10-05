/**
 * @author Julio Del Valle - Costa Rica
 * juulio.github.io
 */
var clingingPlant = clingingPlant || {};

(function (context) {

    /***
     * Init all required functions
     */
    function init () {
        /***************************************************
         Recursive function that draws The Clinging Plant */
        function recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns){
            var dotHorizontalPos = 0,
                dotVerticalPos = spaceBetweenRows,
                leftMostPoint = x-(((plantColumns-1)*spaceBetweenColumns)/2);

            dotHorizontalPos = leftMostPoint;
            y+=spaceBetweenRows;

            for(var j=0; j<plantColumns; j++){
                JUULIO.canvasElements.drawLeaf(dotHorizontalPos, y, 55, 3, 0.9);
                dotHorizontalPos += spaceBetweenColumns;
            }

            spaceBetweenColumns+=0.8;
            plantRows--;

            if(plantRows>0) {
                recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns, false);
            }
        }

        /********************************************************
         Initial code to create and set up the Canvas Element. */
         var canvasWidth = JUULIO.global.setRendererWidth(500);
         var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, 500, '2d');

        recursiveDrawClingingPlant(canvas.width/2, 20, 9, 18, 22, 6);

    }

    init();

}(clingingPlant));

/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * juulio.github.io
 */
var homePage = homePage || {};

(function (context) {

    /***
     * Global Variables
     */
    vars = {


    };

    /***
     * Init all required functions
     */
    function init () {
        var isHome = document.getElementsByClassName('home');
        if(isHome.length>0) {
            /********************************************************
             Initial code to create and set up the Canvas Element. */
            canvasElements.createCanvasElement('home');
            var canvas = canvasElements.canvas,
                context = canvas.getContext("2d");


            /***************************************************
             Recursive function that draws The Clinging Plant */
            function recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns){
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
                    recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns, false);
                }
            }

            /*******************************
        	* Begin Code for Fractal Tree */
            var drawFractalTree = function(x, y, angle, depth){

        		var drawBranch = function(x1, y1, x2, y2, context, thickness, color) {
        			context.beginPath();
        	        context.moveTo(x1,y1);
        			context.lineTo(x2,y2);
        			// context.lineTo(x1+thickness,y1);
        			// context.lineTo(x1+thickness,y2);
        			// context.lineTo(x1,y2);
        			//
        			// context.closePath();
        			context.lineWidth = thickness;
        			// context.fillStyle = '#8ED6FF';
        			//
        			// context.fill();
        			context.strokeStyle = color;
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

        			context.lineWidth = 2;
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
        			context.stroke();
        		};

        	    var alpha = 0.3,
        	        leafSize = 1,
        			branchThickness = 1,
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

        	        var x2 = x + (Math.cos(canvasElements.degToRad(angle)) * depth * 6.0);
        	        var y2 = y + (Math.sin(canvasElements.degToRad(angle)) * depth * 11.0);
        	        branchThickness = depth*1.6;
        	        drawBranch(x, y, x2, y2, context, branchThickness, branchColor);

        	        drawFractalTree(x2, y2, angle - canvasElements.getRandomInt(10, 14), depth);
        	        drawFractalTree(x2, y2, angle + canvasElements.getRandomInt(9, 12), depth);
        	    }

        	    if(depth == 1 && leafProbabilty > 0.2) {
        	        rotationAngle = canvasElements.getRandomInt(0, 360);
        	        alpha = canvasElements.getRandomArbitrary(0.3, 1);
        	        leafSize = canvasElements.getRandomInt(0, 3);

        			drawFruit(x2, y2, alpha);
        	        drawLeaf(x2, y2, rotationAngle, leafSize, alpha);
        	    }
            };

            drawFractalTree(canvas.width*0.4, canvas.height, -90, 10);
            recursiveDrawClingingPlant(canvas.width/2, 20, 9, 18, 22, 6);
        }
    }

    init();

}(homePage));

/**
 * Julio Del Valle - Computer Graphics - Costa Rica - 2016
 * Fractals Forest - juulio.github.io
 */
var fractalsForest = fractalsForest || {};

(function (context) {

	var generalDepth = 1,
			canvasWidth = JUULIO.global.setRendererWidth(700),
			button = document.getElementsByClassName("fractalTreeButton");

	/**
	Create and set up the Canvas Element.
	*/
	var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, 600, '2d'),
			context = canvas.getContext("2d");

	/***************************************
	 * Begin Code for First Fractal Tree */
	var drawFirstTree = function (x1, y1, angle, depth){

		var BRANCH_LENGTH = JUULIO.canvasElements.getRandomInt(2, 8)
			branchColor = 'rgb(0, 0, 0)';

		if (depth != 0){
			var x2 = x1 + (JUULIO.canvasElements.cos(angle) * depth * BRANCH_LENGTH);
			var y2 = y1 + (JUULIO.canvasElements.sin(angle) * depth * BRANCH_LENGTH);

			if(depth > 5){
				branchColor = 'rgb(139,126,102)'; //Brown
			}
			else {
				branchColor = 'rgb(34,139,34)'; //Green
			}

			JUULIO.canvasElements.drawLine(x1, y1, x2, y2, context, branchColor, depth);
			depth--;
			drawFirstTree(x2, y2, angle -JUULIO.canvasElements.getRandomInt(15,20), depth);
			drawFirstTree(x2, y2, angle +JUULIO.canvasElements.getRandomInt(15,20), depth);
		}
	};

	/*************************************
	* Begin Code for Fifth Fractal Tree */
  var drawSecondTree = function(x, y, angle, depth){
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
			var radius = JUULIO.canvasElements.getRandomArbitrary(0,7)
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
				leafProbabilty = JUULIO.canvasElements.getRandomArbitrary(0,1);

	  if (depth !== 0){
			if(depth > 3){
			    branchColor = 'rgb(100,69,19)'; //Brown
			}
			else {
			    branchColor = 'rgb(143,154,90)'; //Green
			}

			context.strokeStyle = branchColor;
			depth--;

			var x2 = x + (Math.cos(JUULIO.canvasElements.degToRad(angle)) * depth * 10.0);
			var y2 = y + (Math.sin(JUULIO.canvasElements.degToRad(angle)) * depth * 6.0);
			branchThickness = depth*1.6;
			drawBranch(x, y, x2, y2, context, branchThickness, branchColor);

			drawSecondTree(x2, y2, angle - JUULIO.canvasElements.getRandomInt(15, 19), depth);
			drawSecondTree(x2, y2, angle + JUULIO.canvasElements.getRandomInt(9, 21), depth);
	  }

	  if(depth == 1 && leafProbabilty > 0.2) {
	      rotationAngle = JUULIO.canvasElements.getRandomInt(0, 360);
	      alpha = JUULIO.canvasElements.getRandomArbitrary(0.3, 1);
	      leafSize = JUULIO.canvasElements.getRandomInt(0, 3);

		drawFruit(x2, y2, alpha);
	  	drawLeaf(x2, y2, rotationAngle, leafSize, alpha);
	  }
  };

	/**************************************
	* Begin Code for Third Fractal Tree */
	var drawThirdTree = function (startX, startY, length, angle, branchWidth, depth) {
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

        context.lineCap = 'round';
        context.lineWidth = branchWidth;
        context.lineTo(endX, endY);

        // If we are near the end branches, make them green to look like leaves.
        if (depth <= 2) {
            context.strokeStyle = 'rgba(0,' + (((rand() * 64) + 128) >> 0) + ',0, 0.2)';
        }
        // Otherwise, choose a random brownish color.
        else {
    				var color = 'rgb(' + (((rand() * 64) + 84) >> 0) + ',100,25)';
    				// context.strokeStyle = 'rgb(' + (((rand() * 64) + 84) >> 0) + ',50,25)';
    				color = 'rgba(140,105,125, 0.7)';
    				context.strokeStyle = color;
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

        // Recursively call drawThirdTree for the new branches with new values.
        for (var i = 0; i < subBranches; i++) {
            newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
            newLength = length * (0.7 + rand() * 0.3);
            drawThirdTree(endX, endY, newLength, newAngle, branchWidth, newDepth);
        }
      }

	/**************************************
	* Begin Code for Fourth Fractal Tree */
 	var drawFourthTree = function(x1, y1, angle, lineLength, treeDepth){
        var x2 = x1 + (JUULIO.canvasElements.cos(angle) * treeDepth * lineLength),
            y2 = y1 + (JUULIO.canvasElements.sin(angle) * treeDepth * lineLength),
            branchColor = 'rgb(0,0,0)';

        if(treeDepth !=0) {
            treeDepth--;

            JUULIO.canvasElements.drawLine(x1, y1, x2, y2, context, branchColor, 1);

            drawFourthTree(x2, y2, angle -JUULIO.canvasElements.getRandomInt(14,20), lineLength, treeDepth);
            drawFourthTree(x2, y2, angle +JUULIO.canvasElements.getRandomInt(15,30), lineLength, treeDepth);
        }
        else {
            context.strokeStyle = 'rgb(' +JUULIO.canvasElements.getRandomInt(0,255) +',' +JUULIO.canvasElements.getRandomInt(0,255) +'    ,34)';
            JUULIO.canvasElements.drawDot(x2, y2, 6, 2, context);
        }
    };

	/*************************************
	* Begin Code for Fifth Fractal Tree */
  var drawFifthTree = function(startX, startY, branchLength, angle, lineWidth, depth){
	var canvasHalfWidth = canvas.width/2,
       fractalProportion = 0.66,
	   color = 'rgba(89, 166, 62, 0.92)',
	   trunkColor = 'rgba(151, 84, 69, 0.84)';

    context.lineWidth = lineWidth;
	context.save();
    context.translate(startX, startY);

	if(depth > 5){
		color = trunkColor;
	}

    JUULIO.canvasElements.drawLine(0, 0, 0, -branchLength, context, color);

		if(depth > 0 ){
	    context.save();
		    depth--;
		    context.translate(0, -branchLength);

		    angle += fractalProportion;
		    lineWidth *= fractalProportion;
		    branchLength *= fractalProportion;

		    context.save();
			    // Draw Right Branch
			    context.rotate(angle * Math.PI / 180);
			    drawFifthTree(0, 0, branchLength, angle, lineWidth, depth);
		    context.restore();

		    context.save();
			    // Draw Left Branch
			    context.rotate(-angle * Math.PI / 180);
			    drawFifthTree(0, 0, branchLength, angle, lineWidth, depth);
		    context.restore();
			context.restore();
		}
		context.restore();
  };

	/*******************************************
	* Begin Code for Background Grass and Sky */
	var drawSkyAndGrass = function() {
		context.save();
		// Set transparency.
		context.globalAlpha = 0.4;
		// Create a CanvasGradient object in linGrad.
		// The gradient line is defined from the top to the bottom of the canvas.
		var linGrad = context.createLinearGradient(0, 0, 0, canvas.height);
		// Start off with sky blue at the top.
		linGrad.addColorStop(0, '#00BFFF');
		// Fade to white in the middle.
		linGrad.addColorStop(0.63, '#F0E68C');
		// Green for the top of the grass.
		linGrad.addColorStop(0.65, '#99ff99');
		// Use the CanvasGradient object as the fill style.
		context.fillStyle = linGrad;
		// Finally, fill a rectangle the same size as the canvas.
		context.fillRect(0, 0, canvas.width, canvas.height);

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
      JUULIO.canvasElements.drawLeaf(dotHorizontalPos, y, JUULIO.canvasElements.getRandomInt(50, 130), 3, 0.6);
      dotHorizontalPos += spaceBetweenColumns;
    }

    spaceBetweenColumns+=0.8;
    plantRows--;

    if(plantRows>0) {
      recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns);
    }
  }

	/*************************************************
	* Call the functions to generate all the Trees */
	var generateFractalsForest = function(){
		drawSkyAndGrass();

		drawFirstTree(context.canvas.width*0.23, canvas.height-215, -90, generalDepth);
		drawThirdTree(canvas.width*0.6, canvas.height-130, 40, -Math.PI / 2, 20, generalDepth);
		drawFifthTree(canvas.width*0.12, canvas.height-30, 40, 25, 11, generalDepth);
		drawSecondTree(canvas.width*0.4, canvas.height, -90, generalDepth);
		drawFourthTree(canvas.width*0.74, canvas.height-40, -90, 4, generalDepth);

		if(generalDepth > 9){
			var spaceBetweenRows = 25,
				canvasWidth = canvas.width,
				canvasHeight = canvas.height,
				treeStartingX = canvasWidth*0.3,
				clinginPlantStartingX = treeStartingX*1.15,
				clinginPlantHeight = generalDepth*spaceBetweenRows*1.2,
				clinginPlantStartingY = canvasHeight - clinginPlantHeight;

			recursiveDrawClingingPlant(clinginPlantStartingX, clinginPlantStartingY, 8, generalDepth, spaceBetweenRows, 4);
		}
	}

	/*****************************************
	* Init */
  function init () {
		generateFractalsForest();

		/************************************
		* Begin Code for Regenerate Button */
		button[0].onclick = function(){
			if (generalDepth >= 12) {
				generalDepth = 0;
			}

			generalDepth++;
			document.getElementsByClassName('treeDepthLevel')[0].textContent = generalDepth;

			// Clear the whole canvas area.
			context.clearRect(0,0,canvas.width, canvas.height);

			generateFractalsForest();
		}
  }

  init();

}(fractalsForest));

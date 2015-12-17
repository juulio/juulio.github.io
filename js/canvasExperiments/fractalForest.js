/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Fractals Forest - juulio.github.io
 */
var fractalsForest = fractalsForest || {};

(function (context) {


	var canvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d');
        button = document.getElementsByClassName("fractalTreeButton");

	/***************************************
	 * Begin Code for First Fractal Tree */
	var drawFirstTree = function (x1, y1, angle, depth){

		var BRANCH_LENGTH =canvasElements.getRandomInt(2, 12)
			branchColor = 'rgb(0, 0, 0)';

		if (depth != 0){
			var x2 = x1 + (canvasElements.cos(angle) * depth * BRANCH_LENGTH);
			var y2 = y1 + (canvasElements.sin(angle) * depth * BRANCH_LENGTH);

			if(depth > 5){
				branchColor = 'rgb(139,126,102)'; //Brown
			}
			else {
				branchColor = 'rgb(34,139,34)'; //Green
			}

			canvasElements.drawLine(x1, y1, x2, y2, context, branchColor, depth);
			depth--;
			drawFirstTree(x2, y2, angle -canvasElements.getRandomInt(15,20), depth);
			drawFirstTree(x2, y2, angle +canvasElements.getRandomInt(15,20), depth);
		}
	};

	/**************************************
	* Begin Code for Second Fractal Tree */
	var drawSecondTree = function(startX, startY, trunkWidth, level) {
		if(level < 12) {
			var changeX = 100 / (level + 1);
			var changeY = 200 / (level + 1);

			var topRightX = startX + Math.random() * changeX;
			var topRightY = startY - Math.random() * changeY;

			var topLeftX = startX - Math.random() * changeX;
			var topLeftY = startY - Math.random() * changeY;

			if(level < 9) {
				context.strokeStyle = '#493D26';
			}
			else {
				context.strokeStyle = '#006400';
			}
			// draw right branch
			context.beginPath();
			context.moveTo(startX + trunkWidth / 4, startY);
			context.quadraticCurveTo(startX + trunkWidth / 4, startY - trunkWidth, topRightX, topRightY);
			context.lineWidth = trunkWidth;
			context.lineCap = 'round';
			context.stroke();

			// draw left branch
			context.beginPath();
			context.moveTo(startX - trunkWidth / 4, startY);
			context.quadraticCurveTo(startX - trunkWidth / 4, startY - trunkWidth, topLeftX, topLeftY);
			context.lineWidth = trunkWidth;
			context.lineCap = 'round';
			context.stroke();

			drawSecondTree(topRightX, topRightY, trunkWidth * 0.7, level + 1);
			drawSecondTree(topLeftX, topLeftY, trunkWidth * 0.7, level + 1);
		}
	};

	/**************************************
	* Begin Code for Third Fractal Tree */
	var drawThirdTree = function (startX, startY, length, angle, depth, branchWidth) {
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
            context.strokeStyle = 'rgb(0,' + (((rand() * 64) + 128) >> 0) + ',0)';
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

        // Recursively call drawThirdTree for the new branches with new values.
        for (var i = 0; i < subBranches; i++) {
            newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
            newLength = length * (0.7 + rand() * 0.3);
            drawThirdTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
        }
    }

	/**************************************
	* Begin Code for Fourth Fractal Tree */
 	var drawFourthTree = function(x1, y1, angle, treeDepth, lineLength){
        var x2 = x1 + (canvasElements.cos(angle) * treeDepth * lineLength),
            y2 = y1 + (canvasElements.sin(angle) * treeDepth * lineLength),
            branchColor = 'rgb(0,0,0)';

        if(treeDepth !=0) {
            treeDepth--;

            canvasElements.drawLine(x1, y1, x2, y2, context, branchColor, 1);

            drawFourthTree(x2, y2, angle -canvasElements.getRandomInt(20,26), treeDepth, lineLength);
            drawFourthTree(x2, y2, angle +canvasElements.getRandomInt(30,58), treeDepth, lineLength);
        }
        else {
            context.strokeStyle = 'rgb(' +canvasElements.getRandomInt(0,255) +',' +canvasElements.getRandomInt(0,255) +'    ,34)';
            canvasElements.drawDot(x2, y2, 6, 2, context);
        }
    };

	/*************************************
	* Begin Code for Fifth Fractal Tree */
    var drawFifthTree = function(startX, startY, branchLength, angle, depth, lineWidth){
		var canvasHalfWidth = canvas.width/2,
        fractalProportion = 0.7;

        context.lineWidth = lineWidth;
		context.save();
        context.translate(startX, startY);

        canvasElements.drawLine(0, 0, 0, -branchLength, context);

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
            drawFifthTree(0, 0, branchLength, angle, depth, lineWidth);
            context.restore();

            context.save();
            // Draw Left Branch
            context.rotate(-angle * Math.PI / 180);
            drawFifthTree(0, 0, branchLength, angle, depth, lineWidth);
            context.restore();

			context.restore();
        }
        context.restore();
    };

    /*************************************
	* Begin Code for Fifth Fractal Tree */
    var drawSixthTree = function(x, y, angle, depth){

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
			context.fillStyle = 'rgba(143,154,90,' + alpha + ')';
			context.strokeStyle = 'rgb(25, 66, 0)';
			context.fill();

			context.stroke();
			context.rotate(-angle);
			context.translate(-x, -y);
		};

	    var alpha = 0.3,
	        leafSize = 1,
	        roationAngle = 0,
	        branchColor = '',
	        leafProbabilty = canvasElements.getRandomInt(0,1);

	    if (depth !== 0){
	        if(depth > 3){
	            branchColor = 'rgb(100,69,19)'; //Brown
	        }
	        else {
	            branchColor = 'rgb(143,154,90)'; //Green
	        }

	        context.strokeStyle = branchColor;
	        depth--;

	        var x2 = x + (Math.cos(canvasElements.degToRad(angle)) * depth * 5.0);
	        var y2 = y + (Math.sin(canvasElements.degToRad(angle)) * depth * 6.0);
	        context.lineWidth = depth*1.6;
	        canvasElements.drawLine(x, y, x2, y2, context, branchColor);

	        drawSixthTree(x2, y2, angle - canvasElements.getRandomInt(18, 20), depth);
	        drawSixthTree(x2, y2, angle + canvasElements.getRandomInt(5, 30), depth);
	    }
	    if(depth == 1 && leafProbabilty == 1) {
	        rotationAngle = canvasElements.getRandomInt(0, 360);
	        alpha = canvasElements.getRandomArbitrary(0.3, 1);
	        leafSize = canvasElements.getRandomInt(0, 3);

	        drawLeaf(x2, y2, rotationAngle, leafSize, alpha);
	    }
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
		linGrad.addColorStop(0.3, 'white');
		// Green for the top of the grass.
		linGrad.addColorStop(0.7, '#55dd00');
		// Use the CanvasGradient object as the fill style.
		context.fillStyle = linGrad;
		// Finally, fill a rectangle the same size as the canvas.
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.restore();
	};

	/*************************************************
	 * Call the functions to generate all the Trees */
	var generateFractalsForest = function(){

		drawSkyAndGrass();

		drawFirstTree(context.canvas.width*0.3, canvas.height, -90, 11);

		drawSecondTree(canvas.width*0.15, canvas.height, 22, 1);

		drawThirdTree(canvas.width*0.6, canvas.height, 95, -Math.PI / 2, 7, 35);

		drawFourthTree(canvas.width*0.79, canvas.height, -90, 8, 6);

		drawFifthTree(canvas.width*0.66, canvas.height, 70, 25, 8, 14);

		drawSixthTree(canvas.width*0.43, canvas.height, -90, 11);

	}

	/*****************************************
	 * Init */
    function init () {
		generateFractalsForest();

		/************************************
		* Begin Code for Regenerate Button */
		// button[0].onclick = function(){
		// 	// First clear the whole canvas area.
		// 	context.clearRect(0,0,canvas.width, canvas.height);
		//
		// 	generateFractalsForest();
		// }
    }

    init();

}(fractalsForest));

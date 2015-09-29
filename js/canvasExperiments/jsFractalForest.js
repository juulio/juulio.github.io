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
	 * Begin code for Utiliy Functions */
	function cos (angle) {
		return Math.cos(deg_to_rad(angle));
	}

	function sin (angle) {
		return Math.sin(deg_to_rad(angle));
	}

	function deg_to_rad(angle){
		return angle*(Math.PI/180.0);
	}

	function random(min, max){
		return min + Math.floor(Math.random()*(max+1-min));
	}

	function drawLine(x1, y1, x2, y2, thickness){
		// if(thickness > 6)
		// 	context.strokeStyle = 'rgb(139,126,102)'; //Brown
		// else
		// 	context.strokeStyle = 'rgb(34,139,34)'; //Green

		context.lineWidth = thickness * 1.5;
		context.beginPath();

		context.moveTo(x1,y1);
		context.lineTo(x2, y2);

		context.closePath();
		context.stroke();
	}

    function drawDot(x,y,r,lineWidth) {
        context.beginPath();
        context.arc(x, y, r, 0, 2*Math.PI, false);
        context.lineWidth = lineWidth;
        context.stroke();
    }

	/***************************************
	 * Begin Code for First Fractal Tree */
	var drawFirstTree = function (x1, y1, angle, depth){

		var BRANCH_LENGTH = random(0, 20);

		if (depth != 0){
			var x2 = x1 + (cos(angle) * depth * BRANCH_LENGTH);
			var y2 = y1 + (sin(angle) * depth * BRANCH_LENGTH);

			if(depth > 5){
				context.strokeStyle = 'rgb(139,126,102)'; //Brown
			}
			else {
				context.strokeStyle = 'rgb(34,139,34)'; //Green
			}

			drawLine(x1, y1, x2, y2, depth);
			drawFirstTree(x2, y2, angle - random(15,20), depth - 1);
			drawFirstTree(x2, y2, angle + random(15,20), depth - 1);
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
        var x2 = x1 + (cos(angle) * treeDepth * lineLength),
            y2 = y1 + (sin(angle) * treeDepth * lineLength);

        if(treeDepth !=0) {
            treeDepth--;
            context.strokeStyle = 'rgb(0,0,0)';

            drawLine(x1, y1, x2, y2, 1);

            drawFourthTree(x2, y2, angle - random(20,26), treeDepth, lineLength);
            drawFourthTree(x2, y2, angle + random(30,58), treeDepth, lineLength);
        }
        else {
            context.strokeStyle = 'rgb(' + random(0,255) +',' + random(0,255) +'    ,34)';
            drawDot(x2, y2, 6, 2);
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
		linGrad.addColorStop(0.5, 'white');
		// Green for the top of the grass.
		linGrad.addColorStop(0.5, '#55dd00');
		// Fade to white at the bottom.
		linGrad.addColorStop(1, 'white');
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

		drawFirstTree(context.canvas.width*0.66, 600, -90, 9);

		drawSecondTree(canvas.width*0.15, canvas.height, 50, 0);

        drawThirdTree(canvas.width*0.46, canvas.height, 70, -Math.PI / 2, 8, 72);

        drawFourthTree(canvas.width*0.75, canvas.height, -90, 8, 6);		
	}

	/*****************************************
	 * Init */
    function init () {
		generateFractalsForest();

		/************************************
		* Begin Code for Regenerate Button */
		button[0].onclick = function(){
			// First clear the whole canvas area.
			context.clearRect(0,0,canvas.width, canvas.height);

			generateFractalsForest();
		}
    }

    init();

}(fractalsForest));

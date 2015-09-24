/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Fractals Forest - juulio.github.io
 */
var fractalsForest = fractalsForest || {};

(function (context) {


	var canvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d');
        // button = document.getElementsByClassName("fractalTreeButton");

	/***************************************
	 * Begin Code for First Fractal Tree */

	function drawFirstTree(context, x1, y1, angle, depth){

		var BRANCH_LENGTH = random(0, 20);

		if (depth != 0){
			var x2 = x1 + (cos(angle) * depth * BRANCH_LENGTH);
			var y2 = y1 + (sin(angle) * depth * BRANCH_LENGTH);

			drawLine(context, x1, y1, x2, y2, depth);
			drawFirstTree(context, x2, y2, angle - random(15,20), depth - 1);
			drawFirstTree(context, x2, y2, angle + random(15,20), depth - 1);
		}
	}

	function drawLine(context, x1, y1, x2, y2, thickness){
		context.fillStyle   = '#000';
		if(thickness > 6)
			context.strokeStyle = 'rgb(139,126, 102)'; //Brown
		else
			context.strokeStyle = 'rgb(34,139,34)'; //Green

		context.lineWidth = thickness * 1.5;
		context.beginPath();

		context.moveTo(x1,y1);
		context.lineTo(x2, y2);

		context.closePath();
		context.stroke();
	}


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

	/**************************************
	* Begin Code for Second Fractal Tree */

	function drawSecondTree(startX, startY, trunkWidth, level) {
		if(level < 12) {
			var changeX = 100 / (level + 1);
			var changeY = 200 / (level + 1);

			var topRightX = startX + Math.random() * changeX;
			var topRightY = startY - Math.random() * changeY;

			var topLeftX = startX - Math.random() * changeX;
			var topLeftY = startY - Math.random() * changeY;

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
	}


	/**************************************
	* Begin Code for Third Fractal Tree */
	var drawThirdTree = function (ctx, startX, startY, length, angle, depth, branchWidth) {
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
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        endX = startX + length * Math.cos(angle);
        endY = startY + length * Math.sin(angle);

        // console.log(endX + ' ' + endY);

        ctx.lineCap = 'round';
        ctx.lineWidth = branchWidth;
        ctx.lineTo(endX, endY);

        // If we are near the end branches, make them green to look like leaves.
        if (depth <= 2) {
            ctx.strokeStyle = 'rgb(0,' + (((rand() * 64) + 128) >> 0) + ',0)';
        }
        // Otherwise, choose a random brownish color.
        else {
            ctx.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ',50,25)';
        }

        ctx.stroke();

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
            drawThirdTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth);
        }
    }

	/*******************************************
	* Begin Code for Background Grass and Sky */
	var drawSkyAndGrass = function(ctx) {
		ctx.save();
		// Set transparency.
		ctx.globalAlpha = 0.4;
		// Create a CanvasGradient object in linGrad.
		// The gradient line is defined from the top to the bottom of the canvas.
		var linGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
		// Start off with sky blue at the top.
		linGrad.addColorStop(0, '#00BFFF');
		// Fade to white in the middle.
		linGrad.addColorStop(0.5, 'white');
		// Green for the top of the grass.
		linGrad.addColorStop(0.5, '#55dd00');
		// Fade to white at the bottom.
		linGrad.addColorStop(1, 'white');
		// Use the CanvasGradient object as the fill style.
		ctx.fillStyle = linGrad;
		// Finally, fill a rectangle the same size as the canvas.
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		  ctx.restore();
	};
	/*****************************************
	 * Call the functions to draw the Trees */
    function init () {

		drawSkyAndGrass(context);

		drawSecondTree(canvas.width*0.3, canvas.height, 50, 0);

		drawFirstTree(context, context.canvas.width*0.6, 600, -90, 9);

        drawThirdTree(context, 320, 470, 70, -Math.PI / 2, 8, 72);

    }

    init();

}(fractalsForest));

/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * Animated Gradient on Text - juulio.github.io
 */
var animatedGradientOnText = animatedGradientOnText || {};

(function (context) {

	var theCanvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d'),
        message = "HTML5 Canvas";


    /***************************************
	 * Begin Draw Screen Main function */

	 function drawScreen() {
		 //Background
		 context.fillStyle = "#000000";
		 context.fillRect(0, 0, theCanvas.width, theCanvas.height);

		 //Text
		 context.font =  "90px impact"
		 context.textAlign = "center";
		 context.textBaseline = "middle";

		 var metrics = context.measureText(message);
		 var textWidth = metrics.width;
		 var xPosition = (theCanvas.width/2);
		 var yPosition = (theCanvas.height/2);
		 var gradient = context.createLinearGradient( theCanvas.width/2,0, theCanvas.width/2,theCanvas.height);

		 for (var i=0; i < colorStops.length; i++) {  //￼Animated Gradients
			 var tempColorStop = colorStops[i],
			 	 tempColor = tempColorStop.color;
			 	 tempStopPercent = tempColorStop.stopPercent;

			 gradient.addColorStop(tempStopPercent,tempColor),
			 tempStopPercent += .015;

			 if (tempStopPercent > 1) {
				 tempStopPercent = 0;
			 }

			 tempColorStop.stopPercent = tempStopPercent;;
			 colorStops[i] = tempColorStop;
        }

		context.fillStyle    = gradient;
        context.fillText  ( message,  xPosition ,yPosition);
	}

	function gameLoop() {
		window.setTimeout(gameLoop, 20);
		drawScreen()
	}

	var colorStops = new Array(
		{color:"#FF0000", stopPercent:0},
		{color:"#FFFF00", stopPercent:.125},
		{color:"#00FF00", stopPercent:.375},
		{color:"#0000FF", stopPercent:.625},
		{color:"#FF00FF", stopPercent:.875},
		{color:"#FF0000", stopPercent:1});

	/*****************************************
	 * Init */
    function init () {
		gameLoop();
    }

    init();

}(animatedGradientOnText));

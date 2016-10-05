 /**
  * @author Julio Del Valle - Costa Rica
  * Animated Gradient on Text - juulio.github.io
  * juulio.github.io
  */

var animatedGradientOnText = animatedGradientOnText || {};

(function (context) {

	var canvasWidth = JUULIO.global.setRendererWidth(500);
	var canvasHeight = 150;

	var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, canvasHeight, '2d');
	var context = canvas.getContext('2d');
	var message = "Gradient on Text";
	var font = "60px impact";
	if (JUULIO.global.isMobile()){
		font = "30px Impact";
	}

	/**
	* Begin Draw Screen Main function */
	function drawScreen() {
		//Background
		context.fillStyle = "#000000";
		context.fillRect(0, 0, canvas.width, canvas.height);

		//Text
		context.font =  font;
		context.textAlign = "center";
		context.textBaseline = "middle";

		var metrics = context.measureText(message);
		var textWidth = metrics.width;
		var xPosition = (canvas.width/2);
		var yPosition = (canvas.height/2);
		var gradient = context.createLinearGradient( canvas.width/2,0, canvas.width/2,canvas.height);

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

	/**
	* Init */
	function init () {
	gameLoop();
	}

	init();

}(animatedGradientOnText));

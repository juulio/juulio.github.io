// SVG POC
// http://ops.tuanis.in/vRkEhX0UTB/Screen-Shot-2015-08-04-13-52-39.png

(function () {

    'use strict';


    /***
     * Global Variables
     */
    var vars = {
        canvas : {},
        context : {},
        canvas : document.getElementById( "canvas" ),
    	margenGingival : [2, 4, 2, 1, 6, 3, 1, 7, 2, 5, 6, 1],
    	linesBetweenDots : [0,0,
    						50, 75,
    						100, 20,
    						150, 4,
    						200, 20,
    						250, 2,
    						300, 20,
    						350, 1,
    						400, 6,
    						450, 20,
    						500, 3,
    						550, 20,
    						600, 1]
    };

   /***
    * Draws a dot, centered on x,y coordinates
    */
    function drawDot(x,y,r) {
        vars.context.beginPath();
        vars.context.arc(x, y, r, 0, 2*Math.PI, false);
        vars.context.lineWidth = 2;
        vars.context.strokeStyle = '#ff0000';
        vars.context.stroke();
    }

    /***
    * Draws a line
    */
    function drawLine(x1,y1,x2,y2) {

        vars.context.beginPath();
        vars.context.moveTo(x1,y1);
        vars.context.lineTo(x2,y2);
        vars.context.stroke();
    }

    /***
    * Draws background lines
    */
    function drawBackgroundLines(){
    	drawLine(20, 20, 600, 20);
    	drawLine(20, 40, 600, 40);
    	drawLine(20, 60, 600, 60);
    	drawLine(20, 80, 600, 80);
		drawLine(20, 100, 600, 100);
		drawLine(20, 120, 600, 120);
		drawLine(20, 140, 600, 140);
		drawLine(20, 160, 600, 160);
		drawLine(20, 180, 600, 180);
		drawLine(20, 200, 600, 200);
    }

    /***
    * Read data and draw dots
    */
    function drawDots(){
    	var i, x, y, r;

		for(i=1;i<vars.margenGingival.length;i+=2){
			x = i*50;
			y = vars.margenGingival[i]*20;
			r = 3;

    		drawDot(x, y, r);
    	}
    }

    /***
    * Draws lines between dots
    */
    function drawLinesBetweenDots(){
    	var i, x1, x2, y1, y2;

		for(i=0;i<vars.linesBetweenDots.length;i+=2){
			x1 = vars.linesBetweenDots[i],
			y1 = vars.linesBetweenDots[i+1],
			x2 = vars.linesBetweenDots[i+2],
			y2 = vars.linesBetweenDots[i+3];

			drawLine(x1, y1, x2, y2);
		}
    }

    function drawYaxis(){
		vars.context.fillText("9",0, 26);
		vars.context.fillText("8",0, 46);
		vars.context.fillText("7",0, 66);
		vars.context.fillText("6",0, 86);
		vars.context.fillText("5",0, 106);
		vars.context.fillText("4",0, 126);
		vars.context.fillText("3",0, 146);
		vars.context.fillText("2",0, 166);
		vars.context.fillText("1",0, 186);
    	vars.context.fillText("0",0, 206);
	}

    function initMainCanvas(){
    	vars.canvas = document.getElementById("canvas");
        vars.context = vars.canvas.getContext('2d');
		vars.context.font = "16px Arial";

    	drawBackgroundLines();
    	drawDots();
    	drawYaxis();
    	drawLinesBetweenDots();
    };

    function initHeaderCanvas() {
    	var headerCanvas = document.getElementById("headerCanvas"),
    		headerCanvasWidth = headerCanvas.width,
    		headerCanvasContext = headerCanvas.getContext('2d'),
    		movingDot = {
    			xpos : 20,
    			ypos : 40,
    			radius : 5
    		};

		// resize the canvas to fill browser window dynamically
		window.addEventListener('resize', resizeCanvas, false);

		function resizeCanvas() {
		        headerCanvas.width = window.innerWidth;
		        /**
		         * Your drawings need to be inside this function otherwise they will be reset when
		         * you resize the browser window and the canvas goes will be cleared.
		         */
		        // drawStuff();
		}

		resizeCanvas();

		// Animate the headerCanvas elements
		function animateHeaderCanvas() {
			headerCanvasContext.beginPath();
	        headerCanvasContext.arc(movingDot.xpos, movingDot.ypos, movingDot.radius, 0, 2*Math.PI, false);
	        headerCanvasContext.lineWidth = 2;
	        headerCanvasContext.strokeStyle = '#ff0000';
	        headerCanvasContext.stroke();

			movingDot.xpos++;
			window.requestAnimationFrame(animateHeaderCanvas);
		}

		animateHeaderCanvas();

    }

    function init(){
    	initHeaderCanvas();
    	initMainCanvas();
    }


    init();

}());

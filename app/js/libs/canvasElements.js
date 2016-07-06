/* Canvas frequently used functions- juulio.github.io
* Julio Del Valle - Costa Rica */

var canvasElements = {
    canvas : document.createElement("canvas"),
    context : '',

    /******************************************************
    * Adds the Canvas Element to the '.post-content' div */
    createCanvasElement : function(canvasContainer, canvasWidth, canvasHeight){
        canvasContainer = 'home';

        var divElement = document.getElementsByClassName(canvasContainer)[0];
        divElement.insertBefore(this.canvas, divElement.childNodes[0]);
        // document.getElementsByClassName(canvasContainer)[0].appendChild(this.canvas);
        document.body.style.margin = 0;

        this.context = this.canvas.getContext("2d");
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvas.style.display = 'block';
        this.canvas.style.margin = '0 auto';
    },

    /********************************************
    * Draws a dot, centered on x,y coordinates */
    drawDot : function(x, y, r, lineWidth, canvasContext) {
        canvasContext.beginPath();
        canvasContext.arc(x, y, r, 0, 2*Math.PI, false);
        canvasContext.lineWidth = lineWidth;
        canvasContext.stroke();
    },

    /****************************************
    * Draws a line from (x1,y1) to (x2,y2) */
    drawLine : function(x1, y1, x2, y2, canvasContext, color, lineWidth) {
        canvasContext.beginPath();
        canvasContext.moveTo(x1,y1);
        canvasContext.lineTo(x2,y2);
        canvasContext.closePath();
        canvasContext.lineWidth = lineWidth;
        canvasContext.strokeStyle = color;
        canvasContext.stroke();
    },

    /********************
    * Draws a triangle */
    drawTriangle : function(x, y, size, canvasContext) {
        var rotationAngle = this.getRandomInt(0,360);

        canvasContext.beginPath();
        canvasContext.rotate(rotationAngle*Math.PI/180);
        canvasContext.moveTo(x, y);
        canvasContext.lineTo(x, y+size);
        canvasContext.lineTo(x+size, y+size);
        canvasContext.closePath();
        canvasContext.stroke();
        canvasContext.rotate(-rotationAngle*Math.PI/180);
    },

    /******************************************************
    * Draws a tree leaf at (x,y) rotated at angle degrees*/
    drawLeaf: function(x, y, angle, scale, alpha) {

        this.context.save();
        this.context.translate(x, y);
        this.context.rotate(angle*Math.PI/180);// Convert degreess to radians
        this.context.beginPath();

        this.context.moveTo(0,0);

        this.context.lineTo(scale*0, scale*-1);
        this.context.lineTo(scale*2,scale*-3);
        this.context.lineTo(scale*4, scale*-1);
        this.context.lineTo(scale*6, scale*-3);
        this.context.lineTo(scale*8, scale*-1);
        this.context.lineTo(scale*10, scale*0);

        this.context.lineTo(scale*8, scale*1);
        this.context.lineTo(scale*6, scale*3);
        this.context.lineTo(scale*4, scale*1);
        this.context.lineTo(scale*2, scale*3);
        this.context.lineTo(scale*0, scale*1);
        this.context.lineTo(scale*0, scale*0);

        this.context.closePath();
        this.context.fillStyle = 'rgba(143,154,90,' + alpha + ')';
        this.context.strokeStyle = 'rgb(25, 66, 0)';
        this.context.fill();

        this.context.stroke();
        this.context.restore();
    },

    /****************************************************************************
    * Taken from Mozilla Ddeveloper Network
    * https://developer.mozilla.org/en-US/
    * Returns a random integer between min (inclusive) and max (inclusive) */
    getRandomInt : function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /****************************************************************************
     * Returns a random number between min (inclusive) and max (exclusive) */
    getRandomArbitrary : function(min, max) {
        return Math.random() * (max - min) + min;
    },

    /**************************************
    * Taken from the book Javascript Supercharged Graphics.
    * Takes a Degre value and returns Radians. */
    degToRad : function(deg) {
        return deg * (Math.PI/180);
    },

    /**************************************
    * Taken from the book Javascript Supercharged Graphics.
    * Takes a Radian value and returns Degrees. */
    radToDeg : function(rad) {
        return rad * (180/Math.PI);
    },

    /*******************************************
    * Returns Cos function from a given angle */
    cos : function(angle) {
        return Math.cos(this.degToRad(angle));
    },

    /*******************************************
    * Returns Sin function from a given angle */
    sin : function(angle) {
        return Math.sin(this.degToRad(angle));
    },

    /**************************************
    * Function that limits the frame rate */
    limitLoop : function (fn, fps) {

        // Use var then = Date.now(); if you
        // don't care about targetting < IE9
        var then = new Date().getTime();

        // custom fps, otherwise fallback to 60
        fps = fps || 60;
        var interval = 1000 / fps;

        return (function loop(time){
            requestAnimationFrame(loop);

            // again, Date.now() if it's available
            var now = new Date().getTime();
            var delta = now - then;

            if (delta > interval) {
                // Update time
                // now - (delta % interval) is an improvement over just
                // using then = now, which can end up lowering overall fps
                then = now - (delta % interval);

                // call the fn
                fn();
            }
        }(0));
    }

};
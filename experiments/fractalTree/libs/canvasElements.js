/***
* Draws a dot, centered on x,y coordinates
*/
function drawDot(x,y,r,color,lineWidth) {
    context.beginPath();
    context.arc(x, y, r, 0, 2*Math.PI, false);
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.stroke();
}

/***
* Draws a line
*/
function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

/** (Taken from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//ok c Taken from the book Javascript Supercharged Graphics.
// Degrees to radians.
degToRad = function(deg) {
    return deg * (Math.PI/180);
};
// Radians to degrees.
radToDeg = function(rad) {
    return rad * (180/Math.PI);
};

function cos (angle) {
    return Math.cos(deg_to_rad(angle));
}

function sin (angle) {
    return Math.sin(deg_to_rad(angle));
}

function deg_to_rad(angle){
    return angle*(Math.PI/180.0);
}

/**************************************
* Function that limits the frame rate */
var limitLoop = function (fn, fps) {

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
};

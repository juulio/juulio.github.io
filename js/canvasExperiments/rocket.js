/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * juulio.github.io
 */
var rocket = rocket || {};

(function (context) {

    /***
     * Init all required functions
     */
    function init () {

        var gameObjects = [],
            canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d');

        var vector2d = function (x, y) {
            var vec = {

              // x and y components of vector stored in vx,vy.
              vx: x,
              vy: y,

              // scale() method allows us to scale the vector either up or down.
              scale: function (scale) {
                  vec.vx *= scale;
                  vec.vy *= scale;
              },

              // add() method adds a vector.
              add: function (vec2) {
                  vec.vx += vec2.vx;
                  vec.vy += vec2.vy;
              },

              // sub() method subtracts a vector.
              sub: function (vec2) {
                  vec.vx -= vec2.vx;
                  vec.vy -= vec2.vy;
              },

              // negate() method points the vector in the opposite direction.
              negate: function () {
                  vec.vx = -vec.vx;
                  vec.vy = -vec.vy;
              },

              // length() method returns the length of the vector using Pythagoras.
              length: function () {
                  return Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
              },

              // A faster length calculation that returns the length squared.
              // Useful if all you want to know is that one vector is longer than another.
              lengthSquared: function () {
                  return vec.vx * vec.vx + vec.vy * vec.vy;
              },

              // normalize() method turns the vector into a unit length vector // pointing in the same direction.
              normalize: function () {
                  var len = Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
                  if (len) {
                      vec.vx /= len;
                      vec.vy /= len;
                  }

                  // As we have already calculated the length, it might as well be // returned, as it may be useful.
                  return len;
              },

              // Rotates the vector by an angle specified in radians.
              rotate: function (angle) {
                  var vx = vec.vx,
                      vy = vec.vy,
                      cosVal = Math.cos(angle),
                      sinVal = Math.sin(angle);

                  vec.vx = vx * cosVal - vy * sinVal;
                  vec.vy = vx * sinVal + vy * cosVal;
              },

              // toString() is a utility function for displaying the vector as text, // a useful debugging aid.
              toString: function () {
                  return '(' + vec.vx.toFixed(3) + ',' + vec.vy.toFixed(3) + ')'; }
              };

              return vec;
        };

        var gameObject = function (x, y, radius, mass) {
            var that = {
                x: x,
                y: y,
                vel: vector2d(0, 0),
                radius: radius,
                mass: mass,
                removeMe: false,
                move:function(){
                    that.x+=that.vel.vx;
                    that.y+=that.vel.vy;
                    if(that.vel.vx < 0 && that.x < -50){
                        that.x+=canvas.width+100;
                    }
                    else if (that.vel.vx > 0 && that.x > canvas.width + 50) {
                        that.x -= canvas.width + 100;
                    }
                    if (that.vel.vy < 0 && that.y < -50) {
                        that.y += canvas.height + 100;
                    }
                    else if (that.vel.vy > 0 && that.y > canvas.height + 50) {
                        that.y -= canvas.height + 100;
                    }
                },
                draw: function () {
                    return;
                }
            };
            return that;
        };

        var obstacle = function (x, y, radius) {
            var that = gameObject(x, y, radius, radius),
                randColor1 = Math.floor(Math.random()*0xffffff),
                randColor2 = ((randColor1 & 0xfefefe)>>1).toString(16);

            randColor1 = randColor1.toString(16);
            randColor1 = '#000000'.slice(0,7-randColor1.length) + randColor1;
            randColor2 = '#000000'.slice(0,7-randColor2.length) + randColor2;

            that.draw = function () {
                ctx.beginPath();
                var radgrad = ctx.createRadialGradient(that.x, that.y, radius,
                    (that.x - (radius / 4)), (that.y - (radius / 4)), (radius / 8) );
                    radgrad.addColorStop(0, randColor2);
                    radgrad.addColorStop(1, randColor1);
                    ctx.fillStyle = radgrad;
                    ctx.arc(that.x, that.y, that.radius, 0, Math.PI * 2, true); ctx.fill();
                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    ctx.closePath();
            };

            return that;
        };

        var bounce = function(ball1,ball2) {
            var colnAngle = Math.atan2(ball1.y - ball2.y, ball1.x - ball2.x),
                length1 = ball1.vel.length(),
                length2 = ball2.vel.length(),
                dirAngle1 = Math.atan2(ball1.vel.vy, ball1.vel.vx),
                dirAngle2 = Math.atan2(ball2.vel.vy, ball2.vel.vx),
                newVX1 = length1 * Math.cos(dirAngle1-colnAngle),
                newVX2 = length2 * Math.cos(dirAngle2-colnAngle);

            ball1.vel.vy = length1 * Math.sin(dirAngle1-colnAngle);
            ball2.vel.vy = length2 * Math.sin(dirAngle2-colnAngle);
            ball1.vel.vx =((ball1.mass-ball2.mass)*newVX1 + (2*ball2.mass)*newVX2) / (ball1.mass+ball2.mass);
            ball2.vel.vx =((ball2.mass-ball1.mass)*newVX2 + (2*ball1.mass)*newVX1) / (ball1.mass+ball2.mass);
            ball1.vel.rotate(colnAngle);
            ball2.vel.rotate(colnAngle);
        };

        var rocket = function (x, y) {
            // mx and my store the mouse position over the canvas.
            var mx = 0,
                my = 0,
                // Initial angle and thrust vector are zero.
                angle = 0,
                thrust = vector2d(0, 0),
                // gameObject is initialized with radius of 15 and mass of 15.
                that = gameObject(x, y, 15, 15),
                // Keep a reference to the parent (gameObject) move() method,
                // so it can be called in the overridden move() method later on.
                move = that.move;

            // Method to draw a rocket.
            // Output generated by AI->Canvas plug-in for Adobe Illustrator.
            that.draw = function () {
                ctx.save();
                ctx.translate(that.x, that.y);
                ctx.rotate(angle);
                ctx.scale(0.5, 0.5);
                ctx.beginPath();
                ctx.moveTo(-49.5, -16.0);
                ctx.lineTo(-48.9, 16.5);
                ctx.bezierCurveTo(-10.0, 19.9, 32.4, 31.4, 68.3, -1.6);
                ctx.bezierCurveTo(31.3, -33.5, -10.9, -21.8, -49.5, -16.0);
                ctx.closePath();
                ctx.fillStyle = "rgb(255, 255, 0)";
                ctx.fill();
                ctx.lineWidth = 6.0;
                ctx.lineJoin = "round";
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(40.1, 5.6);
                ctx.bezierCurveTo(36.1,5.7, 32.8, 2.5, 32.7, -1.4);
                ctx.bezierCurveTo(32.7,-5.3, 35.8, -8.6, 39.8, -8.7);
                ctx.bezierCurveTo(39.8,-8.7, 39.8, -8.7, 39.8, -8.7);
                ctx.bezierCurveTo(43.8,-8.7, 47.1, -5.6, 47.2, -1.6);
                ctx.bezierCurveTo(47.2,2.3, 44.1, 5.6, 40.1, 5.6);
                ctx.bezierCurveTo(40.1,5.6, 40.1, 5.6, 40.1, 5.6);
                ctx.closePath();
                ctx.fillStyle = "rgb(0,127, 127)";
                ctx.fill();
                ctx.lineWidth = 3.6;
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(19.7, 5.9);
                ctx.bezierCurveTo(15.7,6.0, 12.4, 2.9, 12.4, -1.1);
                ctx.bezierCurveTo(12.3,-5.0, 15.5, -8.3, 19.5, -8.3);
                ctx.bezierCurveTo(19.5,-8.3, 19.5, -8.3, 19.5, -8.3);
                ctx.bezierCurveTo(23.5,-8.4, 26.7, -5.3, 26.8, -1.3);
                ctx.bezierCurveTo(26.9,2.6, 23.7, 5.9, 19.7, 5.9);
                ctx.bezierCurveTo(19.7,5.9, 19.7, 5.9, 19.7, 5.9);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(-1.0, 6.3);
                ctx.bezierCurveTo(-4.9, 6.3, -8.2, 3.2, -8.3, -0.7);
                ctx.bezierCurveTo(-8.4, -4.7, -5.2, -7.9, -1.2, -8.0);
                ctx.bezierCurveTo(-1.2, -8.0, -1.2, -8.0, -1.2, -8.0);
                ctx.bezierCurveTo(2.8, -8.1, 6.1, -4.9, 6.2, -1.0);
                ctx.bezierCurveTo(6.2, 3.0, 3.0, 6.2, -0.9, 6.3);
                ctx.bezierCurveTo(-1.0, 6.3, -1.0, 6.3, -1.0, 6.3);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(-49.5, -16.0);
                ctx.lineTo(-68.3, -25.1);
                ctx.bezierCurveTo(-56.3, -31.0, -39.9, -37.8, -29.5, -35.3);
                ctx.bezierCurveTo(-22.7, -33.7, -14.5, -21.6, -14.5, -21.6);
                ctx.lineTo(-49.5, -16.0);
                ctx.closePath();
                ctx.fillStyle = "rgb(255, 0, 0)";
                ctx.fill();
                ctx.lineWidth = 6.0;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(-47.9, 16.4);
                ctx.lineTo(-66.4, 26.2);
                ctx.bezierCurveTo(-54.3, 31.7, -37.7, 38.0, -27.4, 35.2);
                ctx.bezierCurveTo(-20.6, 33.3, -12.8, 21.0, -12.8, 21.0);
                ctx.lineTo(-47.9, 16.4);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            };

            that.move = function () {
                var speed;
                // Calculate angle to mouse pointer.
                angle = Math.atan2(my - that.y, mx - that.x);
                // Add thrust to current velocity.
                that.vel.add(thrust);
                speed = that.vel.length();
                // If speed is > 5, then scale velocity back down.
                if (length > 5) {
                    that.vel.normalize();
                    that.vel.scale(5);
                }
                move();
            };

            // When mouse is held down, thrust.
            canvas.onmousedown = function (event) {
                // Create a vector from rocket postion in direction of mouse.
                thrust = vector2d(mx - that.x, my - that.y); thrust.normalize(); // Make it unit length.
                thrust.scale(0.1); // Scale it down.
            };

            // When mouse is released, cancel thrust.
            canvas.onmouseup = function (event) {
                thrust = vector2d(0, 0);
            };

            // Keep a note of the mouse position over the canvas.
            canvas.onmousemove = function (event) {
                var bb = canvas.getBoundingClientRect();
                mx = (event.clientX - bb.left);
                my = (event.clientY - bb.top);
            };

            return that;
        };

        var collideAll = function () {
            var vec = vector2d(0, 0),
            dist,
            gameObj1,
            gameObj2,
            c,
            i;

            // Check each object against every other object.
            for (var c = 0; c < gameObjects.length; c++) {
                gameObj1 = gameObjects[c];
                // The inner loop starts at one past the outer loop.
                // This ensures efficient one-way testing:
                // A against B, but not B against A.
                for (i = c + 1; i < gameObjects.length; i++) {
                    gameObj2 = gameObjects[i];
                    // Get the distance between the two objects.
                    vec.vx = gameObj2.x - gameObj1.x;
                    vec.vy = gameObj2.y - gameObj1.y;
                    dist = vec.length();
                    // If distance < sum of the two radii, then we have a collision.
                    if (dist < gameObj1.radius + gameObj2.radius) {
                        // Move objects apart so they are no longer intersecting, but flush against each other.
                        vec.normalize();
                        vec.scale(gameObj1.radius + gameObj2.radius - dist); vec.negate();
                        gameObj1.x += vec.vx;
                        gameObj1.y += vec.vy;
                        // Finally, bounce the two colliding objects.
                        bounce(gameObj1, gameObj2);
                    }
                }
            }
        };

        // Draws a spacey-looking background - a dark blue gradient fading to dark purple in the middle.
        var drawBackground = function (){
            ctx.save();
            // Create a CanvasGradient object in linGrad.
            // The gradient line is defined from the top to the bottom of the canvas.
            var linGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            // Start off with dark blue at the top.
            linGrad.addColorStop(0, '#000044');
            // Fade to purple in the middle.
            linGrad.addColorStop(0.5, '#220022');
            // Fade to dark blue at the bottom.
            linGrad.addColorStop(1, '#000044');
            // Use the CanvasGradient object as the fill style.
            ctx.fillStyle = linGrad;
            // Finally, fill a rectangle the same size as the canvas.
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
        };

        // Add rocket to the game objects list.
        gameObjects.push(rocket(50,canvas.height-150)); // Create a bunch of obstacles.
        for(var i=0;i<20;i++) {
            var radius = ((Math.random()*4)+1)*10;
            var x = Math.random() * (canvas.width-(radius*2)) +radius;
            var y = Math.random() * (canvas.height-(radius*2))+radius;

            gameObjects.push(obstacle(x,y,radius));
        }

        // This is the main loop that moves and draws everything.
        setInterval( function() {
            var gameObjectsFresh = [];
            drawBackground();
            // Here, we loop through all the object in the gameObjects[]
            // array. As each object is found, it is drawn, moved, and then
            // added to the gameObjectsFresh[] array, UNLESS it has its removeMe flag set.
            // gameObjectsFresh[] is then copied into gameObjects[], ready for the next frame.
            //gameObjects[] will now not contain any removed objects, and they will disappear as nothing references them anymore.
            for(var i=0;i<gameObjects.length;i++) {
                gameObjects[i].move(); gameObjects[i].draw();

                if ( gameObjects[i].removeMe === false) {
                    gameObjectsFresh.push(gameObjects[i]);
                }
            }
            collideAll();
            gameObjects = gameObjectsFresh;
        }, 30);

    }

    init();

}(rocket));

/**
 * @author Julio Del Valle - Costa Rica
 * Coursera - WebGL - Julio Del Valle - Costa Rica
 * August 2015
 */

(function () {

    'use strict';

    var gl,
        index = 0,
        points = [],
        bufferId = '',
        maxNumTriangles = 400,
        maxNumVertices = 3 * maxNumTriangles,
        isMousePressed = false,
        selectedColor = vec4(0.0, 0.0, 0.0, 1.0), // black
        canvas = document.getElementById( "gl-canvas" );

    // Get Mouse Position inside canvas
    function getMousePos(canvas, e) {

        // getBoundingClientRect is supported in most browsers and gives you the absolute geometry of an element
        var rect = canvas.getBoundingClientRect();

        // as mouse event coords are relative to document you need to subtract the element's left and top position:
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    };

    // Render all the elements
    function render() {

        gl.clear( gl.COLOR_BUFFER_BIT );
        gl.drawArrays( gl.LINE_STRIP, 0, index );

        window.requestAnimFrame(render);
    };

    // Load color picker library to show HEX and RGB on the screen
    function setupColorPicker(){
        var colorPicker = document.getElementById('colorPicker'),
            selectedColorDiv = document.getElementById('selectedColor'),
            selectedColorHex = document.getElementById('selectedColorHex'),
            Rdiv = document.getElementById('Rvalue'),
            Gdiv = document.getElementById('Gvalue'),
            Bdiv = document.getElementById('Bvalue');

        Beehive.Picker(colorPicker);

        colorPicker.addEventListener('click', function(e){
            var color = Beehive.getColorCode(e.target);

            if( color) {
                var r = parseInt(color.substr(1,2),16) / 256
                var g = parseInt(color.substr(3,2),16) / 256
                var b = parseInt(color.substr(5,2),16) / 256
                // console.log(r + ' ' + g + ' ' + b);
                selectedColor = vec4(r, g, b, 1.0);


                Rdiv.innerHTML = r;
                Gdiv.innerHTML = g;
                Bdiv.innerHTML = b;
                selectedColorHex.innerHTML = color,
                selectedColorDiv.style.backgroundColor = color;

            }
        });
    };

    function init(){
        // Setup WebGL
        gl = WebGLUtils.setupWebGL(canvas);
        if ( !gl ) { alert( "WebGL isn't available" ); }

        //  Configure WebGL
        gl.viewport( 0, 0, canvas.width, canvas.height );
        gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

        //  Load shaders and initialize attribute buffers

        var program = initShaders( gl, "vertex-shader", "fragment-shader" );
        gl.useProgram( program );

        // Load the data into the GPU

        bufferId = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
        gl.bufferData(gl.ARRAY_BUFFER, 8*maxNumVertices, gl.STATIC_DRAW);

        // Associate out shader variables with data buffers

        var vBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, 8*maxNumVertices, gl.STATIC_DRAW);

        var vPosition = gl.getAttribLocation( program, "vPosition" );
        gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( vPosition );

        var cBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, 16*maxNumVertices, gl.STATIC_DRAW);

        var vColor = gl.getAttribLocation( program, "vColor");
        gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vColor);

        // Setup mouse events on Canvas element
        canvas.onmousedown = function(e) {
            isMousePressed = true;
        },
        canvas.onmouseup = function(e) {
            isMousePressed = false;
        },
        canvas.onmousemove = function(e) {
            if(isMousePressed) {
                var pos = getMousePos(this, e), /// provide this canvas and event
                    x = pos.x,
                    y = pos.y,
                    x = 2*event.clientX/canvas.width-1,
                    y =  2*(canvas.height-event.clientY)/canvas.height-1;

                // var point = vec2(x, y);
                // points.push(point);
                // document.getElementById("x-data").innerHTML = x;
                // document.getElementById("y-data").innerHTML = y;

                gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
                var t = vec2(x,y)
                gl.bufferSubData(gl.ARRAY_BUFFER, 8*index, flatten(t));

                gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer);
                gl.bufferSubData(gl.ARRAY_BUFFER, 16*index, flatten(selectedColor));
                index++;

                //console.log('X ' + x);
                //console.log('Y ' + y);
            }
        };

        setupColorPicker();

        render();
    };

    init();

}());

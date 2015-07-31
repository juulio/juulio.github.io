'use strict';

var canvas,
    gl,
    bufferId,
    points = [],
    isMousePressed = false,
    maxNumTriangles = 400,
    maxNumVertices  = 3 * maxNumTriangles;

var colors = [

    vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
    vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
    vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
    vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
    vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
    vec4( 0.0, 1.0, 1.0, 1.0)   // cyan
];

function init() {
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
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

    // Associate out shader variables with our data buffer
    
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, 16*maxNumVertices, gl.STATIC_DRAW);

    var vColor = gl.getAttribLocation( program, "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    canvas.onmousedown = function(e) {
        isMousePressed = true;
    }

    canvas.onmouseup = function(e) {
        isMousePressed = false;
    }

    canvas.onmousemove = function(e) {
        if(isMousePressed) {
            var pos = getMousePos(this, e), /// provide this canvas and event
                x = pos.x,
                y = pos.y;

            var point = vec2(x, y);
            points.push(point);

            render();

            //console.log('X ' + x);
            //console.log('Y ' + y);
        }
    }
    
}

// Get Mouse Position inside canvas
function getMousePos(canvas, e) {

    // getBoundingClientRect is supported in most browsers and gives you the absolute geometry of an element
    var rect = canvas.getBoundingClientRect();

    // as mouse event coords are relative to document you need to subtract the element's left and top position:
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function triangle(a,b,c) {
    points.push(a,b,c);
}

window.onload = init;

function render() {
    var vertices  = [
        vec2(-0.8, -0.5),
        vec2(0, 0.8),
        vec2(0.8, -0.5)
    ];

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(points));
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.LINE_STRIP, 0, points.length );
}
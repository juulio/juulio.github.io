// Create the Canvas Element
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);

// Apply Basic styles to the Canvas Element
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 400;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

context.fillStyle = '#000';
context.lineWidth = 1;

/****************
 Create Arrays */
var branches = [],
    leaves = [],
    contadorDeHojas = 0,
    deg_to_rad = Math.PI / 180.0,
    depth = 4;

function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
}

function drawTree(x1, y1, angle, depth){
    var leafRadius = 7;

    if (depth !== 0){
        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 10.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 10.0);
        drawLine(x1, y1, x2, y2);

        drawTree(x2, y2, angle - 60, depth - 1);
        drawTree(x2, y2, angle + 60, depth - 1);
    }
    if(depth == 1) {
        context.beginPath();
        context.arc(x2, y2, leafRadius, 0, 2*Math.PI, false);
        context.closePath();
        context.stroke();
        contadorDeHojas++;
    }
}

// context.beginPath();
drawTree(250, 400, -90, depth);
// context.closePath();
// context.stroke();
console.log(contadorDeHojas);





/*
<?xml version="1.0"?><svg width="793.7007874015749" height="1122.5196850393702" xmlns="http://www.w3.org/2000/svg">
 <title>Leaf</title>
 <defs>
  <linearGradient id="svg_1">
   <stop offset="0" stop-opacity="0.996094" stop-color="#2b5600"/>
   <stop offset="1" stop-opacity="0.996094" stop-color="#7ad61d"/>
  </linearGradient>
 </defs>
 <g>
  <title>Layer 1</title>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12384" d="m-745.169861,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12382" d="m-745.878845,-533.23468l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12376" d="m-688.301819,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12374" d="m-688.048584,-533.23468l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12366" d="m-507.974731,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12364" d="m-509.139435,-533.23468l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12356" d="m-326.432312,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12354" d="m-326.634857,-533.23468l0,0"/>
  <g id="svg_3">
   <path fill="url(#svg_1)" fill-rule="evenodd" stroke-linecap="square" stroke-miterlimit="4" id="path1381" d="m694.420532,-37.643227c-61.996765,166.771538 -184.481934,288.61277 -276.113708,379.187935c-45.815857,45.287628 -86.129944,88.799438 -109.548584,141.750977c-23.418762,52.951569 -29.424347,115.111603 -7.633606,195.640717l17.440918,6.16748c0,0 -2.530914,-10.88147 -2.920776,-12.382385c22.609985,4.051636 109.717163,11.54541 195.730469,-62.23407c99.689819,-85.510925 194.65741,-266.899567 182.699036,-648.141869l0.346252,0.011215zm-14.905518,46.194337c3.103271,346.812171 -86.76001,512.055457 -178.048157,590.359656c-87.776611,75.29187 -173.440002,71.658691 -186.895081,70.622742c-19.343994,-75.178162 -13.432709,-131.459473 8.088501,-180.12088c22.047638,-49.851379 60.802216,-92.063354 106.313354,-137.049561c83.965088,-82.997101 190.451294,-175.536942 250.541382,-343.811957z"/>
   <path id="path1383" fill="url(#svg_1)" fill-rule="evenodd" stroke-width="1px" d="m3.787155,830.901733c236.270706,-22.406006 363.816879,-144.291931 566.02272,-530.595215c0,0 -267.450043,541.524963 -536.926788,502.347412l-29.095932,28.247803z"/>
  </g>
 </g>
</svg>
*/

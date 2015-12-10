/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 400;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

context.fillStyle = '#000';
context.lineWidth = 1;


/******************************
 Set the Tree's variables up */
var deg_to_rad = Math.PI / 180.0,
    depth = 10;

function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

function drawTree(x1, y1, angle, depth){
    var leafRadius = 7,
        branchColor = '',
        leafProbabilty = canvasElements.getRandomInt(0,1);


    if (depth !== 0){
        if(depth > 3){
            branchColor = 'rgb(100,69,19)'; //Brown
        }
        else {
            branchColor = 'rgb(143,154,90)'; //Green
        }

        context.strokeStyle = branchColor;

        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 6.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 7.0);
        context.lineWidth = depth*1.6;
        drawLine(x1, y1, x2, y2);

        drawTree(x2, y2, angle - canvasElements.getRandomInt(18,21), depth - 1);
        drawTree(x2, y2, angle + canvasElements.getRandomInt(19,23), depth - 1);
    }
    if(depth == 1 && leafProbabilty == 1) {
        drawLeaf(x2, y2, 40, 40, canvasElements.getRandomInt(0, 360));
    }
}

function drawLeaf(x, y, imageWidth, imageHeight, rotationAngle) {
    var imageObj = new Image();

    imageObj.onload = function() {
        context.translate(x, y);
        context.rotate(rotationAngle*Math.PI/180);
        context.drawImage(imageObj, (imageWidth/2) * (-1), (imageHeight/2) * (-1));
        context.rotate(-rotationAngle*Math.PI/180);
        context.translate(-x, -y);
    };

    imageObj.src = 'http://juulio.github.io/img/2015dic/leaf-02.png';
}
leafColor = 'rgba(0,0,0,0)';

var drawLeafFatJo = function(x, y, leafColor, scale, ctx) {
    ctx.save();
    ctx.translate(x,y);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+30.67,y);
    ctx.lineTo(x+30.67,y+31.436);
    ctx.lineTo(x,y+31.436);
    ctx.closePath();
    ctx.clip();
    ctx.translate(x,y);
    ctx.translate(x,y);
    ctx.scale(scale, scale);
    ctx.translate(x,y);
    ctx.strokeStyle = 'leafColor';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x+0.572, y);
    ctx.bezierCurveTo(2.066,1.194,6.106,5.615,7.704,6.722);
    ctx.bezierCurveTo(9.087,5.0851,9.368,2.0876,9.341,1.5832);
    ctx.bezierCurveTo(9.482,1.8323,10.841,4.543,12.299,4.5981);
    ctx.bezierCurveTo(13.757,4.6541,14.597,1.5618,14.664,1.3261);
    ctx.bezierCurveTo(15.045,2.1761,15.433,2.4931,16.117,2.4071);
    ctx.bezierCurveTo(16.823,2.3181,17.5022,2.1171,18.1122,1.729);
    ctx.bezierCurveTo(18.7793,1.2858,19.196,0.7529,19.6163,0.07785);
    ctx.bezierCurveTo(19.5083,0.44584,19.4273,0.7339,19.3332,1.1048);
    ctx.bezierCurveTo(19.0034,2.4057,18.6543,3.7021,18.3663,5.0125);
    ctx.bezierCurveTo(18.1743,5.8881,19.0685,6.884,19.9623,6.7681);
    ctx.bezierCurveTo(21.0275,6.6294,22.0964,6.4521,23.1295,6.1641);
    ctx.bezierCurveTo(23.644,6.0211,24.074,5.594,24.4145,5.3751);
    ctx.bezierCurveTo(24.2594,5.6711,23.9985,6.0925,23.8196,6.5451);
    ctx.bezierCurveTo(23.6965,6.8541,23.636,7.211,23.6396,7.5431);
    ctx.bezierCurveTo(23.6596,8.3341,23.9247,8.6261,24.6897,8.778);
    ctx.bezierCurveTo(25.0696,8.8541,25.4586,8.89,25.8546,8.945);
    ctx.bezierCurveTo(25.8516,9.068,25.8328,9.256,25.8467,9.441);
    ctx.bezierCurveTo(25.8911,10.028,26.2127,10.445,26.7786,10.59);
    ctx.bezierCurveTo(27.5625,10.79,28.3486,10.999,29.1464,11.12);
    ctx.bezierCurveTo(29.6216,11.190,30.1216,11.100,30.6216,11.0828);
    ctx.bezierCurveTo(30.476,11.168,30.3057,11.286,30.1227,11.360);
    ctx.bezierCurveTo(29.0557,11.796,27.9841,12.2178,26.9156,12.649);
    ctx.bezierCurveTo(26.4397,12.841,26.1076,13.197,25.8177,13.6088);
    ctx.bezierCurveTo(25.5037,14.0548,25.5421,14.482,25.9096,14.9818);
    ctx.bezierCurveTo(25.6656,14.8688,25.5056,14.7918,25.3437,14.7188);
    ctx.bezierCurveTo(24.0237,14.1278,22.7797,14.3127,21.5828,15.0717);
    ctx.bezierCurveTo(21.3667,15.2088,21.4961,15.5838,21.5131,15.6017);
    ctx.bezierCurveTo(22.3631,16.465,23.1361,17.418,24.1851,18.0716);
    ctx.bezierCurveTo(24.291,18.1367,24.3938,18.2037,24.5281,18.2914);
    ctx.bezierCurveTo(24.151,18.6834,24.2978,19.0403,24.5291,19.4063);
    ctx.bezierCurveTo(25.1071,20.3182,25.8721,20.9164,27.0251,20.9812);
    ctx.bezierCurveTo(26.8651,21.056,26.7021,21.1243,26.5481,21.2083);
    ctx.bezierCurveTo(25.9181,21.553,25.3891,21.9974,25.2541,22.7474);
    ctx.bezierCurveTo(25.221,22.9353,25.3041,23.1503,25.3588,23.3475);
    ctx.bezierCurveTo(25.4137,23.5516,25.5768,23.7564,25.5538,23.9454);
    ctx.bezierCurveTo(25.4321,24.9454,25.8987,25.7015,26.4868,26.4285);
    ctx.bezierCurveTo(26.7296,26.7286,26.9216,27.0704,27.0756,27.4466);
    ctx.bezierCurveTo(26.5745,27.0746,26.085,26.6917,25.577,26.3344);
    ctx.bezierCurveTo(25.2816,26.1314,24.9687,25.9605,24.6577,25.7922);
    ctx.bezierCurveTo(24.3147,25.6062,23.9875,25.6623,23.6468,25.8472);
    ctx.bezierCurveTo(23.5146,25.91,23.2978,25.902,23.1427,25.852);
    ctx.bezierCurveTo(22.8927,25.7723,22.6528,25.646,22.4235,25.514);
    ctx.bezierCurveTo(21.8366,25.175,21.2835,25.336,20.7797,25.665);
    ctx.bezierCurveTo(20.5798,25.795,20.4318,26.058,20.3441,26.291);
    ctx.bezierCurveTo(20.241,26.5682,20.2291,26.872,20.1427,27.187);
    ctx.bezierCurveTo(19.9465,26.1013,19.3121,25.2753,18.6125,24.488);
    ctx.bezierCurveTo(18.4695,24.327,15.9045,21.500,15.3716,21.244);
    ctx.bezierCurveTo(14.445,22.68,14.7686,24.1032,15.2925,25.583);
    ctx.bezierCurveTo(14.8445,25.322,14.4365,25.442,14.1165,25.78887);
    ctx.bezierCurveTo(13.8225,26.10888,13.5035,26.44287,13.335,26.830);
    ctx.bezierCurveTo(12.8646,27.88187,12.6395,28.996,12.6176,30.15588);
    ctx.bezierCurveTo(12.6097,30.58487,12.55,31.010,12.4376,31.438);
    ctx.bezierCurveTo(12.3996,31.435,12.3627,31.43188,12.3247,31.427);
    ctx.bezierCurveTo(12.2577,30.981,12.2417,30.520,12.117,30.094);
    ctx.bezierCurveTo(11.9186,29.4733,11.7236,28.826,11.3817,28.2843);
    ctx.bezierCurveTo(11.0598,27.7764,10.4877,27.521,9.7966,27.556);
    ctx.bezierCurveTo(9.7477,27.2753,9.6846,26.96,9.6396,26.660);
    ctx.bezierCurveTo(9.4877,25.592,8.5596,25.1672,7.6916,25.2662);
    ctx.bezierCurveTo(7.1766,25.3253,6.7066,25.823,6.2316,26.1454);
    ctx.bezierCurveTo(6.0796,26.2485,5.9756,26.4225,5.8456,26.5674);
    ctx.bezierCurveTo(5.8246,26.5433,5.7996,26.5234,5.8036,26.5155);
    ctx.bezierCurveTo(6.4476,25.0584,6.5186,23.5226,6.4446,21.9635);
    ctx.bezierCurveTo(6.4247,21.5584,6.4256,21.1506,6.3927,20.7474);
    ctx.bezierCurveTo(6.3416,20.102,5.7627,19.4733,5.157,19.3765);
    ctx.bezierCurveTo(5.02265,19.3555,4.8777,19.3867,4.7486,19.4225);
    ctx.bezierCurveTo(4.35265,19.5324,3.96664,19.7176,3.56463,19.7636);
    ctx.bezierCurveTo(3.02363,19.8257,2.53366,19.9756,2.056,20.215);
    ctx.bezierCurveTo(1.4636,20.5155,0.8516,20.7617,0.2486,21.0256);
    ctx.bezierCurveTo(0.1846,21.0535,0.108598,21.0565,0.0045999,21.0155);
    ctx.bezierCurveTo(0.1866,20.8784,0.3796,20.7523,0.5466,20.54);
    ctx.bezierCurveTo(0.7776,20.3863,1.0426,20.1834,1.1996,19.9206);
    ctx.bezierCurveTo(1.796,18.9326,2.0946,17.856,1.99262,16.6954);
    ctx.bezierCurveTo(1.9662,16.3216,1.75262,16.0964,1.39261,16.0023);
    ctx.bezierCurveTo(1.262,15.9513,1.00961,15.8924,0.76261,15.813);
    ctx.bezierCurveTo(2.3686,15.4244,2.8766,13.9183,3.51262,12.6254);
    ctx.bezierCurveTo(4.6496,10.9724,1.77761,9.5334,1.67963,9.444);
    ctx.bezierCurveTo(5.99365,9.1964,6.6626,7.554,6.67965,7.5214);
    ctx.bezierCurveTo(6.365,7.257,1.035,1.462,0,0.647);
    ctx.lineTo(0.572,0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
};

// drawLeafFatJo(0, 0, 'rgba(0,0,0,0)', 1, context);
drawTree(250, 400, -90, depth);

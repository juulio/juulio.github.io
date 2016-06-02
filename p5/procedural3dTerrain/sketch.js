var cols, rows;
var scl = 20;
var w = 1800;
var h = 1600;

var flying = 0;

var terrain = [];
// var aux = [];

function setup(){
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  // terrain = new float[cols][rows];
  // terrain = new Array[cols][rows];
}

function draw(){
  background(0);
  fill(255);
  // noFill();

  flying -= 0.01;
  var yoff = flying;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;

    terrain[y] = [];

    for (var x = 0; x < cols; x++) {
      terrain[y][x] = map(noise(xoff, yoff), 0, 1, -90, 90);
      //aux.push(map(noise(xoff, yoff), 0, 1, -90, 90));
      xoff += 0.1;
    }
    yoff += 0.1;
    // terrain.push(aux);
  }

  translate(width/2, height/2+50);
  rotateX(PI/3);

  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {

      // vertex(x*scl, y*scl, terrain[x][y]);
      // vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      vertex(x*scl, y*scl, terrain[y][x]);
      vertex(x*scl, (y+1)*scl, terrain[y][x+1]);
    }
    endShape();
  }
}

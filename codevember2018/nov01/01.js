function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(255);
  normalMaterial();

  push();
  rotateX(frameCount * 0.01);
  torus(70, 20);
  pop();

  push();
  translate(140, 0, 0);
  rotateX(frameCount * -0.01);

  torus(70, 20);
  pop();
}
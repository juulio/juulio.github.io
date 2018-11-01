function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(255);

  normalMaterial();

  // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  torus(70, 20);
  push();
  translate(100, 0, 0);
  rotateX(25);

  torus(70, 20);
  pop();


}

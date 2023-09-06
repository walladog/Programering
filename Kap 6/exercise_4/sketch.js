let x, y, r;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  r = 100;
  background(220);
  fill(random(0, 255), random(0, 255), random(0, 255));
  circle(x, y, r);
}

function circlepress() {
  if (dist(x, y, mouseX, mouseY) < r / 2) {
    console.log("CIRCLE IS FUCKING PRESSED!");
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    circlepress();
  }
}

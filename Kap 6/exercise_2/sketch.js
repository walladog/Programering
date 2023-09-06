function setup() {
  createCanvas(400, 400);
  background(220);
}

function circlussy(x, y, r) {
  fill(255, 255, 0);
  circle(x, y, r * 2);
}

function draw() {
  circlussy(50, 50, 20);
}

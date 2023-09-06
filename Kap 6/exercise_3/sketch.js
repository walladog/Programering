function setup() {
  createCanvas(400, 400);
  background(220);

  overlapussy(
    random(0, width),
    random(0, height),
    random(20, 100),
    random(0, width),
    random(0, height),
    random(20, 100)
  );
}

function circlussy1(x, y, r) {
  fill(255, 0, 0);
  circle(x, y, r);
}

function circlussy2(x, y, r) {
  fill(0, 0, 255);
  circle(x, y, r);
}

function overlapussy(x, y, r, x1, y1, r1) {
  circlussy2(x, y, r * 2);
  circlussy1(x1, y1, r1 * 2);
  if (abs(x1 - x) - r - r1 <= 0 && abs(y1 - y) - r - r1 <= 0) {
    console.log("ja");
  } else {
    console.log("nej");
  }
}

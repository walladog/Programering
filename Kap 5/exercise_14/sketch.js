//translate er bare at man laver et nyt (0,0)
function setup() {
  createCanvas(720, 400);
  background(200);
  translate(100, 300);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 4);
  }
}

//her bestemmes vinklen, x og y
let angle = 0;
let x = 50;
let y = 50;

//her laves et canvas.
//angleMode bliver sat til grader og ikke radianer.
//Der bliver fyldt med pink
//ingen stroke
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink");
  noStroke();
}
//baggrunden bliver farvet gul
//idfk
function draw() {
  background("yellow");
  translate(x, y);
  rotate(angle);
  ellipseMode(CENTER);

  x = x + 2;
  angle = angle + 4;
  for (var row = 3; row <= width; row = row + 50) {
    for (var col = 3; col <= height; col = col + 50) {
      ellipse(row, col, 20, 20);
    }
  }
}

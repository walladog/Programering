function setup() {
  createCanvas(800, 800);
  background(130);
}
let x = 7;
let y = 7;
function draw() {
  background(130);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      line(x + i * 10, 0, x + i * 10, height);
      line(0, y + j * 10, width, y + j * 10);
    }
  }
  x++;
  y += 2;
}

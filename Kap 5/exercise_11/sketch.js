let t = 8;

function setup() {
  createCanvas(100 * t, 100 * t);
  background(255);

  for (let i = 0; i < t; i++) {
    for (let j = 0; j < t; j++) {
      if ((i + j) % 2 != 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(i * 100, j * 100, 100, 100);
    }
  }
}

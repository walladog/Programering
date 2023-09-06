function setup() {
  createCanvas(320, 320);
  background(100);
  y = 25;
  x = 25;

  for (let i = 0; i < 5; i++) {
    y += 50;
    x = 50;
    for (let ø = 0; ø < 5; ø++) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      ellipse(x, y, 50, 50);

      x += 50;
    }
  }
}

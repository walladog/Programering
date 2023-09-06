function setup() {
  createCanvas(800, 800);
  background(150, 150, 150);
  let pointcolor = [
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
    [random(0, 255), random(0, 255), random(0, 255)],
  ];
  for (let i = 0; i < pointcolor.length; i++) {
    circle(random(50, 750), random(50, 750), 20);
    fill(pointcolor[i]);
  }
}

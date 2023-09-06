function setup() {
  createCanvas(800, 800);
  background(150, 150, 150);
  let cubecolor = [
    [255, 255, 0],
    [0, 255, 0],
    [64, 224, 208],
    [0, 0, 255],
    [0, 0, 139],
    [128, 0, 128],
    [255, 192, 203],
    [221, 160, 221],
    [255, 0, 0],
    [255, 165, 0],
  ];
  for (let i = 0; i < cubecolor.length; i++) {
    rect(random(50, 750), random(50, 750), 50, 50);
    fill(cubecolor[i]);
  }
}

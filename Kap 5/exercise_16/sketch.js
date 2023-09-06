function setup() {
  createCanvas(500, 500);
  background(220);
  var navne = [
    "Artem",
    "Gevin",
    "August",
    "Lucas",
    "Sebusstian",
    "Tim",
    "Alexander",
    "Mick",
    "Vitus",
    "Aske",
  ];
  for (i = 0; i < 10; i++) {
    textSize(navne[i].length * 5);
    text(navne[i], random(100, width - 100), random(100, height - 100));
  }
}

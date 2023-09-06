function setup() {
  createCanvas(400, 400);
  let sum = 0;
  for (i = 0; i < 101; i++) {
    sum += i;
  }
  print(sum);
}

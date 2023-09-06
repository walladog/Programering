let r;

let human = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = 10;

  for (let i = 0; i < 200; i++) {
    r1 = random(-5, 5);
    r2 = random(-5, 5);
    human.push(new Human(random(0, width), random(0, height), r, r1, r2));
  }
}

class Human {
  constructor(x, y, r, r1, r2) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.r1 = r1;
    this.r2 = r2;
    this.infected = false;
  }

  show() {
    if (this.infected) {
      fill("red");
    } else {
      fill(255);
    }
    circle(this.x, this.y, r);
  }

  showtext(i) {
    text(i, this.x, this.y);
  }

  border() {
    if (this.x + this.r / 2 >= width) {
      this.r1 = -this.r1;
      this.x--;
    } else if (this.x - this.r / 2 <= 0) {
      this.r1 = -this.r1;
      this.x++;
    } else if (this.y - this.r / 2 <= 0) {
      this.r2 = -this.r2;
      this.y++;
    } else if (this.y + this.r / 2 >= height) {
      this.r2 = -this.r2;
      this.y--;
    }
  }

  update() {
    this.x += this.r1;
    this.y += this.r2;
  }

  collision(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (dist(this.x, this.y, other.x, other.y) < this.r) {
      return true;
    } else {
      return false;
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < human.length; i++) {
    //show();
    human[i].border();
    human[i].show();
    human[i].update();
    human[i].showtext(i);
    human[99].infected = true;

    for (let j = i + 1; j < human.length; j++) {
      if (human[i].collision(human[j])) {
        print("true");
        human[i].r1 = human[j].r1;
        human[i].r2 = human[j].r2;
        human[j].r1 = human[i].r1;
        human[j].r2 = human[i].r2;

        if (human[i].infected || human[j].infected) {
          if (human[i].infected && human[j].infected == false) {
            human[j].infected = true;
          } else if (human[j].infected && human[i].infected == false) {
            human[i].infected = true;
          }

          if (human[i].x < human[j].x) {
            human[i].x--;
          }
          if (human[i].x > human[j].x) {
            human[i].x++;
          }
          if (human[i].y < human[j].y) {
            human[i].y--;
          }
          if (human[i].y > human[j].y) {
            human[i].y++;
          }
        }
      }
    }
  }
}

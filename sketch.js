function setup() {
  createCanvas(400, 400);
}
let farmer;
let apples = [];

function setup() {
  createCanvas(600, 400);
  farmer = createVector(width / 2, height - 40);
  for (let i = 0; i < 5; i++) {
    apples.push(createApple());
  }
}

function draw() {
  background(100, 200, 100); // cor de grama
  fill(139, 69, 19);
  rect(farmer.x, farmer.y, 40, 40); // o fazendeiro

  for (let i = 0; i < apples.length; i++) {
    let a = apples[i];
    fill(255, 0, 0);
    ellipse(a.x, a.y, 20, 20);
    a.y += 2;

    // se colidir com o fazendeiro
    if (dist(farmer.x + 20, farmer.y + 20, a.x, a.y) < 30) {
      apples[i] = createApple();
    }

    // se cair fora da tela, reseta
    if (a.y > height) {
      apples[i] = createApple();
    }
  }

  handleInput();
}

function handleInput() {
  if (keyIsDown(LEFT_ARROW)) farmer.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) farmer.x += 5;
  farmer.x = constrain(farmer.x, 0, width - 40);
}

function createApple() {
  return createVector(random(20, width - 20), -random(100, 500));
}

function draw() {
  background(220);
}

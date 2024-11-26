let downImg, upImg, leftImg, rightImg;

function preload() {
  downImg = loadImage('fullfront.png');
  //upImg = loadImage('up.png');
  leftImg = loadImage('leftside.png');
  //rightImg = loadImage('right.png');
}
let player = { x: 300, y: 300, speed: 3, currentImg: null };

function setup() {
  createCanvas(800, 600);
  player.currentImg = downImg; // Default direction
}

function draw() {
  background(220);

  // Display the current image
  image(player.currentImg, player.x, player.y);

  handleMovement();
}

function handleMovement() {
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
    player.currentImg = leftImg;
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
    player.currentImg = rightImg;
  } else if (keyIsDown(UP_ARROW)) {
    player.y -= player.speed;
    player.currentImg = upImg;
  } else if (keyIsDown(DOWN_ARROW)) {
    player.y += player.speed;
    player.currentImg = downImg;
  }
}
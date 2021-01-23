var fairy;
var star;
var animation;
var starImg;
var sound, back, backImg;


function preload(){
  animation = loadAnimation("fairy1.png", "fairy2.png");
   //preload the images her
   starImg = loadImage("star.png");
   sound = loadSound("JoyMusic.mp3");
   backImg = loadImage("star.png");
}

function setup() {
  createCanvas(800, 750);
  sound.loop();
  fairy = createSprite(400,385);
  fairy.scale = 0.2;
  fairy.addAnimation("fairy",animation);
  back = createSprite(400,375,800,475);
  back.addImage(backImg);
  back.depth = -10;
  star = createSprite(500,50);
  star.scale = 0.1;
  star.addImage(starImg);
}


function draw() {
  background("black");

  if(keyCode === DOWN_ARROW){
    star.velocityY = 2;
  }
  if(star.y > 375){
    star.velocityY = 0;
    sound.stop();
  }
  movement();
  drawSprites();
}
function movement(){
  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x-2;
  }
  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x+2;
  }
}
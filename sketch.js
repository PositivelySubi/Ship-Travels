var sea, seaImage;
function preload(){
seaImage = loadImage ("sea.png");
shipAnimation = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite (400,200);
  sea.addImage (seaImage);
  sea.scale = 0.3;
  sea.velocityX = -2;
  ship = createSprite (200,250,50,50);
  ship.addAnimation("moving ship",shipAnimation);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  if (sea.x<0){
    sea.x = sea.width/8
  }
drawSprites();
}
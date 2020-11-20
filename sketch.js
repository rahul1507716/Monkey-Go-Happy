
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  score = 0;
  
}


function draw() {
 background("white");
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  spawnObstacles();
  spawnBanana();
  
  drawSprites();
  
  fill("blue");
  text("Score: ", 220,20);
  text(score,255,20);
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -4;
   obstacle.addImage(obstacleImage);               
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}

function spawnBanana(){
if(frameCount % 80 === 0){
 var banana = createSprite(400,Math.round(random(100,200)))
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -4;
     banana.lifetime = 100;
     FoodGroup.add(banana);
 }
}


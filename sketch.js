var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
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
  console.log(ground.x)
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
  background("white");
  
  food();
  obstacles();
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  } 
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0) {
    banana = createSprite(400,300,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 134;
    FoodGroup.add(banana);
  }
}

function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,335,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -6;    
  obstacle.scale = 0.1;
  obstacle.lifetime = 300;
  obstaclesGroup.add(obstacle);
 }
}
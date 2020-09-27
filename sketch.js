
var monkey , monkey_running
var banana ,bananaImage, stone, stoneImage
var fruitsGroup, obstacleGroup
var survivalTime=0;
var ground
var PLAY
var END
var gameState=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  
  monkey=createSprite(200,328,20,20)
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2
  
  ground=createSprite(200,390,1500,20)
  ground.velocityX=-5
  ground.x = ground.width/2
  
  
  
  fruitsGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
  background("black")
  drawSprites();
  
  //if(gameState === PLAY){
   
   // }
     if(keyDown("space")){
       monkey.velocityY = -10;
      
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    
  }
    
    
  
   monkey.velocityY = monkey.velocityY + 0.8
      
         
  fruits();
  obstacles();
      
  if(ground.x<0){
    ground.x = ground.width/2 
  }
  
  
    //stroke("black")
    textSize(9);
    fill("black");
     survivalTime=Math.ceil(frameCount/frameRate())
   text("survivalTime: "+ survivalTime, 100,50);
    
    monkey.collide(ground);
  
}
function fruits(){
if (frameCount % 80 === 0){
  banana=createSprite(200,200,50,10)
  banana.y=Math.round(random(220,280))
  banana.addImage(bananaImage)
  banana.velocityX=-5
  banana.lifetime=100
  banana.scale=0.1
  
  fruitsGroup.add(banana)
}
}

function obstacles(){
 if (frameCount % 100 === 0){
 stone=createSprite(580,353,20,20)
   stone.addImage(stoneImage)
   stone.lifetime=100
   stone.scale=0.2
   stone.velocityX=-5
   
   obstaclesGroup.add(stone)
 }
}
function reset(){
  
}
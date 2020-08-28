var backGroundImage,backGround;
var obstacleImage,obstacleGroup,obstacle;
var bananaImage,bananaGroup,banana;
var ground;
var player_running,player
var score;

function preload()
{
  
  backGroundImage = loadImage("jungle.png");
  
  obstacleImage = loadImage("stone.png");
  
  bananaImage = loadImage("banana.png");
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
}

function setup() {
  createCanvas(400, 400);
  
  backGround = createSprite(0,200,400,400);
  backGround.addImage("BackGround",backGroundImage);
  backGround.velocityX = -2;
  backGround.x = backGround.width/2;
  
  player = createSprite(30,360,40,40);
  player.addAnimation("running",player_running);
  
 ground = createSprite(200,390,800,10);
 ground.velocityX = -4;
 ground.x = ground.width/2;
 ground.visible = false; 
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}

function draw() {
  background(220);
  
  if(backGround.x < 0)
  {
     backGround.x = backGround.width/2;
  }
  
  if(ground.x<0)
  {
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  Banana();
  Obstacle();
  drawSprites();
}


  function Banana ()
{
  if(frameCount % 80 === 0)
  {
    banana = createSprite(400,230,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.y = random(120,200);
    banana.lifetime = 100;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
  }
}

function Obstacle ()
{
  if(frameCount % 300 === 0)
  {
    obstacle = createSprite(400,380,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
  
}

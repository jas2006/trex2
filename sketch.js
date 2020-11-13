var bullet , wall , damage ;
var speed , weight ,wallLeftEdge; 
var thickness , bulletRightEdge;
var bullet1 , wall1, ;
var speed1 , weight1 ,wallLeftEdge1; 
var thickness1 , bulletRightEdge1;
function setup() {
  createCanvas(1600,400);
  speed = random(5,8);
  weight = random(50,90);
  bullet = createSprite(50,150,50,50);
  bullet.velocityX  = speed ;
  bullet.shapeColor = "yellow";
  wall = createSprite(1200,80,thickness,400);
  wall.shapeColor = "white";
  thickness = random(20,30);
  damage = 0.5*speed*weight*speed/thickness*thickness*thickness

  speed1 = random(5,8);
  weight1 = random(60,100);
  bullet1 = createSprite(50,150,50,50);
  bullet1.velocityX  = speed ;
  bullet1.shapeColor = "yellow";
  wall1 = createSprite(1200,200,thickness,400);
  wall1.shapeColor = "white";
  thickness1 = random(10,20);
  damage = 0.5*speed1*weight1*speed1/thickness1*thickness1*thickness1;
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  if(damage<10){
    wall.shapeColor = "green";
  }
  if(damage>10){
    wall.shapeColor = "red";
  }
  }
  if(hasCollided(bullet1,wall1)){
    bullet.velocityX = 0;
    if(damage<10){
      wall1.shapeColor = "green";
    }
    if(damage>10){
      wall1.shapeColor = "red";
    }
    }
   drawSprites();
}
function hasCollided (){
  bulletRightEdge = bullet.x + bullet.width ;
  wallLeftEdge  = wall.x ;
  if(bulletRightEdge >= wallLeftEdge){
  return true;
  }
 return false ;
}
function hasCollided1 (){
  bulletRightEdge1 = bullet1.x + bullet1.width ;
  wallLeftEdge1  = wall1.x ;
  if(bulletRightEdge1 >= wallLeftEdge1){
  return true;
  }
 return false ;
}
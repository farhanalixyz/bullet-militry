var thickness,wall
var bullet,speed,weight
function setup() {
  createCanvas(1600,400);
  bullet1=createSprite(50, 80, 20, 20);
  bullet1.shapeColor="white";
  bullet1.velocityX=speed;
  bullet2=createSprite(50, 160, 20, 20);
  bullet2.shapeColor="red";
  bullet2.velocityX=speed;
  bullet3=createSprite(50, 240, 20, 20);
  bullet3.shapeColor="blue";
  bullet3.velocityX=speed;
  bullet4=createSprite(50, 320, 20, 20);
  bullet4.shapeColor="yellow";
  bullet4.velocityX=speed;
  wall=createSprite(1200,200,1700,height/2);
  wall.shapeColor="white";
  wall=createSprite(1200,120,1700,height/2);
  wall.shapeColor="white";
  wall=createSprite(1200,40,1700,height/2);
  wall.shapeColor="white";
  wall=createSprite(750,280,1700,height/2);
  wall.shapeColor="white";
  wall=createSprite(750,360,1700,height/2);
  wall.shapeColor="white";
  thickness=random(22,83);
  speed=random(55,90);
  weight=random(400,1500)
  fence=createSprite(1500,80,10,40);
  fence.shapeColor="grey";
  fence=createSprite(1500,160,10,40);
  fence.shapeColor="grey";
  fence=createSprite(1500,240,10,40);
  fence.shapeColor="grey";
  fence=createSprite(1500,320,10,40);
  fence.shapeColor="grey";
}
function draw() {
  background(0);  
  drawSprites();
  if(wall.x-bullet1.x<(bullet1.width+wall.width)/2)
  {
    bullet1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      bullet1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet1.shapeColor=color(0,255,0);
    }
  }
}
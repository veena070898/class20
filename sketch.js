var car;
var wall;

function setup() {
  createCanvas(800,400);

  car=createSprite(400,200,50,50);
  wall=createSprite(200,100,20,100);

  car.shapeColor="blue";
  wall.shapeColor="blue";
}

function draw() {
  background(255);
  car.x=World.mouseX;
  car.y=World.mouseY; 
  
  console.log(car.x-wall.x);

  if(car.x-wall.x<35 && wall.x-car.x<35){
    car.shapeColor="red";
    wall.shapeColor="red";
  }
  else{
    car.shapeColor="blue";
  wall.shapeColor="blue";
  }

  drawSprites();
}
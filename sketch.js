var path,boy,leftBoundary,rightBoundary;
var pathImage,boyImage;

function preload(){
  //imágenes precargadas
  pathImage=loadImage("path.png");
  boyImage=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  //crea aquí los sprite
  path=createSprite(200,200);
  path=addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2
  
  boy=createSprite(180,340,30,30);
  boy=addImage("Jakerunning",boyImage);
  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;
  
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=4;
  boy.x=World.mouseX;
  edges=createEdgeSprite()
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  if (path.y>400){
  path.y=height/2
  
  }
  

}

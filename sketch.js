var ship ,ship1;
var sea ,sea1;
function preload(){
  ship1=loadAnimation("ship-1.png","ship-2.png")
  sea1.loadAnimation("sea.png")
}

function setup(){
  createcanvas(600,500);

  sea = createsprite(600,300);
  sea.addAnimation("running",sea1)
  sea.scale=0.5;
  sea.velocityX=-1;



  ship = createsprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges = createEdgeSprites();


  ship.scale=0.25;
  ship.x=90;
  ship.y=300;
}

function draw(){
  background("blue");
  if(keydown("enter")){
    ship.velocityX = 5;
  }
  if(keydown("Left")){
    ship.velocityX=-5;
  }
  if(sea.x < 0){
    sea.x = sea.width/2;
  }




  ship.collide(edges[3])
  drawsprites();
}













































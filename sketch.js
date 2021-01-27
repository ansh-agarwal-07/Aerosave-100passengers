var aeroplane,aeroplaneimage
var thundercloud,thundercloudimage
//var birds,birdsimage
var gamestate = "Play"
var skybackground,skybackgroundimage
var cloudsgroup, birdgroup
var restart,restartimage
var score = 0


function preload(){
  
  aeroplaneimage=loadImage("aeroplane.jpg")
  thundercloudimage=loadImage("thunderclouds.png")
restartimage=loadImage("Restart.png")
  
  
  
  
  
  
}

function setup() {
  createCanvas(400, 400);
  
 aeroplane = createSprite(120,270,50,50)
  aeroplane.addImage("aeroplane.jpg",aeroplaneimage)
  aeroplane.scale=0.2
 
  restart=createSprite(200,200,50,50)
  restart.addImage("Restart.png",restartimage)
  restart.visible=false
  
  //birdgroup = new Group()
  cloudsgroup = new Group()
  
 
}

function draw() {
  background("white");
  
  if(gamestate==="Play"){
    text("Distance covered 'metres': " + score,50,50)
    score = score + Math.round(frameCount/40) 
   if(touches.length>0 || keyDown("space")&& aeroplane.y >= 100) {
  aeroplane.velocityY = -10;
     //createEdgeSprite()
     //if(edge(bottom).isTouching(aeroplane)){
      // gamestate = "End"
     //}
    
  }
    aeroplane.velocityY = aeroplane.velocityY + 0.6
    aeroplane.setCollider("circle",0,0,55)
  
    if(cloudsgroup.isTouching(aeroplane)){
      restart.visible=true
      gamestate = "End"
    }
   
  }
    if(gamestate==="End"){
      aeroplane.velocityY=0
      cloudsgroup.setVelocityXEach(0)
      
      
      
    }
  
  if(mousePressedOver(restart)){
      gamestate="Play"
      
      restart.visible=false
     score=0
      aeroplane.Y=120
      cloudsgroup.destroyEach();
    
    }
  

  //birdsSpawner()
 thundercloudSpawner()
drawSprites()
}

function thundercloudSpawner(){
  if(frameCount%80 === 0){
    thundercloud = createSprite(400,100,40,10)
    thundercloud.y = Math.round(random(20,390))
    thundercloud.addImage(thundercloudimage)
    thundercloud.velocityX=-4
    thundercloud.scale = 0.1
    
      
    thundercloud.lifetime=200
    cloudsgroup.add(thundercloud)
  }
}

//function birdsSpawner(){
  //if(frameCount%60 === 0){
   // birds = createSprite(400,100,40,10)
   // birds.y = Math.round(random(10,300))
    //birds.addImage(birdsimage)
    //birds.velocityX=-2
    
      
    //birds.lifetime=200
    //birdgroup.add(birds)
  //}
//}


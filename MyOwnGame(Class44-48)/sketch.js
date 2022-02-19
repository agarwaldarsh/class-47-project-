var playerRocket; 
var compRocket;
var playerRocketImg;
var compRocketImg;
var spaceImg;
var moon;
var moonImg; 
var asteroids; 
var asteroidsImg;
var asteroidGroup;
var canvas;
var bottomEdge;
var topEdge;
var leftEdge;
var rightEdge;
var moonFLine;
var moonLLine;
var moonRLine;

function preload(){
  //loading all the images 
  playerRocketImg=loadImage("rocket edited.png")
  compRocketImg=loadImage("rocket edited.png")
  spaceImg=loadImage("space.png")
  moonImg=loadImage("Moon2.png")
  asteroidsImg=loadImage("asteroid.png")
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  //creating player rocket 
  playerRocket=createSprite(windowWidth-100, windowHeight-200, 50, 50);
  playerRocket.addImage("player",playerRocketImg)
  playerRocket.scale=0.5

  //creating computer rocket 
  compRocket=createSprite(windowWidth-100,windowHeight-500,150,150)
  compRocket.addImage("computer",compRocketImg)
  compRocket.scale=0.5
  asteroidGroup = new Group;

  //creating moon 
  moon=createSprite(windowWidth-1300,windowHeight-350,200,200)
  moon.addImage("goal",moonImg)
  moon.scale=0.8

  //creating edges 
  bottomEdge=createSprite(windowWidth-700,windowHeight,windowWidth+100,10)
  topEdge=createSprite(windowWidth-700,windowHeight-660,windowWidth+100,10)
  leftEdge=createSprite(windowWidth-1370,windowHeight-300,10,windowHeight)
  rightEdge=createSprite(windowWidth,windowHeight-300,10,windowHeight)
  
  //creating moon's edges 
  moonFLine=createSprite(windowWidth-1230,windowHeight-350,10,200)
  moonLLine=createSprite(windowWidth-1300,windowHeight-270,150,10)
  moonRLine=createSprite(windowWidth-1300,windowHeight-430,150,10)
}

function draw() {
  background(spaceImg);
  spawnAsteroid() 
  
  if(keyDown("UP_ARROW")){
    playerRocket.y=playerRocket.y-10
  }
  if(keyDown("DOWN_ARROW")){
    playerRocket.y=playerRocket.y+10
  }
  if(keyDown("RIGHT_ARROW")){
    playerRocket.x=playerRocket.x+10
  }
  if(keyDown("LEFT_ARROW")){
    playerRocket.x=playerRocket.x-10
  }  
  compRocket.velocityX=-3
  compRocket.velocityY=1
  
  if(compRocket.isTouching(asteroidGroup)){
    compRocket.y=compRocket.y-10  || compRocket.y+10
  }
  if(playerRocket.isTouching(asteroidGroup)){
    playerRocket.x=windowWidth-100;
    playerRocket.y=windowHeight-200;
  }
  //colliding rockets with edges
  playerRocket.collide(leftEdge)
  playerRocket.collide(rightEdge)
  playerRocket.collide(topEdge)
  playerRocket.collide(bottomEdge)

  compRocket.collide(leftEdge)
  compRocket.collide(rightEdge)
  compRocket.collide(topEdge)
  compRocket.collide(bottomEdge)

  //making unessasary components invisible 
  leftEdge.visible=false
  rightEdge.visible=false
  bottomEdge.visible=false
  topEdge.visible=false
  moonFLine.visible=false
  moonRLine.visible=false
  moonLLine.visible=false 
  drawSprites();

  if(compRocket.isTouching(moonLLine || moonRLine || moonFLine)){
    compRocket.velocityX=0
    compRocket.velocityY=0
  }
}
function spawnAsteroid(){
  //spawning asteroids at random places 
  if (frameCount % 30 === 0) {
    var asteroid = createSprite(600,120,40,10);
    asteroid.y = Math.round(random(windowHeight));
    asteroid.x =Math.round(random(windowWidth))
    asteroid .addImage(asteroidsImg);
    asteroid.scale = 0.02;
    asteroid.velocityX= -5
    asteroid.setCollider("circle",0,0,10)
    asteroidGroup.add(asteroid)  
  }
  if (frameCount % 20 === 0) {
    var asteroid = createSprite(600,120,40,10);
    asteroid.y = Math.round(random(windowHeight));
    asteroid.x =Math.round(random(windowWidth))
    asteroid .addImage(asteroidsImg);
    asteroid.scale = 0.02;
    asteroid.velocityX= 5
    asteroid.setCollider("circle",0,0,10)
    asteroidGroup.add(asteroid)
  }
  if (frameCount % 30 === 0) {
    var asteroid = createSprite(600,120,40,10);
    asteroid.y = Math.round(random(windowHeight));
    asteroid.x =Math.round(random(windowWidth))
    asteroid .addImage(asteroidsImg);
    asteroid.scale = 0.02;
    asteroid.velocityY= -5
    //asteroid.debug=true
    asteroid.setCollider("circle",0,0,10)
    asteroidGroup.add(asteroid)  
  }
  if (frameCount % 20 === 0) {
    var asteroid = createSprite(600,120,40,10);
    asteroid.y = Math.round(random(windowHeight));
    asteroid.x =Math.round(random(windowWidth))
    asteroid .addImage(asteroidsImg);
    asteroid.scale = 0.02;
    asteroid.velocityY= 5
    //asteroid.debug=true
    asteroid.setCollider("circle",0,0,10)
    asteroidGroup.add(asteroid)
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


var background,backgroundImg;
var cat,mouse;
var catImg1,mouseImg1,catImg2,mouseImg2;

function preload() {
    //load the images here
  backgroundImg=loadImage("images/garden.png");
  catImg1=loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  catImg3=loadAnimation("images/cat4.png")
  mouseImg1=loadAnimation("images/mouse1.png");
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg3=loadAnimation("images/mouse4.png")
}

function setup(){
   createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(900,600);
  cat.addAnimation("catSleeping",catImg1);
  cat.scale=0.2;

  mouse=createSprite(100,600);
  mouse.addAnimation("mouseStanding",mouseImg1);
  mouse.scale=0.15;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
   if(
    cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("happyCat",catImg3);
      cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation("happyCat");
      
      
      mouse.addAnimation("happyMouse",mouseImg3);
      mouse.changeAnimation("happyMouse");
      mouse.scale=0.15;

    }
    drawSprites();
   
}


function keyPressed(){
   //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
  


  cat.velocityX=-5;
  cat.addAnimation("catRunning",catImg2);
  cat.changeAnimation("catRunning");
  }
}

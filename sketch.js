const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var snowArray = [];


// Declaring Variables
var bg1,bg2,bg3;

var snow1 , snow1Y;

var ran = 100;

var snowWidth = 50;

function preload(){
bg1 = loadImage("snow1.jpg");
bg2 = loadImage("snow2.jpg");
bg3 = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  for(var i = 0;i < 1000 ; i = i+10){
  snowArray.push(new Snow(Math.round(random(10,width-10)),i,50,50));
  }
  

 
}

function draw() {
  background(bg3);  
  Engine.update(engine);

  for(var i = 0;i < snowArray.length ; i++){
  snowArray[i].display();
  
  }
  console.log(snowArray.length);

  drawSprites();
}
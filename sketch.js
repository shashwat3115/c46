const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var alien1 , alien2 , alien3;
var player1;
var canvas, bg;
var bullets = [];
var alien_ki_aavaz;
var bullet_ki_aavaz;

function preload(){
  bg = loadImage("images/back_ground.jpg");
  bullet_ki_aavaz = loadSound("sounds/bulletSound.mp3");
  
}

function setup() {
  canvas = createCanvas(1200,500);
  alien1 = new Alien(1100,100);
  alien2 = new Alien(1100,250);
  alien3 = new Alien(1100,400);
  player1 = new Player(100,250);
  //bullets = new Bullets(700,400);
}

function draw() {
  background(bg);
  for(var n = 0;n<bullets.length;n++){
    bullets[n].display();
    bullets[n].fire(-1);
    if (bullets[n].isTouching(player1)){
      //alien_ki_aavaz = loadSound("sounds/AlienSound.mp3");
      player1.destroy();
    }
  }
  alien1.display();
  alien2.display();
  alien3.display();
  player1.display();
}
function keyPressed(){
  if (keyCode===LEFT_ARROW){
    var bult1 = new Bullet(1100,400);
    bullets.push(bult1);
    var bult2 = new Bullet(1100,100);
    bullets.push(bult2);
    var bult3 = new Bullet(1100,250);
    bullets.push(bult3);
    bullet_ki_aavaz.play();
  }
  
  
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher,archerImage;
var baseImage, playerImage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
  archerImage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 90;
  var options = {
    isStatic: true,
  }

  //create player base body
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);
  //create player body
  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
  World.add(world,player);
  //playerArcher = Bodies.rectangle(270,player.position.y,50,180,options);
  //World.add(world,playerArcher);
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(baseImage,playerBase.position.x,playerBase.position.y,180,150);
  //show the playerbase image using image() function
  image(playerImage,player.position.x,player.position.y,50,180);
  //image(archerImage,playerArcher.position.x,playerArcher.position.y,50,80);
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100); f
}

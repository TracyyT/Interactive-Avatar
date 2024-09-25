
/* VARIABLES */
let eyeWidth = 49;
let eyeHeight = 27;
let pupilWidth = 23;
let pupilHeight = 26;
let crownPosition = 80;
let middlePoint = 200;
let buttonSize = 12;
let toggle = false;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 
  //print(width, height)

  //sets the background color
  //background('lavender'); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  stroke('#A0A0A0');
  strokeWeight(1);

  //background
  if (toggle == true) {
  background('lavender'); 
  }
  else if (toggle == false) {
  background('aliceblue');
  }

  //Direction for mouse press
  fill('hotpink');
  textSize(12);
  text("Click to cheer me up !\nClick again to break me\ndown...", 260,30);
  text("Life is better\nwhen we are laughing !", 20,30);
  
  //Hair
  fill('#500000');
  ellipse(200,280,266,450);

  //ears
  fill('papayawhip');
  ellipse(115,200,20,35);
  ellipse(285,200,20,35);
  

  //neck
  fill('papayawhip');
  rect(200, 280, 30, 60);

  //Shirt
  fill('mistyrose');
  arc(middlePoint, 395, 270, 180, 180, 900, PIE);
  fill('pink');
  arc(middlePoint, 421, 384, 230, 250, 290, PIE);
  //triangle(170, 307, 200, 490, 230, 307);
  fill('white');
  ellipse(middlePoint,320,buttonSize,buttonSize);
  ellipse(middlePoint,340,buttonSize,buttonSize);
  ellipse(middlePoint,360,buttonSize,buttonSize);

  //Face
  fill('papayawhip');
  ellipse(width/2,190,165,187);
  
  //nose
  fill('#ffebcc')
  ellipse(200,199,18,15);

  
  //eyes
  if (toggle == true) {
    //eyes winking
    fill('whitesmoke')
    ellipse(165,170,eyeWidth,eyeHeight);
    fill('#380000');
    ellipse(165,170,pupilWidth,pupilHeight);
    fill('#380000');
    ellipse(235,170,eyeWidth, eyeHeight/8);

  }
  else if (toggle == false) {
    //eyes opened
    fill('whitesmoke');
    ellipse(165,170,eyeWidth,eyeHeight);
    ellipse(235,170,eyeWidth,eyeHeight);

  //pupils
  fill('#380000');
  ellipse(165,170,pupilWidth,pupilHeight);
  ellipse(235,170,pupilWidth,pupilHeight);
  }
  
  //mouth
  if (toggle == true){
    //laugh
    fill('white');
    rect(middlePoint, 225, 50, 10);
    fill('pink');
    arc(middlePoint, 225, 50, 50, 0, 180, PIE);
  }
  else if (toggle == false) {
    //sad
    fill('pink')
    arc(middlePoint, 245, 30, 30, 180, 360, PIE);
  }
    
  //eyebrow
  if (toggle == true) {
    //happy
    stroke('#500000');
    strokeWeight(5)
    line(149, 143, 182, 147);
    line(215, 148, 250, 143);
    //sunglass
    fill('black');
    noStroke();
    ellipse(160,189,69,25);
    ellipse(240,189,69,25);
    rect(middlePoint, 189, 25, 5);
  }
  else if (toggle == false) {
    //unhappy
    stroke('#500000');
    strokeWeight(5)
    line(149, 148, 182, 140);
    line(217, 140, 250, 148);  
    //tears
    fill('lightblue');
    noStroke();
    ellipse(154,182,20,10);
    ellipse(250,182,20,10);
  }

  //Bang
  fill('#500000');
  noStroke();
  ellipse(180,109,122,45);
  //ellipse(200,280,270,450);

  //crown
  fill('gold');
  //ellipse(200,72,120,50);
  triangle(170, crownPosition, middlePoint, 43, 230, crownPosition);
  triangle(160, crownPosition, 170, 53, 240, crownPosition);
  triangle(160, crownPosition, 230, 53, 240, crownPosition);
 // fill('red');
  //ellipse(200, 42,13,13);

  //earings
  stroke('gold')
  strokeWeight(14)
  point(113, 220);
  point(287, 220);

}

/* FUNCTIONS */
function mousePressed()
{
  toggle =!toggle
}
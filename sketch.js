let soundFile;
let soundPlayed = false;
let Time;
let c;

function preload() {
  soundFile = loadSound('SameBlue.mp3')
}
function setup() {
  createCanvas(400, 400, WEBGL);
  c = color(1,179,225);
}

function mousePressed() {
  if (!soundFile.isPlaying()) {
    soundFile.play();
  }
  Time = millis();

}
function draw() {
background(c);

  if(millis() - Time > 3000){
    cube (50,50);
  }
  if(millis() - Time > 4500){
    cube (100,100);
  }
  if(millis() - Time > 6100){
    cube (150,150);
  }
  if(millis() - Time > 10000){
    c=color(242,220,224);
  }
  if(millis() - Time > 11000){
    c=color(120,75,52);
  }
  if(millis() - Time > 11700){
   c=color(252,234,186);
  }
  if(millis() - Time > 12400){
   c=color(85,193,213);
  }
}

function cube(size,color) {
  noFill();
  stroke(255);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.02);
  box(size,size,size);
}



/********************************************
1. mouse:
    -마우스 포인터 이동시 캐릭터의 눈동자가 움직임
2. keyboard:
    -키보드의 스페이스바 누르고 있을시 캐릭터가 경례함
    -키보드의 방향키로 캐릭터가 좌우로 움직임
*********************************************/
let charX = 300; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) charX -= 5;
  if (keyIsDown(RIGHT_ARROW)) charX += 5;

  background(235, 240, 225);
  noStroke();

  fill(65, 85, 55); 
  rectMode(CENTER);
  rect(charX, 380, 340, 200, 60); 

  fill(45, 65, 35);
  ellipse(charX - 80, 330, 50, 30); ellipse(charX + 80, 360, 60, 35);
  fill(115, 105, 75);
  ellipse(charX - 20, 350, 45, 25); ellipse(charX + 50, 310, 40, 30);

  fill(255, 225, 195);
  rect(charX, 260, 65, 110, 10); 

  fill(255, 225, 195); 
  stroke(120);
  strokeWeight(1.5);
  beginShape();
  vertex(charX - 78, 102); 
  vertex(charX - 65, 195); 
  vertex(charX, 240); 
  vertex(charX + 65, 195); 
  vertex(charX + 78, 102); 
  endShape(CLOSE);

  noStroke();
  fill(10);
  push();
  translate(charX - 10, 80); 
  rotate(-0.1); 
  ellipse(0, 0, 195, 75);
  pop();
  fill(0);
  ellipse(charX, 100, 160, 15);

  stroke(100);
  strokeWeight(1.2);
  fill(20);
  beginShape();
  vertex(charX - 60, 132); vertex(charX - 30, 122); vertex(charX - 5, 135); 
  vertex(charX - 10, 138); vertex(charX - 35, 128);
  endShape(CLOSE);
  beginShape();
  vertex(charX + 60, 132); vertex(charX + 30, 122); vertex(charX + 5, 135); 
  vertex(charX + 10, 138); vertex(charX + 35, 128);
  endShape(CLOSE);

  noStroke();
  fill(255);
  ellipse(charX - 33, 152, 28, 14); 
  ellipse(charX + 33, 152, 28, 14);

  let eyeX = 0;
  if (mouseX < charX) eyeX = -4;
  else if (mouseX > charX) eyeX = 4;
  fill(10);
  circle(charX - 33 + eyeX, 151, 9); 
  circle(charX + 33 + eyeX, 151, 9);

  noFill(); stroke(120);
  beginShape(); vertex(charX, 148); vertex(charX, 195); vertex(charX + 7, 191); endShape();
  fill(220, 120, 120); noStroke(); ellipse(charX, 222, 35, 10);
  stroke(180, 80, 80); noFill(); arc(charX, 220, 38, 8, 0.1, 3.04);

  if (keyIsPressed && keyCode === 32) {
    stroke(55, 75, 45); 
    strokeWeight(48);   
    strokeJoin(ROUND); 
    strokeCap(ROUND);  

    line(charX - 115, 300, charX - 245, 300); 
    line(charX - 245, 300, charX - 85, 155);
    
    stroke(255, 225, 195); 
    strokeWeight(24);
    line(charX - 85, 155, charX - 60, 133);
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('charinter', 5);
  }
}
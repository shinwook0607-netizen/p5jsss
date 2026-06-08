function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(235, 240, 225);
  noStroke();

  fill(65, 85, 55); 
  rectMode(CENTER);
  rect(300, 380, 340, 200, 60); 

  fill(45, 65, 35);
  ellipse(220, 330, 50, 30); ellipse(380, 360, 60, 35); ellipse(180, 380, 55, 25);
  fill(115, 105, 75);
  ellipse(280, 350, 45, 25); ellipse(350, 310, 40, 30); ellipse(420, 350, 40, 35);
  fill(20, 20, 20, 100);
  ellipse(260, 310, 25, 20); ellipse(340, 380, 40, 15); ellipse(200, 310, 35, 25);

  fill(255, 225, 195);
  rect(300, 260, 65, 110, 10); 

  stroke(120);
  strokeWeight(1.5);
  beginShape();
  vertex(222, 102); vertex(235, 195); vertex(300, 240); vertex(365, 195); vertex(378, 102); 
  endShape(CLOSE);

  noStroke();
  fill(10);
  push();
  translate(290, 80); rotate(-0.1); 
  ellipse(0, 0, 195, 75);
  pop();
  fill(0);
  ellipse(300, 100, 160, 15);

  stroke(100);
  strokeWeight(1.2);
  fill(20);
  beginShape();
  vertex(240, 132); vertex(270, 122); vertex(295, 135); vertex(290, 138); vertex(265, 128);
  endShape(CLOSE);

  beginShape();
  vertex(360, 132); vertex(330, 122); vertex(305, 135); vertex(310, 138); vertex(335, 128);
  endShape(CLOSE);

  fill(255);
  ellipse(267, 152, 28, 14); ellipse(333, 152, 28, 14);
  fill(10);
  circle(267, 151, 9); circle(333, 151, 9);

  noFill();
  beginShape();
  vertex(300, 148); vertex(300, 195); vertex(307, 191);
  endShape();

  fill(220, 120, 120);
  noStroke();
  ellipse(300, 222, 35, 10);
  stroke(180, 80, 80);
  noFill();
  arc(300, 220, 38, 8, 0.1, 3.04);
}
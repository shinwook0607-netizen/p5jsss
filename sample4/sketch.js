let color1, color2;

function setup() {
  createCanvas(600, 400);
  color1 = color(220, 50, 50, 180);  
  color2 = color(30, 70, 160, 200);      
}

function draw() {
  background(255, 245, 240);
  
  let slowSin = sin(frameCount * 0.02);
  let fastSin = sin(frameCount * 0.05);
  let cosValue = cos(frameCount * 0.03);

  noStroke();
  fill(170, 210, 230, 80);
  let ellipseW = 500 + slowSin * 50;
  let ellipseH = 350 + cosValue * 30;
  ellipse(100 + slowSin * 20, 350, ellipseW, ellipseH); 
  
  fill(255, 220, 60, 100);
  let sunSize1 = 200 + fastSin * 15;
  circle(500, 100, sunSize1);
  
  fill(255, 180, 0, 70);
  let sunSize2 = 150 - fastSin * 10;
  circle(520 + slowSin * 5, 120 + cosValue * 5, sunSize2);
  
  let colorAmt = map(slowSin, -1, 1, 0, 1);
  let dynamicColor = lerpColor(color1, color2, colorAmt);
  fill(dynamicColor);
  
  let waveOffset = slowSin * 15;
  quad(150 + waveOffset, 100, 
       250 + waveOffset, 80, 
       280 + waveOffset, 180, 
       180 + waveOffset, 200); 

  fill(30, 70, 160, 200);
  let bounceY = cosValue * 25;
  triangle(350, 50 + bounceY, 420, 120 + bounceY, 320, 150 + bounceY);
  
  fill(160, 100, 200, 120);
  let swing = fastSin * 10;
  quad(400, 250 + swing, 
       550, 280 - swing, 
       530, 330 + swing, 
       380, 300 - swing);
  
  fill(80, 160, 100, 150);
  let shake = random(-2, 2); 
  rect(100, 180, 60 + shake, 60 + shake);

  fill(255, 120, 30, 160);
  let pulseW = 120 + slowSin * 20;
  let pulseH = 70 + slowSin * 10;
  ellipse(300, 250, pulseW, pulseH);

  stroke(0);
  strokeWeight(3);
  let line1X = 300 + cosValue * 20;
  let line1Y = 350 + slowSin * 20;
  line(50, 50, line1X, line1Y);
  
  let line2X = 350 + slowSin * 20;
  let line2Y = 350 + cosValue * 20;
  line(550, 50, line2X, line2Y); 
  
  stroke(220, 50, 50);
  strokeWeight(1);
  let dashOffset = random(-3, 3);
  line(400 + dashOffset, 50, 450 + dashOffset, 30);
  line(410 + dashOffset, 60, 460 + dashOffset, 40);

  stroke(0);
  strokeWeight(10);
  point(450, 200 + slowSin * 15);
  point(470, 220 - slowSin * 15);
  
  noFill();
  stroke(255);
  strokeWeight(2);
  let floatX = cosValue * 10;
  let floatY = slowSin * 10;
  rect(120 + floatX, 250 + floatY, 40, 40);
  
  noFill();
  stroke(0, 100, 200);
  strokeWeight(3);
  let targetArc = map(slowSin, -1, 1, HALF_PI, PI + HALF_PI);
  arc(500, 300, 60, 60, 0, targetArc); 
}

function keyPressed() {
  if (key === 's') {
    saveGif('movingart', 8);
  }
}
function setup() {
  createCanvas(600, 400);
  background(300, 245, 240);
}

function draw() {
  noStroke();
  
  fill(170, 210, 230, 80);
  ellipse(100, 350, 500, 350); 
  
  fill(255, 220, 60, 100);
  circle(500, 100, 200);
  fill(255, 180, 0, 70);
  circle(520, 120, 150)
  
  fill(220, 50, 50, 180);
  quad(150, 100, 250, 80, 280, 180, 180, 200); 

  fill(30, 70, 160, 200);
  triangle(350, 50, 420, 120, 320, 150);
  
  
  fill(160, 100, 200, 120);
  quad(400, 250, 550, 280, 530, 330, 380, 300);
  
  
  fill(80, 160, 100, 150);
  rect(100, 180, 60, 60);

  
  fill(255, 120, 30, 160);
  ellipse(300, 250, 120, 70);

  stroke(0);
  strokeWeight(3);
  line(50, 50, 300, 350);
  line(550, 50, 350, 350); 
  
  
  stroke(220, 50, 50);
  strokeWeight(1);
  line(400, 50, 450, 30);
  line(410, 60, 460, 40);


  stroke(0);
  strokeWeight(10);
  point(450, 200);
  point(470, 220);
  

  noFill();
  stroke(255);
  strokeWeight(2);
  rect(120, 250, 40, 40);
  

  noFill();
  stroke(0, 100, 200);
  strokeWeight(3);
  arc(500, 300, 60, 60, 0, PI); 
} 
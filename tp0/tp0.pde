PImage submarino;

void setup(){
  size(800, 400);
  background(0,0,220);
  submarino = loadImage("submarino.jpg");
 
}
 
void draw(){
 
  image(submarino, 0, 0, 400, 400);
  
  fill(175, 178, 140);
  noStroke();
  quad(400, 300, 800, 280, 800, 400, 400, 400);
  
  fill(23, 51, 80);
  triangle(400, 275, 400, 310, 475, 305);
  
  fill(71, 72, 58);
  triangle(710, 290, 800, 175, 800, 290);
  
  
  fill(20);
  stroke(20);
  
  quad(500, 250, 687, 255, 680, 125, 515, 175);
  ellipse(690, 190, 100, 130);
  ellipse(497, 221, 55, 60);
  triangle(490, 192, 512, 175, 530, 200);
  quad(570, 90, 610, 85, 615, 110, 560, 120);
  
  fill(50); //no me aparece el punto, no veo algo que lo tape
  point(580, 100);
  
  fill(15);
  triangle(550, 110, 575, 110, 570, 115);
  quad(615, 110, 560, 120, 565, 135, 605, 121);
  
  fill(25);
  arc(690, 190, 100, 130, 3, 4);
  
  fill(20);
  quad(565, 135, 605, 121, 614, 150, 557, 162);
  
  line(460, 196, 470, 210);
  line(460, 248, 475, 232);
  line(475, 192, 500, 186);
  
  fill(21, 80, 142, 50);
  rect(400,0, 400, 400);
  

}

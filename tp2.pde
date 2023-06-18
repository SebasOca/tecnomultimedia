PImage ojo;

int cant = 27;
int angulo = 45;
float tamCX, tamCY;
int tamX = 8;
int tamY = 13;

void setup() {
  size(800, 400);
  ojo = loadImage("ojo.jpeg");
  rectMode(CENTER);
  tamCX = width/2/cant+1.5;
  tamCY = height/cant+1.3;
  
}

void draw() {
  background(255, 38, 30);
  
  image(ojo, 0, 0, 400, 400);
  fondo();
  noStroke();
  fill(255);
  cuadrosVerticales();
  cuadrosHorizontales();
  diagIzq();
  diagDer();
  
  if (dist(50, 50, mouseX, mouseY)<25){
    tamX = 8+5;
    tamY = 13+1;
  }
}

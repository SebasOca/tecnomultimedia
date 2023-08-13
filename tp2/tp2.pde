// Enlace al video explicativo: https://www.youtube.com/watch?v=A7FK6ccyLqo


PImage ojo;

int cant = 27;
int angulo = 45;
float tamCX, tamCY;
int tamX = 8;
int tamY = 13;
boolean reinicio = false;

void setup() {
  size(800, 400);
  ojo = loadImage("ojo.jpeg");
  rectMode(CENTER);
  tamCX = width/2/cant+1.5;
  tamCY = height/cant+1.3;
}

void draw() {
  image(ojo, 0, 0, 400, 400);
  fondo();
  noStroke();

  cuadrosVerticales();
  cuadrosHorizontales();
  diagIzq();
  diagDer();
}

boolean reinicio() {
    return tamX==8;
}

void mouseClicked() {
  if (mouseButton == RIGHT) {
    tamX++;
    tamY++;
    fill(113, 106, 78, 255);
  } else if (mouseButton == LEFT) {
    tamX--;
    tamY--;
  }
  if (mouseX<width/2) {
    reinicio = true;
    tamX = 8;
    tamY = 13;
  }
}

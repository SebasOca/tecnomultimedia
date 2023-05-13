PFont fuente;

PImage gen1, gen2, gen3, gen4, gen5;

int pantalla = 0;
int dirX = 1;
int dirY = 1;
int vel = 2;
int posY;
int posX;
int postext = 1000;

void setup() {
  size (640, 480);

  fuente = loadFont ("Nunito.vlw");
  textFont (fuente, 32);

  posX = 30;
  posY = 480;


  gen1 = loadImage ("clase tarantinos.jpg");
  gen2 = loadImage ("clase flota.jpg");
  gen3 = loadImage ("clase guppy.jpg");
  gen4 = loadImage ("clase 209.jpg");
  gen5 = loadImage ("clase tr1700.jpg");

  frameRate (30);
}

void draw() {

  if (pantalla == 0) {
    postext = frameCount;

    ellipse (592, 434, 56, 56);
    image (gen1, 0, 0, 640, 480);
    fill (255);
    textSize (55.5);
    text ("Submarinos\n        Argentinos", 200-1, 100);
    fill (15, 47, 219);
    textSize (55);
    text ("Submarinos\n        Argentinos", 200, 100);
    
  } else if (pantalla == 1) {

    postext = frameCount*3;

    ellipse (592, 434, 56, 56);
    image (gen1, 0, 0, 640, 480);
    fill (255);
    textSize (55.5);
    text ("Submarinos\n        Argentinos", 200+(postext*1.6-1), 100);
    fill (15, 47, 219);
    textSize (55);
    text ("Submarinos\n        Argentinos", 200+(postext*1.6), 100);

    fill (255, 255, 255);
    textSize (30);
    textLeading (50);
    text ("              Nuestro país contó con submarinos \ndesde 1933,  con tres unidades de la clase \nTarantinos construidos en Italia y habiendo \nconstruido su apostadero en la Base Naval \nMar del plata.", 30, 500-postext);
  
  } else if (pantalla == 2) {
    image (gen2, 0, 0, 640, 480);
    fill (36, 169, 255);
    textSize (30);
    text ("Para 1960, fueron reemplazadas por dos", 641-postext*1.2, 110);
    text ("unidades de la clase Flota", 751-postext*1.2, 210);
    text ("participando en numerosas operaciones.", 861-postext*1.2, 310);
 
  } else if (pantalla == 3) {
    image (gen3, 0, 0, 640, 480);
    fill (36, 169, 255);
    textSize (30);
    textLeading (80);
    text ("En el 71', estos fueron sucedidos por otros \ndos submarinos clase Guppy. Uno de ellos \nfue hundido por sus propios tripulantes en \n    la guerra en las Islas Georgias del Sur.", 40, 490-postext*1.2);
 
  } else if (pantalla == 4) {
    image (gen4, 0, 0, 640, 480);
    fill (36, 169, 255);
    textSize (0+postext*0.05);
    text ("Para ese entonces, Argentina ya contaba \n\ncon 2 de las primeras unidades de la clase \n\n209 del mundo y se apuntaba en la \n\nconstrucción de 2 submarinos TR1700", 40, 50);
  
  } else if (pantalla == 5) {
    ellipse (589, 44, 51, 51);
    image (gen5, 0, 0, 640, 480);
    fill (0, postext*0.5);
    textSize (30);
    textLeading (60);
    text ("    Desde la pérdida en 2017 del ARA San \nJuan, el país quedó sin unidades operativas \n  y va a paso lento en busca de la siguiente \n      generación de guardianes submarinos.", 35, 100);
    fill (32, 161, 245, postext*2);
    text ("    Desde la pérdida en 2017 del ARA San \nJuan, el país quedó sin unidades operativas \n  y va a paso lento en busca de la siguiente \n      generación de guardianes submarinos.", 35, 100);
  }
}

void mouseClicked() {
  if (dist(mouseX, mouseY, 592, 434) < 27) {
    pantalla++;
    fill (255, 255, 255);
    textSize (30);
    textLeading (50);
    text ("              Nuestro país contó con submarinos \ndesde 1933,  con tres unidades de la clase \nTarantinos construidos en Italia y habiendo \nconstruido su apostadero en la Base Naval \nMar del plata.", 30, 500-postext);
  
  } else if (pantalla == 1) {
    
    
  } else if (pantalla == 2) {
  } else if (pantalla == 3) {
  } else if (pantalla == 4) {
  } else if (pantalla == 5) {
      if (dist(mouseX, mouseY, 589, 44) < 26){
        pantalla = 0;
      }
  }
}

PFont fuente;
PImage portada, gen1, gen2, gen3, gen4, gen5;

int pantalla = 0;
int postext = 1000;
int tiempo = 0;


void setup() {
  size (640, 480);
  fuente = loadFont ("Nunito.vlw");
  textFont (fuente, 32);
  
  portada = loadImage ("portada.jpg");
  gen1 = loadImage ("clase tarantinos.jpg");
  gen2 = loadImage ("clase flota.jpg");
  gen3 = loadImage ("clase guppy.jpg");
  gen4 = loadImage ("clase 209.jpg");
  gen5 = loadImage ("clase tr1700.jpg");

  frameRate (30);
}


void draw() {

  if (pantalla == 0) {

    ellipse (592, 434, 56, 56);
    image (portada, 0, 0, 640, 480);
    fill (255);
    textSize (55.5);
    text ("Submarinos\n        Argentinos", 200-1, 100);
    fill (15, 47, 219);
    textSize (55);
    text ("Submarinos\n        Argentinos", 200, 100);
    
  } else if (pantalla == 1 ) {
    
    ellipse (592, 434, 56, 56);
    
    image (gen1, 0, 0, 640, 480);
    
    fill (255);
    textSize (55.5);
    text ("Submarinos\n        Argentinos", 200+(tiempo*4-1), 100);
    fill (15, 47, 219);
    textSize (55);
    text ("Submarinos\n        Argentinos", 200+(tiempo*4), 100);

    fill (255, 255, 255);
    textSize (30);
    textLeading (50);
    text ("              Nuestro país contó con submarinos \ndesde 1933,  con tres unidades de la clase \nTarantinos construidos en Italia y habiendo \nconstruido su apostadero en la Base Naval \nMar del plata.", 30, 500-tiempo*3);
  
    tiempo++;
    if (tiempo>=240){
      pantalla++;
    }
  } else if (pantalla == 2) {
    
    image (gen2, 0, 0, 640, 480);
    fill (36, 169, 255);
    textSize (30);
    text ("Para 1960, fueron reemplazadas", 1360-tiempo*4, 110);
    text ("por dos unidades de la clase Flota", 1420-tiempo*4, 210);
    text ("participando en numerosas operaciones.", 1480-tiempo*4, 310);
     
    tiempo++;
    if (tiempo>=480){
      pantalla++;
    }
  } else if (pantalla == 3) {
    
    image (gen3, 0, 0, 640, 480);
    
    fill (36, 169, 255);
    textSize (30);
    textAlign(CENTER);
    textLeading (80);
    text ("En el 71', estos fueron sucedidos por otros \ndos submarinos clase Guppy. Uno de ellos \nfue hundido por sus propios tripulantes en \nla guerra en las Islas Georgias del Sur.", 320, 2100-tiempo*3.5);
     
     tiempo++;
    if (tiempo>=650){
      pantalla++;
    } 
  } else if (pantalla == 4) {
    
    image (gen4, 0, 0, 640, 480);
    fill (36, 169, 255);
    textSize (-160+tiempo/4);
    textAlign(CENTER);
    text ("Para ese entonces, Argentina ya contaba \n\ncon 2 de las primeras unidades de la clase \n\n209 del mundo y se apuntaba en la \n\nconstrucción de 2 submarinos TR1700", 320, 80);
    
    tiempo++;
    if (tiempo>=950){
      pantalla++;
    }
  } else if (pantalla == 5) {
    
    ellipse (589, 44, 51, 51);
    image (gen5, 0, 0, 640, 480);
    
    fill (0, 0+tiempo*0.2);
    textSize (30);
    textAlign(CENTER);
    textLeading (60);
    text ("Desde la pérdida en 2017 del ARA San \nJuan, el país quedó sin unidades operativas \ny va a paso lento en busca de la siguiente \ngeneración de guardianes submarinos.", 320, 100);
    fill (32, 161, 245, 0+tiempo*0.2);
    text ("Desde la pérdida en 2017 del ARA San \nJuan, el país quedó sin unidades operativas \ny va a paso lento en busca de la siguiente \ngeneración de guardianes submarinos.", 320, 100);
    
    tiempo++;
  }
}


void mouseClicked() {
  if (dist(mouseX, mouseY, 592, 434) < 27 ) {
    pantalla = 1; 
  }
  
  if (pantalla == 5 && dist(mouseX, mouseY, 589, 44) < 26){
    pantalla = 0;
    tiempo = 0;
  }
}

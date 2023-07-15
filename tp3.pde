// Enlace al video explicativo:

PImage [] fondos = new PImage [19];
int inicial = 0;
String [] parrafos;


void setup () {
  size (600, 600);
  for (int i = 0; i < 19; i++) {
    int I = i + 1;
    fondos[i] = loadImage("fondo" + I +".jpg");
  }

  parrafos = loadStrings("textos.txt");
}

void draw () {
  background (210);
  image (fondos[inicial], 0, 0, 600, 600);
  botonera();

  textSize(30);
  for (int i = 0; i < parrafos.length; i++) {
    text(parrafos[i], 100, i * 50 + 100);
  }
}

void keyPressed() {
  //  if(key == 'l'){
  //    parrafos = loadStrings("textos.txt");
  //  }
}

void mouseClicked() {
  //historias
  if (dist(mouseX, mouseY, 200, 539) < 30) {
    if (inicial == 18) {
      inicial = 0;
    } else {
      inicial++;
    }
  }}
  
  //créditos
  if (inicial == 0 && dist(mouseX, mouseY, 400, 539) < 30) {
    inicial = 18;
  }
}

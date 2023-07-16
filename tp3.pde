// Enlace al video explicativo:

PImage [] fondos = new PImage [19];
int inicial = 0;
String [] texto;


void setup () {
  size (600, 600);
  for (int i = 0; i < 19; i++) {
    int I = i + 1;
    fondos[i] = loadImage("fondo" + I +".jpg");
  }
  
  texto = loadStrings("textos.txt");
}

void draw () {
  background (210);
  image (fondos[inicial], 0, 0, 600, 600);
  botonera();

  textSize(28);
  textos();
}

void mouseClicked() {

  //historias
  if (dist(mouseX, mouseY, 400, 539) < 30) {
    if (inicial == 18) {
      inicial = 0;
    } else {
      inicial++;
    }
  }

  if (dist(mouseX, mouseY, 200, 539) < 30) {
    if (inicial == 0) {
      inicial = 18;
    } else {
      inicial--;
    }
  }

  if (inicial == 2) {
    if (dist(mouseX, mouseY, 300, 533) < 30) {
      inicial = 13;
    } else if (dist(mouseX, mouseY, 100, 550) < 30) {
      inicial--;
    } else if (dist(mouseX, mouseY, 500, 550) < 30) {
      inicial++;
    }
  }

  if (inicial == 6) {
    if (dist(mouseX, mouseY, 300, 533) < 30) {
      inicial = 15;
    } else if (dist(mouseX, mouseY, 100, 550) < 30) {
      inicial--;
    } else if (dist(mouseX, mouseY, 500, 550) < 30) {
      inicial++;
    }
  }

  if (inicial == 15) {
    if (dist(mouseX, mouseY, 300, 533) < 30) {
      inicial = 7;
    } else if (dist(mouseX, mouseY, 100, 550) < 30) {
      inicial = 6;
    } else if (dist(mouseX, mouseY, 500, 550) < 30) {
      inicial++;
    }
  }

  if (inicial == 9) {
    if (dist(mouseX, mouseY, 300, 533) < 30) {
      inicial = 17;
    } else if (dist(mouseX, mouseY, 100, 550) < 30) {
      inicial--;
    } else if (dist(mouseX, mouseY, 500, 550) < 30) {
      inicial++;
    }
  }

  //créditos
  if (inicial == 0 && dist(mouseX, mouseY, 200, 539) < 30) {
    inicial = 19;
  }
}

function enemigos() {
  image(en2, posEX++, 140, 60, 25);
  image(en1, posEX2--, 100, 60, 25);
}

function cañones() {
  //izq
  for (let i=0; i<cantDisp; i++) {
    if (disparoI && disparoIS[i] == false) {
      disparoIS[i] = true;
      disparoI = false;
    }
  }
  for (let i=0; i<cantDisp; i++) {
    fill(221, 229, 12);
    ellipse(dispIPosX[i], dispIPosY[i], 10, 10);
    if (disparoIS[i] == true) {
      dispIPosX[i]+=14;
      dispIPosY[i]-=8;
    }
  }
  //der
  for (let i=0; i<cantDisp; i++) {
    if (disparoD && disparoDS[i] == false) {
      disparoDS[i] = true;
      disparoD = false;
    }
  }
  for (let i=0; i<cantDisp; i++) {
    fill(221, 229, 12);
    ellipse(dispDPosX[i], dispDPosY[i], 10, 10);
    if (disparoDS[i] == true) {
      dispDPosX[i]-=14;
      dispDPosY[i]-=8;
    }
  }
}

//function puntosYTiempo() {
//  fill(221, 229, 12);
//  textFont(fuente);
//  textSize (30);
//  text (tiempo, 180, 575);
//  text (mouseX, 100, 100);
//  text (mouseY, 180, 100);

//  tiempo = tiempoI - second();
//  if (tiempo <= 0) {
//    tiempo = tiempoI;
//  }
//  text ("Puntos: " + 0, 450, 575);
//}

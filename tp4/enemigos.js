function enemigos() {
  for (let i=0; i<cantEnemigos; i++) {
    if (!enemigoMuerto) {
      image(en2, posEX++*i, posEY, 60, 25);
    }
  }

  for (let i=0; i<cantEnemigos; i++) {
    if (!enemigoMuerto2) {
      image(en1, posEX2--*i, posEY2, 60, 25);
    }
  }
  bombas();
}


function verificarVidaEnemigos() {
  //impacto
  for (let i=0; i<cantProyectiles; i++) {
    if (!enemigoMuerto) {
      if (dist (proyectilIzquierdoX[i], proyectilIzquierdoY[i], posEX+30, posEY+12) < 30 || dist (proyectilDerechoX[i], proyectilDerechoY[i], posEX+30, posEY+12) < 30) {
        sumar();
        enemigoMuerto = true;
        return vidaEnemigos > 0;
      }
    }
  }
  for (let i=0; i<cantProyectiles; i++) {
    if (!enemigoMuerto2) {
      if (dist (proyectilIzquierdoX[i], proyectilIzquierdoY[i], posEX2+30, posEY2+12) < 30 || dist (proyectilDerechoX[i], proyectilDerechoY[i], posEX2+30, posEY2+12) < 30) {
        sumar();
        enemigoMuerto2 = true;
        return vidaEnemigos > 0;
      }
    }
  }
}

function bombas() {
  for (let i=0; i<cantEnemigos; i++) {
    if (posEX*i > 520 && posYBom<490) {
      bombardeo = true;
      fill(255, 0, 0);
      ellipse(520, posYBom++, 10, 10);
    }
  }

  if (posEX2 < 120 && posYBom2<490) {
    bombardeo = true;
    fill(255, 0, 0);
    ellipse(120, posYBom2++, 10, 10);
  }
}

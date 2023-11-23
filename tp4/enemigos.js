function enemigos() {
  if (!enemigoMuerto) {
    image(en2, posEX++, 140, 60, 25);
    //bombardeo();
  }
  if (!enemigoMuerto2) {
    image(en1, posEX2--, 100, 60, 25);
  }
}


function verificarVidaEnemigos() {
  //impacto
  for (let i=0; i<cantProyectiles; i++) {
    if (dist (proyectilIzquierdoX[i], proyectilIzquierdoY[i], posEX, 140) < 50 || dist (proyectilDerechoX[i], proyectilDerechoY[i], posEX, 140) < 50) {
      sumar();
      enemigoMuerto = true;
      return vidaEnemigos > 0;
    }
  }
  for (let i=0; i<cantProyectiles; i++) {
    if (dist (proyectilIzquierdoX[i], proyectilIzquierdoY[i], posEX2, 140) < 50 || dist (proyectilDerechoX[i], proyectilDerechoY[i], posEX2, 100) < 50) {
      sumar();
      enemigoMuerto2 = true;
      return vidaEnemigos > 0;
    }
  }
}

//function bombardeo(){    // no funciona
//  if (dist(posEX, 520, 140, posYBom) < 10) {
//    fill(255, 0, 0);
//    ellipse(520, posYBom++, 10, 10);
//  }
//}

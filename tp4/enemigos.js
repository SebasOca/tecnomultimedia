function enemigos() {
  if (!enemigoMuerto) {
    image(en2, posEX++, 140, 60, 25);
    //image(en1, posEX2--, 100, 60, 25);
  }

  //bombardeo
  //if (posEX2 = 100) {
  //  if (posYBom >= 485) {
  //fill(221, 229, 12);
  //ellipse(100, posYBom++, 10, 10);
  //  }
  //}
}



function verificarVidaEnemigos() {
  //impacto
  for (let i=0; i<cantProyectiles; i++) {
    if (dist (proyectilIzquierdoX[i], proyectilIzquierdoY[i], posEX, 140) < 50) {
      sumar();
      enemigoMuerto = true;
      return vidaEnemigos > 0;
    }
  }
}

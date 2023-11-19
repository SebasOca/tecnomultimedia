function enemigos() {
  if (vidaEnemigos> 0) {
    image(en2, posEX++, 140, 60, 25);
    image(en1, posEX2--, 100, 60, 25);
  }

  //bombardeo
  if (posEX2 = 100) {
    if (posYBom >= 485) {
      fill(221, 229, 12);
      ellipse(100, posYBom++, 10, 10);
    }
  }
}



function verificarVidaEnemigos() {
  return vidaEnemigos > 0;
}

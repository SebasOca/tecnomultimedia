void diagIzq() {
  fill (238,182, 9);

  //sección diz 1
  for (int i=0; i<5; i++) {
    for (int j=0; j<5; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      float distancia = dist(i*tamX*7, j*tamY*7, 400, 200);
      float miColor = map(distancia, 100, 500, 255, 110);
      fill(miColor*1.4, miColor/1.1, miColor/3);
      rotate(radians(-45));
      rect(283, 294, tamX, tamY);
      popMatrix();
    }
  }

  //sección diz 2
  for (int i=0; i<4; i++) {
    for (int j=0; j<4; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      rotate(radians(-45));
      rect(446, 457, tamX, tamY);
      popMatrix();
    }
  }

  //sección diz 3
  for (int i=0; i<6; i++) {
    for (int j=0; j<6; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      float distancia = dist(i*tamX*7, j*tamY*3, 200, 400);
      float miColor = map(distancia, 0, 500, 255, 110);
      fill(miColor*1.4, miColor/1.1, miColor/3);
      rotate(radians(-45));
      rect(381, 522, tamX, tamY);
      popMatrix();
    }
  }

  //sección diz 4
  for (int i=0; i<9; i++) {
    for (int j=0; j<9; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      rotate(radians(-45));
      rect(165, 456, tamX, tamY);
      popMatrix();
    }
  }

  //sección diz 5
  for (int i=0; i<3; i++) {
    for (int j=0; j<3; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      rotate(radians(-45));
      rect(112, 638, tamX, tamY);
      popMatrix();
    }
  }
}

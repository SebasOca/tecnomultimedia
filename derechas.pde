void diagDer() {

  //sección dder 1
  for (int i=0; i<5; i++) {
    for (int j=0; j<5; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      rotate(radians(45));
      rect(523, -511, tamX, tamY);
      popMatrix();
    }
  }

  //sección dder 2
  for (int i=0; i<7; i++) {
    for (int j=0; j<7; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      rotate(radians(45));
      rect(402, -306, tamX, tamY);
      popMatrix();
    }
  }

  //sección dder 3
  for (int i=0; i<11; i++) {
    for (int j=0; j<11; j++) {
      pushMatrix();
      translate(i*tamX*1.92, j*tamY*1.16);
      rotate(radians(45));
      rect(586, -273, tamX, tamY);
      popMatrix();
    }
  }

  //sección dder 4
  for (int i=0; i<5; i++) {
    for (int j=0; j<5; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      rotate(radians(45));
      rect(530, -48, tamX, tamY);
      popMatrix();
    }
  }
}

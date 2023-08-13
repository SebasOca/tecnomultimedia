void cuadrosVerticales() {
  //fill (52, 43, 7);

  //sección vertical 1
  for (int i=0; i<8; i++) {
    for (int j=0; j<4; j++) {
      pushMatrix();
      translate(484, 7);
      float distancia = dist(i*tamX*8, j*tamY*10, 400, 200);
      float miColor = map(distancia, 0, 400, 0, 100);
      fill(miColor*1.4, miColor/1.4, miColor/3);
      rect(15.4*i, 14.8*j, tamX, tamY);
      rect(0, 61, tamX, tamY);
      popMatrix();
    }
  }

  //sección vertical 2
  for (int i=0; i<6; i++) {
    for (int j=0; j<8; j++) {
      pushMatrix();
      translate(407, 84);
      if (i<3 && j==3) {
        fill(245, 37, 25);
      } else if (i<3 && j==4) {
        fill(245, 37, 25);
      } else if (i>2 && j>4) {
        fill(245, 37, 25);
      } else {
        float distancia = dist(i*tamX*9, j*tamY*4, 200, 350);
        float miColor = map(distancia, 300, 500, 110, 255);
        fill(miColor*1.4, miColor/1.4, miColor/3);
      }
      rect(15.4*i, 14.9*j, tamX, tamY);
      popMatrix();
    }
  }

  //sección vertical 3
  for (int i=0; i<7; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(499, 174);
      if (i<4 && i>1) {
        fill(245, 37, 25);
      } else {
        float distancia = dist(i*tamX, j*tamY, 0, 400);
        float miColor = map(distancia, 350, 900, 0, 255);
        fill(miColor*1.4, miColor/1.4, miColor/3);
      }
      rect(15.5*i, 14.9*j, tamX, tamY);
      rect(77.4, 31, tamX, tamY);
      rect(93, 31, tamX, tamY);
      popMatrix();
    }
  }

  //sección vertical 4
  for (int i=0; i<2; i++) {
    for (int j=0; j<13; j++) {
      pushMatrix();
      translate(777, 222);
      if (i<2 && j<2) {
        fill(245, 37, 25);
      } else {
        float distancia = dist(i*tamX, j*tamY, 0, 400);
        float miColor = map(distancia, 400, 200, 0, 250);
        fill(miColor*1.4, miColor/1.4, miColor/3);
      }
      rect(15.5*i, 15*j, tamX, tamY);
      popMatrix();
    }
  }

  //sección vertical 5
  for (int i=0; i<11; i++) {
    for (int j=0; j<2; j++) {
      fill(245, 37, 25);
      pushMatrix();
      translate(606, 388);
      if (i<5 && j<2) {
        fill(245, 37, 25);
      } else {
        float distancia = dist(i*tamX*8, j*tamY, 300, 200);
        float miColor = map(distancia, 200, 300, 0, 100);
        fill(miColor*1.4, miColor/1.4, miColor/3);
      }
      rect(15.5*i, 15*j, tamX, tamY);
      popMatrix();
    }
  }
}

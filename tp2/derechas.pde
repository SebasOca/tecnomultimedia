void diagDer() {
  fill (227, 186, 23);

  //sección dder 1
  for (int i=0; i<5; i++) {
    for (int j=0; j<5; j++) {
      pushMatrix();
      translate(i*tamX*1.9, j*tamY*1.15);
      float distancia = dist(i*tamX*7, j*tamY*6, 400, 200);
      float miColor = map(distancia, 100, 500, 255, 110);
      fill(miColor*1.4, miColor/1.1, miColor/3);
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
      float distancia = dist(i*tamX*9, j*tamY*4, 200, 400);
      float miColor = map(distancia, 200, 600, 110, 255);
      fill(miColor*1.4, miColor/1.1, miColor/3);
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
      float distancia = dist(i*tamX, j*tamY, 40, 70);
      float miColor = map(distancia, 20, 60, 80, 200);
      fill(miColor*1.4, miColor/1.1, miColor/3);
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
      float distancia = dist(i*tamX*7, j*tamY*3, 200, 400);
      float miColor = map(distancia, 0, 500, 255, 110);
      fill(miColor*1.4, miColor/1.1, miColor/3);
      rotate(radians(45));
      rect(530, -48, tamX, tamY);
      popMatrix();
    }
  }
}

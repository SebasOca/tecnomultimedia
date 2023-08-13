void cuadrosHorizontales() {
  fill (52, 43, 7);

  //sección horiz 1
  for (int i=0; i<2; i++) {
    for (int j=0; j<12; j++) {
      pushMatrix();
      translate(607, 7);
      if (j<10 && j>5) {
        fill(245, 37, 25);
      } else {
        fill (53, 50, 59);
      }
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 2
  for (int i=0; i<2; i++) {
    for (int j=0; j<6; j++) {
      pushMatrix();
      translate(700, 7);
      float distancia = dist(i*tamX*8, j*tamY, 400, 80);
      float miColor = map(distancia, 600, 400, 0, 100);
      fill(miColor*1.4, miColor/1.4, miColor/3);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 3
  for (int i=0; i<4; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(638, 68.1);
      float distancia = dist(i*tamX*8, j*tamY, 400, 200);
      float miColor = map(distancia, 500, 200, 0, 100);
      fill(miColor*1.4, miColor/1.4, miColor/3);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 4
  for (int i=0; i<5; i++) {
    for (int j=0; j<7; j++) {
      pushMatrix();
      translate(731, 83.7);
      if (j<5 && j>2 && i<3) {
        fill(245, 37, 25);
      } else {
        float distancia = dist(i*tamX, j*tamY, 200, 600);
        float miColor = map(distancia, 560, 620, 0, 100);
        fill(miColor*1.4, miColor/1.4, miColor/3);
      }
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 5
  for (int i=0; i<2; i++) {
    for (int j=0; j<9; j++) {
      pushMatrix();
      translate(408, 205);
      if (j<7 && j>2 && i<3) {
        fill(245, 37, 25);
      } else {
        float distancia = dist(i*tamX, j*tamY*3, 200, 400);
      float miColor = map(distancia, 100, 250, 150, 110);
      fill(miColor*1.4, miColor/1.1, miColor/3);
      }
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 6
  for (int i=0; i<13; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(607, 190);
      fill (53, 50, 59);
      rect(15.5*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 7
  for (int i=0; i<2; i++) {
    for (int j=0; j<13; j++) {
      pushMatrix();
      translate(576, 220);
      if (j<6 && j>1) {
        fill(245, 37, 25);
      } else {
        fill (53, 50, 59);
      }
      rect(15.5*i, 15.27*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 8
  for (int i=0; i<3; i++) {
    for (int j=0; j<5; j++) {
      pushMatrix();
      translate(485, 342);
      float distancia = dist(i*tamX*10, j*tamY, 400, 200);
      float miColor = map(distancia, 200, 370, 0, 100);
      fill(miColor*1.4, miColor/1.4, miColor/3);
      rect(15.5*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 9
  for (int i=0; i<3; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(530, 342);
      if (i<2) {
        fill(245, 37, 25);
      } else {
        fill (53, 50, 59);
      }
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }
}

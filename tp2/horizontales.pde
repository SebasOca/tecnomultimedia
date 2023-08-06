void cuadrosHorizontales() {
  fill (52, 43, 7);

  //sección horiz 1
  for (int i=0; i<2; i++) {
    for (int j=0; j<12; j++) {
      pushMatrix();
      translate(607, 7);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 2
  for (int i=0; i<2; i++) {
    for (int j=0; j<6; j++) {
      pushMatrix();
      translate(700, 7);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 3
  for (int i=0; i<4; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(638, 68.1);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 4
  for (int i=0; i<5; i++) {
    for (int j=0; j<7; j++) {
      pushMatrix();
      translate(731, 83.7);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 5
  for (int i=0; i<2; i++) {
    for (int j=0; j<9; j++) {
      pushMatrix();
      translate(408, 205);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 6
  for (int i=0; i<13; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(607, 190);
      rect(15.5*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 7
  for (int i=0; i<2; i++) {
    for (int j=0; j<13; j++) {
      pushMatrix();
      translate(576, 220);
      rect(15.5*i, 15.27*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 8
  for (int i=0; i<3; i++) {
    for (int j=0; j<5; j++) {
      pushMatrix();
      translate(485, 342);
      rect(15.5*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }

  //sección horiz 9
  for (int i=0; i<3; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(530, 342);
      rect(15.4*i, 15.3*j, tamY, tamX);
      popMatrix();
    }
  }
}

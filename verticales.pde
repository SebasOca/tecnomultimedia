void cuadrosVerticales() {

  fill (52, 43, 7);
  
  //sección vertical 1
  for (int i=0; i<8; i++) {
    for (int j=0; j<4; j++) {
      pushMatrix();
      translate(484, 7);
      
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
      rect(15.4*i, 14.9*j, tamX, tamY);
      popMatrix();
    }
  }

  //sección vertical 3
  for (int i=0; i<7; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(499, 174);
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
      rect(15.5*i, 15*j, tamX, tamY);
      popMatrix();
    }
  }

  //sección vertical 5
  for (int i=0; i<11; i++) {
    for (int j=0; j<2; j++) {
      pushMatrix();
      translate(606, 388);
      rect(15.5*i, 15*j, tamX, tamY);
      popMatrix();
    }
  }
}

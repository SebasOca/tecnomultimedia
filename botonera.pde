void botonera() {

  //base
  stroke(43, 237, 200);
  strokeWeight(2);
  fill (10, 90);
  ellipse (300, 650, 750, 200);
  noStroke();
  fill (0, 60);
  ellipse (300, 670, 750, 200);

  //botones iniciales
  if (inicial != 2 && inicial !=6 && inicial != 9 && inicial != 14 && inicial != 18) {
    fill (240);
    for (int i=0; i<2; i++) {
      pushMatrix();
      translate(200, 539);
      ellipse (200*i, 0, 60, 60);
      popMatrix();
    }
    fill (43, 237, 200);
    if (inicial == 0) {
      triangle(185, 527, 216, 527, 200, 556);
      triangle(391, 554, 391, 524, 416, 538);

      fill (43, 237, 200, 40);
      textSize(71);
      text ("El Principito", 101, 146);
      fill (240);
      textSize(70);
      text ("El Principito", 100, 151);
    } else if (inicial != 0 && inicial != 2 && inicial !=6 && inicial != 9 && inicial != 14 && inicial != 18) {
      triangle(208, 554, 208, 524, 183, 538);
      triangle(391, 554, 391, 524, 416, 538);
    }
  } else if (inicial == 2 || inicial ==6 || inicial == 9 || inicial == 14) {
    //botones opcionales
    fill (240);
    ellipse (300, 533, 60, 60);
    for (int i=0; i<2; i++) {
      pushMatrix();
      translate(100, 550);
      ellipse (400*i, 0, 60, 60);
      popMatrix();
    }
  } else if (inicial == 18) {
    //botón créditos
    fill(255);
    ellipse (400, 539, 60, 60);
    fill (43, 237, 200);
    triangle(385, 552, 416, 552, 400, 523);
  }
}

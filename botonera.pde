void botonera() {

  //base
  stroke(43, 237, 200);
  strokeWeight(2);
  fill (10, 90);
  ellipse (300, 650, 750, 200);
  noStroke();
  fill (0, 60);
  ellipse (300, 670, 750, 200);

  //botones inicio
  //if (pantalla == 0) {

    fill (240);
    for (int i=0; i<2; i++) {
      pushMatrix();
      translate(200, 539);
      ellipse (200*i, 0, 60, 60);
      popMatrix();
    }
 // }

  //botones historia
//  ellipse (300, 533, 60, 60);
//  for (int i=0; i<2; i++) {
//    pushMatrix();
//    translate(100, 550);
//    ellipse (400*i, 0, 60, 60);
//    popMatrix();
//  }
}

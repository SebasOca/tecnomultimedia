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
  if (inicial == 0) {
    textSize(71);
    text ("El Principito", 101, 150);
    fill (240);
    textSize(70);
    text ("El Principito", 100, 151);
    for (int i=0; i<2; i++) {
      pushMatrix();
      translate(200, 539);
      ellipse (200*i, 0, 60, 60);
      popMatrix();
    }
    fill (43, 237, 200);
    triangle(191, 554, 191, 524, 216, 538);
    triangle(400, 556, 385, 527, 416, 527);
    
  } else if (inicial != 0){
    //botones historia
    fill (240);
    ellipse (300, 533, 60, 60);
    for (int i=0; i<2; i++) {
      pushMatrix();
      translate(100, 550);
      ellipse (400*i, 0, 60, 60);
      popMatrix();
    }
  }
}

function contador() {
  fill(221, 229, 12);
  textFont(fuente);
  textSize (30);
  text ("Puntos: " + puntos, 400, 575);
}

function sumar() {
  if (!enemigoMuerto) {
    puntos ++;
  }
}

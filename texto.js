class Texto {
  constructor () {
    this.posX = 400;
    this.posY = 200;
  }

  dibujar() {
    fill(255);
    textFont(fuente);
    textAlign(CENTER);
    textSize(18);
    text (this.textos, this.posX, this.posY);
  }
}

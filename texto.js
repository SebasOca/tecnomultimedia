class Texto {
  constructor () {
    this.posX = 400;
    this.posY = 200;
    this.texto = []; 
  }

  dibujar() {
    fill(43, 237, 180);
    //fill(255);
    textFont(fuente);
    textAlign(CENTER);
    textSize(50);
    text (this.texto, this.posX, this.posY);
  }
}

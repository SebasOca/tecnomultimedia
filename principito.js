class Principito {
  constructor() {
    this.posX = -20;
    this.posY = random(-50, height);
    this.velocidad = random(1, 3);
    this.imagen = principito;
  }

  dibujar() {
    image(this.imagen, this.posX, 200, 50, 50);
    this.posX ++;
  }
}

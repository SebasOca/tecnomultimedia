class Principito {
  constructor() {
    this.posX = -20;
    this.velocidad = random(1, 3);
    this.imagen = principito;
  }

  dibujar() {
    image(this.imagen, this.posX, 200, 80, 45);
    this.posX ++;
  }
}

class Principito {
  constructor() {
    this.velocidad = random(2, 3);
    this.posX = -20;
    this.imagen = principito;
  }

  dibujar() {
    image(this.imagen, this.posX, 200, 80, 45);
    this.posX += this.velocidad;
  }
}

class Principito {
  constructor() {
    this.posX = -20;
    this.posY = 200;
    this.velocidad = random(3,4);
    this.imagen = navePrincipito;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, 80, 45);
    this.posX += this.velocidad;
  }
}

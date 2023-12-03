class Enemigo {
  constructor() {
    this.posX = -250;
    this.posY = 200;
    this.velocidad = random(1, 2);
    this.imagen = naveEnemigo;
    this.derribado = false;
  }

  dibujar() {
    if (!this.derribado) {
      image(this.imagen, this.posX, this.posY, 80, 45);
      this.posX += this.velocidad;
    }
  }

  derribar() {
    this.derribado = true;
  }
}

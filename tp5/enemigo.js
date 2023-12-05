class Enemigo {
  constructor() {
    this.posX = -250;
    this.posY = 200;
    this.velocidad = random(1, 3);
    this.variarAltitud = random (170, 230);
    this.imagen = naveEnemigo;
    this.derribado = false;
  }

  dibujar() {
    if (!this.derribado) {
      image(this.imagen, this.posX, this.posY, 80, 45);
      this.posX += this.velocidad;
      this.posY = this.variarAltitud;
    }
  }

  derribar() {
    this.derribado = true;
  }
}

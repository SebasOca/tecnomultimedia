class Enemigo {
  constructor() {
    this.posX = -250;
    this.posY = 200;
    this.imagen = enemigo;
    this.derribado = false;
  }

  dibujar() {
    if (!this.derribado) {
      image(this.imagen, this.posX, this.posY, 80, 45);
      this.posX ++;
    }
  }

  derribar() {
    this.derribado = true;
  }
}

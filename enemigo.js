class Enemigo {
  constructor() {
    this.posX = -250;
    this.velocidad = random(1, 3);
    this.imagen = enemigo;
  }

  dibujar() {
    image(this.imagen, this.posX, 200, 80, 45);
    this.posX += this.velocidad;
  }
}

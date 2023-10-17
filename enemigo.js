class Enemigo {
  constructor() {
    this.posX = -40;
    this.posY = random(-50, height);
    this.velocidad = random(1, 3);
    this.imagen = enemigo;
  }

  dibujar() {
    image(this.imagen, this.posX, 200, 50, 50);
    this.posX ++;
  }
}

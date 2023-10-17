class Enemigo {
  constructor() {
    this.posX = -170;
    this.posY = random(-50, height);
    this.velocidad = random(1, 3);
    this.imagen = enemigo;
  }

  dibujar() {
    image(this.imagen, this.posX, 200, 80, 45);
    this.posX ++;
  }
}

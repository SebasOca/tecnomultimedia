class TorreI{
  constructor(){
    this.posX = 0;
    this.posY = 0;
    this.imagen = torreI;
  }
  
  dibujar(){
    image(this.imagen, 0, 550, 80, 80);
  }
}

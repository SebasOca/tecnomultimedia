class TorreD{
  constructor(){
    this.posX = 0;
    this.posY = 0;
    this.imagen = torreD;
  }
  
  dibujar(){
    image(this.imagen, 720, 550, 80, 80);
  }
}

class TorreD{
  constructor(){
    this.posX = 0;
    this.posY = 0;
    this.imagen = torreD;
  }
  
  dibujar(){
    image(this.imagen, 720, 404, 80, 40);
  }
}
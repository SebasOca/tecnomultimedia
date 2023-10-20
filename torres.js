class Torres{
  constructor(){
    this.imagenIz = torreI;
    this.imagenDer = torreD;
  }
  
  dibujar(){
    image(this.imagenIz, 0, 464, 80, 40);
    image(this.imagenDer, 720, 404, 80, 40);
  }
}

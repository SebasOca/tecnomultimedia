class Contador{
  constructor(){
    this.cantidad = 0;
  }
  
  dibujar(){
    fill(255);
    textSize(30);
    text(this.cantidad, 20, 30 , + " Derrivados");
  }
  
  incrementar(){
    this.cantidad++;
  }
}

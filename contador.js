class Contador{
  constructor(){
    this.cantidad = 0;
  }
  
  dibujar(){
    textSize(15);
    text(this.cantidad + " Derribados", 90, 50);
  }
  
  suma(){
    this.cantidad++;
  }
}

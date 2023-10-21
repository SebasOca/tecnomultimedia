class Juego {
  constructor() {
    this.contador = new Contador();
    this.tiempo = new Tiempo();
    this.fondo = fondo;
    this.torres = new Torres();
    this.principito = new Principito();
    this.enemigo = new Enemigo();
    this.disparo = new Disparo();
    //this.enemigos = [];
    //this.disparos = [];
    
    //for(let i=0; i<this.cantEnemigos; i++){
    //  this.enemigos[i] = new Enemigo();
    //}
    //for(let i=0; i<this.cantDisparos; i++){
    //  this.disparos[i] = new Disparos();
    //}
  }

  dibujar() {
    this.dibujarFondo();
    this.contador.dibujar();
    this.tiempo.dibujar();
    this.torres.dibujar();
    this.principito.dibujar();
    this.enemigo.dibujar();
    this.disparo.dibujar();
    
    //this.dibujarEnemigos();
    //this.dibujarDisparos();
    //if(this.fin()){
    //  for(let i=0; i<this.cantEnemigos; i++){
    //    this.enemigos[i] = new Enemigo();
    //  }
    //}
    //if(this.fin()){
    //  for(let i=0; i<this.cantDisparos; i++){
    //    this.disparos[i] = new Disparo();
    //  }
    //}
    
  }

  dibujarFondo() {
    image(this.fondo, 0, 0, width, height);
  }
  
  //dibujarEnemigos(){
  //  for(let i=0; i<this.cantEnemigos; i++){
  //    this.enemigos[i].dibujar();
  //  }
  //}
  
  //dibujarDisparos(){
  //  for(let i=0; i<this.cantDisparos; i++){
  //    this.disparos[i].dibujar();
  //  }
  //}

  //disparando(){
  //  for(let i=0; i<this.cantEnemigos; i++){
  //    if(this.hayColision(this.enemigos[i], this.disparo)){
  //      this.enemigos[i].derribar();
  //      this.contador.sumar();
  //    }
  //  }
  //}
  
  impacto(enemigo, disparo){
    if (dist (disparo.posXI > enemigo.posX && disparo.posXI < enemigo.posX+80 && disparo.posYI > enemigo.posY && disparo.posYI < enemigo.posY+45)){
      
    //if(dist(enemigo.posX, enemigo.posY, disparo.posXI, disparo.posYI) < 100){
      this.enemigo.derribar();
      this.contador.sumar();
 
    }
  }
  
  fin(){
    return this.tiempo.termino();
  }
}

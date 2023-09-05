//Enlace al video:
let ciudad, en1, en2, en3, inicial, b1, b2, b3;
let fuente; 

function preload(){
  ciudad = loadImage('data/fondo.png');
  en1 = loadImage('data/enemigo1.png');
  en2 = loadImage('data/enemigo2.png');
  en3 = loadImage('data/enemigo3.png');
  inicial = loadImage('data/inicial.png');
  b1 = loadImage('data/botoninicial.png');
  b2 = loadImage('data/botoncreditos.png');
  b3 = loadImage('data/botonreiniciar.png');
  fuente = loadFont(RetroGaming.vlw);
}

function setup() {
  createCanvas(800, 600);
  inicio();

}


function draw() {
 // enemigos();
}

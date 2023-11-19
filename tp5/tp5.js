//Enlace al video:

let inicial, b1, b2, b3;
let fondo;
let torreI, torreD, principito, enemigo;
let proyectil, proyectilI, proyectilD;
let fuente;
let pantallaIncial;
let juego;


function preload() {
  inicial = loadImage('data/inicial.png');
  b1 = loadImage('data/biniciar.png');
  b2 = loadImage('data/breiniciar.png');
  b3 = loadImage('data/bvolver.png');
  fondo = loadImage('data/fondo.png');

  torreI = loadImage('data/torreI.png');
  torreD = loadImage('data/torreD.png');
  principito = loadImage('data/principito.png');
  enemigo = loadImage('data/enemigo.png');
  proyectil = loadImage('data/proyectil.png');
  proyectilI = loadImage('data/proyectilI.png');
  proyectilD = loadImage('data/proyectilD.png');

  fuente = loadFont('data/nunito-sb.ttf');
}


function setup() {
  createCanvas(800, 600);
  pantallaInicial = new PantallaInicial();
}

function draw() {
  pantallaInicial.dibujar();
}

function mouseClicked() {
  pantallaInicial.comenzarJuego();
}

//Enlace al video:
let inicial, b1, b2, b3;
let fondo;
let torreI, torreD, principito, enemigo;
let rayo;
let fuente;
let posEX;
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

  fuente = loadFont('data/nunito-sb.ttf');
}


function setup() {
  createCanvas(800, 600);
  juego = new Juego();
}


function draw() {
  image(inicial, 0, 0, 800, 600);
  image(b1, 290, 400, 220, 80);
  fill(255);
  textFont(fuente);
  textAlign(CENTER);
  textSize(22);
  text("Pulsa las flechas Izq. y Der. para disparar\ndesde sus respectivas torres", 400, 520);
  juego.dibujar();
}

function mouseClicked() {
  if (mouseX>290 && mouseX<510 && mouseY>400 && mouseY<480) {
    juego.dibujar();
  }
}

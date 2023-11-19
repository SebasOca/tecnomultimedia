//Enlace al video: 

let pantalla = 0;
let fondo, en1, en2, inicial, b1, b2, b3, b4, b5, fondocred;
let ciudad, domo, puente, torreI, torreC, torreD;
let fuente;
let posEX, posEX2, posYBom;

let dispIPosX = [];
let dispIPosY = [];
let dispDPosX = [];
let dispDPosY = [];
let disparoIS = [];
let disparoDS = [];

let cantDisp = 100;

let disparoI = false;
let disparoD = false;
let vidaEnemigos = [];
let puntos = 0;


function preload() {
  inicial = loadImage('data/inicial.png');
  fondocred = loadImage('data/fondocred.png');
  b1 = loadImage('data/botoninicial.png');
  b2 = loadImage('data/botoninstrucciones.png');
  b3 = loadImage('data/botoncreditos.png');
  b4 = loadImage('data/botonreiniciar.png');
  b5 = loadImage('data/botonvolver.png');
  fondo = loadImage('data/fondo.png');
  fuente = loadFont('data/neon_adventure.ttf');

  ciudad = loadImage('data/ciudad.png');
  domo = loadImage('data/domo.png');
  puente = loadImage('data/puente.png');
  torreI = loadImage('data/torreI.png');
  torreD = loadImage('data/torreD.png');
  torreC = loadImage('data/torreC.png');
  en1 = loadImage('data/enemigo1.png');
  en2 = loadImage('data/enemigo2.png');

  posEX = -70;
  posEX2 = 870;
  posYBom = 100;
}

function setup() {
  createCanvas(800, 600);
  vidaEnemigos = 1;
  for(let i=0; i<cantDisp; i++){
    dispIPosX.push(21);
    dispIPosY.push(363);
    disparoIS.push(false);
  }
  for(let i=0; i<cantDisp; i++){
    dispDPosX.push(780);
    dispDPosY.push(330);
    disparoDS.push(false);
  }
}

function draw() {
  background (255);
  pantallas();
}

function mouseClicked() {
  if (pantalla == 0 && mouseX>150 && mouseX<250 && mouseY>450 && mouseY<489) {
    pantalla = 1;
  } else if (pantalla == 0 && mouseX>325 && mouseX<475 && mouseY>440 && mouseY<498) {
    pantalla = 2;
  } else if (pantalla == 0 && mouseX>550 && mouseX<650 && mouseY>450 && mouseY<489) {
    pantalla = 3;
  } else if (pantalla == 1 && mouseX>660 && mouseX<760 && mouseY>545 && mouseY<584) {
    pantalla = 0;
  } else if (pantalla == 3 && mouseX>660 && mouseX<760 && mouseY>545 && mouseY<584) {
    pantalla = 0;
  } else if (pantalla == 2 && mouseX>660 && mouseX<760 && mouseY>545 && mouseY<584) {
    pantalla = 0;
  } else if (pantalla == 2 && mouseX>40 && mouseX<140 && mouseY>545 && mouseY<584) {
    pantalla = 2;
  }
}

function control() {
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      disparoD = true;
    } else if (keyCode == LEFT_ARROW) {
      disparoI = true;
    }
  }
}

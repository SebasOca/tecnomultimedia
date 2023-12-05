//Enlace al video: https://youtu.be/EgtuLUtafoI
let pantalla = 0;
let fondo, en1, en2, inicial, b1, b2, b3, b4, b5, fondocred;
let ciudad, domo, puente, torreI, torreC, torreD;
let fuente;
let posEX = -70;
let posEY = 140;
let posEX2 = 920;
let posEY2 = 100;
let posYBom = 140;
let posYBom2 = 100;

let proyecIzqPosX = 22;
let proyecIzqPosY = 362;
let proyectilIzquierdoX = [];
let proyectilIzquierdoY = [];
let proyectilesIzqDisparados = [];
let disparoIzq = false;

let proyecDerPosX = 775;
let proyecDerPosY = 329;
let proyectilDerechoX = [];
let proyectilDerechoY = [];
let proyectilesDerDisparados = [];
let disparoDer = false;

let cantProyectiles = 100;
let cantEnemigos = 3;

let posESX = [];
let posESY = [];
let vidaEnemigos = [];

let enemigoMuerto = false;
let enemigoMuerto2 = false;
let bombardeo = false;
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
}

function setup() {
  createCanvas(800, 600);
  
  for(let i=0; i<cantProyectiles; i++){
    proyectilIzquierdoX.push(proyecIzqPosX);
    proyectilIzquierdoY.push(proyecIzqPosY);
    proyectilesIzqDisparados.push(false);
  }
  for(let i=0; i<cantProyectiles; i++){
    proyectilDerechoX.push(proyecDerPosX);
    proyectilDerechoY.push(proyecDerPosY);
    proyectilesDerDisparados.push(false);
  }
  
  for(let i=0; i<cantEnemigos; i++){
    posESX.push(posEX);
    posESY.push(posEY);
    vidaEnemigos.push(1);
  }
  
  //vidaEnemigos = 1;
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
    if (keyCode == LEFT_ARROW) {
      disparoIzq = true;
    } else if (keyCode == RIGHT_ARROW) {
      disparoDer = true;
    }
  }
}

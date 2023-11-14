//Enlace al video:

let bSiguiente, bAlternativa;
let fondo = [];
let cantPant = 17;
let fuente;


function preload() {
  fuente = loadFont('data/nunito-sb.ttf');
  bSiguiente = loadImage('data/bSiguiente.png');
  bAlternativa = loadImage('data/bAlternativa.png');
  
  for (let i=0; i<cantPant; i++) {
    fondo[i] = loadImage('data/fondo'+ i +'.png');
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background (20, 27, 90);
}

let aventura;
let bSiguiente, bAlternativa;
let fondo = [];
let cantPant = 18;
let fuente;
let textos;

function preload() {
  bSiguiente = loadImage('data/bSiguiente.png');
  bAlternativa = loadImage('data/bAlternativa.png');
  
  fuente = loadFont('data/nunito-sb.ttf');
  textos = loadStrings ('data/textos.txt');
  
  for (let i=0; i<cantPant; i++) {
    fondo[i] = loadImage('data/fondo'+ i +'.jpg');
  }
}

function setup() {
  createCanvas(800, 600);
  aventura = new Aventura();
  
}

function draw() {
  background (20, 27, 90);
  aventura.dibujar();
  
}

function mouseClicked() {
  aventura.click();
}

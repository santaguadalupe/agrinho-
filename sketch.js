function setup() {
  createCanvas(400, 400);
}
let Xjogador1 = 0;
let Xjogador2 = 0;

function draw() {
  AtivaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();

if (Xjogador1 > 350){
  fill("blue");
  textSize(20);
  text("jogador 1 venceu!", 80,200);
  noLoop();
}
 if (Xjogador2 > 350){
   fill("yellow");
   textSize(20);
   text("jogador 2 venceu!", 80,200);
   noLoop();
 }
   
}
 function keyReleased(){
 if (key === 'a') {
   Xjogador1 += random(20);
 }
 if (key == 's') {
 Xjogador2 += random(20);

  }
 }
function AtivaJogo(){
 if(focused==true){
 background("#4CAF50");
 }
   else{
     background("#6FA82C")
   }
}
   

function desenhaJogadores(){
textSize(50);
  text("🚛",Xjogador1,100);
  text("🚜",Xjogador2, 300);
} 
  function desenhaLinhaDeChegada(){
    fill("red");
  rect(350,0,10,400);
    fill("#026B06");
    for(let yAtual=0; yAtual< 400; yAtual += 20){
      rect(350,yAtual,10,10);
    }
 }    
  






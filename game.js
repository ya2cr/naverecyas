const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");
const nave = new Image();
nave.src = "img/aeronav1iii.png"; 
let bottomRightPos = { x: canvas.width - 100, y: canvas.height - 100 }; 
const imgWidth = 100;
x = 300 - nave.width/2;
nave.onload = function(){
    ctx.drawImage(nave,x,710-160);
}
document.addEventListener("keydown",
    function(evento){
        movimentaNaveTeclado(evento.keyCode);
    });
 function movimentaNaveTeclado(tecla) {
ctx.clearRect(x, 810-260, 260, 260);
if (tecla == 88) { // Seta para esquerda
x -= 50;
x = Math.max(0, x);
} else if (tecla == 86) { // Seta para direita
x += 50;
x = Math.min(canvas.width - 260, x);
} else if (tecla == 32) { // espaço
disparaTiro(x+92, 810-250);
}
ctx.drawImage(nave, x, 810-260);
}
function disparaTiro(col, lin) {
if (lin > -6) {
ctx.clearRect(col, lin, 2, 5);
ctx.fillRect(col, lin-6, 2, 5);
}
setTimeout(function(){ disparaTiro(col, lin-6) }, 1);
}

let numeroMaquina=Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);

let numeroUser=parseInt(prompt("Adivina el numero secreto de 1 a el 10"));
let vidas = 3;
while(numeroMaquina!== numeroUser && vidas >1){
    vidas --;
    numeroUser = parseInt(prompt("Intenta Nuevamente adivinar -> Vidas" + vidas))
    
}

if(numeroMaquina === numeroUser){
    console.log("Ganaste");
    alert("Ganaste");
}else{
    console.log("Perdiste");
    alert("Perdiste");
}
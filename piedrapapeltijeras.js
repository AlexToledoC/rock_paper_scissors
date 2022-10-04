let nombre = prompt("¿Cómo te llamas?")
alert("Bienvenida a la página, " + nombre)
// 1 es piedra, 2 papel, 3 tijeras
function random(maximo, minimo)
{
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
}

function choice(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "piedra 🥌"
    } else if(jugada == 2){
        resultado = "papel 🧻"
    } else if(jugada == 3){
        resultado = "tijeras ✂"
    } else{
        resultado = "PERDER"
    }
    return resultado
}

function combate(jugador, pc)
{
    if(pc == jugador){
        alert("EMPATE")
        empates++
    } else if(jugador == 1 && pc == 3){
        alert("Ganaste 😎")
        victorias += 1
    } else if(jugador == 2 && pc == 1){
        alert("Ganaste 😎")
        victorias += 1
    } else if(jugador == 3 && pc == 2){
        alert("Ganaste 😎")
        victorias += 1
    } else{
        alert("Perdiste 😢")
        derrotas += 1
    }
}
let victorias = 0
let derrotas = 0
let empates = 0
while(victorias < 3 && derrotas < 3)
{
    let pc = random(3, 1)
    let jugador = prompt(nombre + ", elige 1 para piedra 🥌, 2 para papel 🧻 o 3 para tijeras ✂.")
    //escoge jugador
    alert(nombre + ", has escogido " + choice(jugador)) 
    //escoge pc
    alert("PC ha escogido " + choice(pc)) 
    //COMBATE
    combate(jugador, pc)
}
alert(nombre + ", ganaste " + victorias + " veces. El pc ganó " + derrotas + " veces y hubo " + empates + " empates.")
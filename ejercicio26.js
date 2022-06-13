let choice = (window.prompt("Elige piedra, papel o tijera")).toLowerCase()
let random = Math.floor((Math.random() * 3) + 1)

if (random===1){
    random = "piedra"
} else if(random===2){
    random = "papel"
} else if(random===3){
    random = "tijera"
}

if(choice===random){
    window.alert("Empate")
} else if((choice==="piedra" && random==="tijera") || (choice==="papel" && random==="piedra") || (choice==="tijera" && random==="papel")){
    window.alert(`Has ganado porque has elegido ${choice} y el ordenador ha elegido ${random}`)
} else if((choice==="papel" && random==="tijera") || (choice==="tijera" && random==="piedra") || (choice==="piedra" && random==="papel")){
    window.alert(`Has perdido porque has elegido ${choice} y el ordenador ha elegido ${random}`)
} else{
    window.alert("Por favor, elige un valor válido")
}
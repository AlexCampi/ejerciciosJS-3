let puesto = parseInt(window.prompt("¿En qué puesto acabaste?"))
puesto===1
? window.alert("Ganaste")
: window.alert("Lo importante es participar")

if(puesto===1){
    window.alert("Medalla de oro")
} else if(puesto===2){
    window.alert("Medalla de plata")
} else if(puesto===3){
    window.alert("Medalla de bronce")
} else {
    window.alert("Lo importante es participar")
}

switch(puesto){
    case 1:
        window.alert("Medalla de oro")
        break
    case 2:
        window.alert("Medalla de plata")
        break
    case 3:
        window.alert("Medalla de bronce")
        break
    default:
        window.alert("Lo importante es participar")
}

if(puesto>0 && puesto<=3){
    window.alert("Sube al podium")
} else if(puesto>3){
    window.alert("Se acabó la carrera")
}
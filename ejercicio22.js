let edad = parseInt(window.prompt("Dime tu edad"))
if(edad>=18){
    let carnet = window.prompt("¿Tienes carnet de conducir?").toUpperCase()
    if(carnet==="SI"){
        let nombre = window.prompt("Dime tu nombre")
        let ciudad = window.prompt("¿En qué ciudad quieres recoger el vehículo?")
        let dias = parseInt(window.prompt("¿Cuántos días quieres alquilar el coche?"))
        let semanas= parseInt(dias/7)

        window.alert(`${nombre} tu alquiler te costará ${semanas > 1 ? semanas * 150 + ((dias - (semanas * 7)) * 25) : dias *25}€`)
    } else{
        window.alert("No puedes alquilar un coche porque no tienes carnet de conducir")
    }
} else{
    window.alert("No puedes alquilar un vehículo porque eres menor")
}
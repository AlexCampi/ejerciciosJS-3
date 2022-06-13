let day = (window.prompt("Dime un día de la semana")).toLowerCase()
if(day=="sábado" || day=="sabado" || day=="domingo"){
    window.alert("Es fin de semana")
    } else if(day=="miercoles"){
        window.alert("Hoy es miércoles")
    } else {
    window.alert(`Hoy es ${day}`)
}

switch(day){
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        window.alert(`Hoy es ${day}`);
        break;
    case "miercoles":
        window.alert("Hoy es miércoles");
        break;
    case "sábado":
    case "sabado":
    case "domingo":
        window.alert("Es fin de semana")
}
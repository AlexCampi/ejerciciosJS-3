let choice = window.prompt("¿De que sabor quieres las croquetas jamón, cocido o pollo?").toLowerCase()
if(choice==="jamón" || choice==="jamon"){
    window.alert("Has elegido croquetas de jamón")
} else if(choice==="cocido"){
    window.alert("Has elegido croquetas de cocido")
} else if(choice==="pollo"){
    window.alert("Has elegido croquetas de pollo")
}

switch(choice){
    case "jamón":
    case "jamon":
        window.alert("Has elegido croquetas de jamón")
        break
    case "cocido":
        window.alert("Has elegido croquetas de cocido")
        break
    case "pollo":
        window.alert("Has elegido croquetas de pollo")
}

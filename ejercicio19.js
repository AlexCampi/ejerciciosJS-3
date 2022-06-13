let ex1 = parseFloat(window.prompt("Nota examen 1"))
let ex2 = parseFloat(window.prompt("Nota examen 2"))
let ex3 = parseFloat(window.prompt("Nota examen 3"))

let final = (ex1>ex2 ? ex1 : ex2) + ex3

if(final===10){
    window.alert("Matrícula")
} else if(final>=9 && final<10){
    window.alert("Sobresaliente")
} else if(final>=7 && final<9){
    window.alert("Notable")
} else if(final>=6 && final<7){
    window.alert("Bien")
} else if(final>=5 && final<6){
    window.alert("Suficiente")
} else if(final>=0 && final<5){
    window.alert("Suspenso")
}
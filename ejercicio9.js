let grados = parseInt(window.prompt("¿Qué temperatura hace?"))
if(grados>40 || grados<10){
    window.alert("Vete a otro sitio")
} else if(grados>=30){
    window.alert("Enciende el aire acondicionado")
} else if(grados>=20){
    window.alert("No hagas nada")
} else if(grados>=10){
    window.alert("Enciende la calefacción")
}
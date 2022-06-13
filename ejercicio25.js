let phrase = window.prompt("¿Qué le quieres decir a Bob?")
if(phrase.indexOf("?")!==-1 && phrase.indexOf("!")===-1){
    window.alert("¡Claro!")
} else if(phrase.indexOf("!")!==-1 && phrase.indexOf("?")===-1){
    window.alert("¡Eh!, tranquilízate.")
} else if(phrase.indexOf("?")!==-1 && phrase.indexOf("!")!==-1){
    window.alert("¡Eh, tranquilízate! Yo sé lo que hago.")
} else if(phrase===""){
    window.alert("Vale con que esas tenemos...")
} else{
    window.alert("Sin más.")
}
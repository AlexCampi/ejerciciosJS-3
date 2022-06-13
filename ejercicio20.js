let value = parseInt(window.prompt("Dime un valor"))
let unit = (window.prompt("Lo quieres pasar a centígrados (C) o a fahrenheit (F)")).toUpperCase()

if(unit==="C"){
    window.alert(`Son ${(value-32)*5/9}°C`)
} else if(unit==="F"){
    window.alert(`Son ${(value*9/5)+32}°F`)
} else{
    window.alert("Por favor introduce una unidad válida")
}
let mayor = parseInt(window.prompt("¿Cuántos años tiene tu hijo mayor?"))
let menor = mayor - parseInt(window.prompt("Dime la diferencia de años entre el mayor y el menor"))
menor >= 18
? window.alert("El hijo menor es mayor de edad")
: window.alert("El hijo menor es menor de edad")
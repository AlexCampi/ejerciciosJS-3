let agent = window.prompt("Introduce tu nombre")
let sales = parseInt(window.prompt("¿Cuál es el valor de tus ventas?"))

if(sales>500){
    window.alert(`${agent} has ganado ${sales+sales*0.05}€ por tus ventas`)
} else{
    window.alert(`${agent} has ganado ${sales}€ por tus ventas`)
}
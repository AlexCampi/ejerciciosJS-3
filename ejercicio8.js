let num1 = parseInt(window.prompt("Dime un número"))
let num2 = parseInt(window.prompt("Dime otro número"))
if(num1<num2){
    window.alert(`${num1} es menor que ${num2}`)
} else if(num1>num2){
    window.alert(`${num1} es mayor que ${num2}`)
} else if(num1===num2){
    window.alert(`${num1} es igual que ${num2}`)
}
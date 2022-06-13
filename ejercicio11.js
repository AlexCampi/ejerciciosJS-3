let num1 = window.prompt("Dime un número entre 25 y 75")
let num2 = window.prompt("Dime otro número entre 25 y 75")

if((num1.substring(0,1)) === num2.substring(0,1) || num1.substring(1) === num2.substring(1) || num1.substring(0,1) === num2.substring(1) || num1.substring(1) === num2.substring(0,1)){
    window.alert("Hay un dígito en común entre los dos números")
}
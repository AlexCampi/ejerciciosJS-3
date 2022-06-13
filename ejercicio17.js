let num1 = parseInt(window.prompt("Dime un número"))
let num2 = parseInt(window.prompt("Dime otro número"))
let num3 = parseInt(window.prompt("Dime otro número más"))

if (num1>num2 && num1>num3){
    window.alert(num1)
} else if(num2>num1 && num2>num3){
    window.alert(num2)
} else{
    window.alert(num3)
}
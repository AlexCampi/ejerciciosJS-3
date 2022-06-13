let num1 = parseInt(window.prompt("Dime un valor"))
let num2 = parseInt(window.prompt("Dime otro valor"))
if(num1===num2){
    window.alert(0)
} else if(num1%6===num2%6){
    num1<num2
    ? window.alert(num1)
    : window.alert(num2)
} else{
    num1<num2
    ? window.alert(num2)
    : window.alert(num1)
}
let num1 = parseInt(window.prompt("Dime un número"))
let num2 = parseInt(window.prompt("Dime otro número"))
let num3 = parseInt(window.prompt("Dime otro número más"))
if(num1-num2===20){
    console.log("El segundo número es 20 menos que el primer número")
} else if(num2-num1===20){
        console.log("El primer número es 20 menos que el segundo número")    
    } else if(num1-num3===20){
            console.log("El tercer número es 20 menos que el primer número")
        } else if(num3-num1===20){
                console.log("El primer número es 20 menos que el tercer número")
            } else if(num2-num3===20){
                    console.log("El tercer número es 20 menos que el segundo número")
                } else if(num3-num2===20){
                        console.log("El tercer número es 20 menos que el segundo número")
                    }
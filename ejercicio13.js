let frase = "LoremIpsumDolorSitAmet"
frase.length%2 === 0
? window.alert(frase.substring(frase.length/2-1,frase.length/2+1))
: window.alert(frase.substring(parseInt(frase.length/2),parseInt(frase.length/2)+1))
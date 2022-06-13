let helados = parseInt(window.prompt("¿Cuántos helados quieres?"))
let precio = helados * 2
helados>10
? window.alert(`Tienes ${helados+1} helados por ${precio}€`)
: window.alert(`Tienes ${helados} helados por ${precio}€`)
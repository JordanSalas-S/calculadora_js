let info = "CALCULADORA\n" +
    "[4] Dividir\n" +
    "[3] Multiplicar\n" +
    "[2] Restar\n" +
    "[1] Sumar\n" +
    "[0] Salir\n"

let i = 0;

do {
    i = parseInt(prompt(info));
    console.log(typeof(i))
    switch(i){
        case 1:
            alert("Estas sumando")
            let num1 = parseInt(prompt("Ingresa 1er valor"))
            let num2 = parseInt(prompt("Ingresa 2do valor"))
            let suma = num1 + num2
            alert("La suma es " + suma)
            break;
        case 2:
            alert("Estas restando")
            let num3 = parseInt(prompt("Ingresa 1er valor"))
            let num4 = parseInt(prompt("Ingresa 2do valor"))
            let resta = num3 - num4
            alert("La resta es " + resta)
            break;
        case 3:
            alert("Estas multiplicando")
            let num5 = parseInt(prompt("Ingresa 1er valor"))
            let num6 = parseInt(prompt("Ingresa 2do valor"))
            let multi = num5 * num6
            alert("La multiplicacion es " + multi)
            break;
        case 4:
            alert("Estas dividiendo")
            let num7 = parseInt(prompt("Ingresa 1er valor"))
            let num8 = parseInt(prompt("Ingresa 2do valor"))
            let divi = num7 / num8
            alert("La division es " + divi)
            break;
    }
} while (i != 0);
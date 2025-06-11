// ------------------------------------------------------------------

function favoriteAnimal(animal) {
    return animal + " is my favorite animal."
}

console.log(favoriteAnimal("Dog"));

// ------------------------------------------------------------------

console.log("\n");

function add7(numero) {
    return numero + 7;
}

console.log(add7(3));

// ------------------------------------------------------------------

console.log("\n");

function multiply(um, dois) {
    return um * dois;
}

console.log(multiply(10, 2));

// ------------------------------------------------------------------

console.log("\n");

function capitalize(stringTxt) {
    return String(stringTxt).charAt(0).toUpperCase() + String(stringTxt).slice(1);
// pega o valor(stringTxt).escolhe o primeiro caractere(0).aplica letra maiuscula na primeira() 
// + pega o valor(stringTxt).coloca o resto da string a partir da segunda letra
}

console.log(capitalize("bom dia"));

// ------------------------------------------------------------------

console.log("\n");

function lastLetter(stringLast) {
    return String(stringLast).slice(-1);
}

console.log(lastLetter("Hoje foi legal"));

// ------------------------------------------------------------------
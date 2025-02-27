//------------------- LENGTH -----------------------------

let text = "HELLO WORLD";
let chart = text.length;

console.log(chart);

//--------------------------------------------------------


// EXTRACTING STRING CHARACTERS

//------------------- charAt -----------------------------

let texto = "HELLO WORLD";
let char = texto.charAt(0);

console.log(char);

//--------------------------------------------------------

//------------------- charCodeAt -------------------------

let pag = "HELLO WORLD";
let cham = pag.charCodeAt(0);

console.log(cham);

//--------------------------------------------------------

//------------------- at ---------------------------------

const name = "W3Schools";
let letter = name.at(2);
console.log(letter);

//--------------------------------------------------------

//------------------- [] ---------------------------------

let banana = "HELLO WORLD";
let maca = banana[0];

console.log(maca);

// banana[0] = "A";
// console.log(banana);

//--------------------------------------------------------


// EXTRACTING STRING PARTS

//------------------- slice -------------------------------

let vidracaria = "Apple, Banana, Kiwi";

let vidro = vidracaria.slice(7, 13);

let espelho = vidracaria.slice(7);

let lampada = vidracaria.slice(-12);

let lanterna = vidracaria.slice(-12, -6);

console.log("Slice:" + vidro);

console.log(espelho);

console.log(lampada);

console.log(lanterna);

//--------------------------------------------------------

//------------------- substring --------------------------

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

console.log("substring: " + part);

//--------------------------------------------------------

//------------------- substr -----------------------------

let strr = "Apple, Banana, Kiwi";
let parts = strr.substr(7, 6);

console.log("substr: " + parts);

//--------------------------------------------------------


// UPPER AND LOWER CASE
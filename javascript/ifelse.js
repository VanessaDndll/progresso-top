// ----------------------------- || -------------------------------------------
console.log("");

let year = parseInt(prompt('Digite uma data'));

if (year == 2015) {
    console.log(year);
    console.log("Parabens");
}

// ----------------------------------------------------------------------------

// ----------------------------- BOOLEAN CONVERSION ---------------------------
console.log("\nBOOLEAN CONVERSION");

if (0) {
    console.log("false");
}

if (1) {
    console.log("true");
}

let cond = (year == 2015);

if (cond) {
    console.log(year);
    console.log("Parabens");
}

// ----------------------------------------------------------------------------

// ----------------------------- ELSE -----------------------------------------
console.log("\nELSE");

if (year == 2015) {
    console.log("You guessed it right!");
}else{
    console.log('How can you be so wrong?');
}

// ----------------------------------------------------------------------------

// ----------------------------- ELSE IF --------------------------------------
console.log("\nELSE IF");

if (year < 2015) {
    console.log("Too early"); 
}else if (year > 2015) {
    console.log("Too late");
} else {
    console.log("You guessed it right!");
}

// ----------------------------------------------------------------------------

// ----------------------------- ? --------------------------------------------
console.log("\n?");

let age = parseInt(prompt('Digite uma idade: '));

let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

let message = (age < 3) ? 'Hi baby' :
    (age < 18) ? 'Hello' :
    (age < 100) ? 'Greetings' :
    'What an unsual age!';
console.log(message);

// ----------------------------------------------------------------------------

// ----------------------------- TASK -----------------------------------------
console.log("\nTASK");

let name = prompt('Qual o nome oficial? ');

if ( name === "ECMAScript") {
    console.log("Right!");
} else {
    console.log("You don't know? 'ECMAScript'!");
}


let number = parseInt(prompt("Enter a number:"));

if (number > 0) {
    console.log(1);
} else if (number < 0) {
    console.log(-1);
} else {
    console.log(0);
}


let result = (a + b < 4) ? 'bellow' : 'over';


let messsage = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

// ----------------------------------------------------------------------------
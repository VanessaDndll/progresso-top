// ----------------------------- NUMBER -----------------------------

console.log("NUMBER");

let n = 123;
n = 12.345;

console.log(n);

// infinity
console.log(1 / 0);

console.log(Infinity);

// NaN
console.log("not a number" / 2);

console.log(NaN + 1);

console.log(3 * NaN);

console.log("not a number" / 2 - 1);

// ------------------------------------------------------------------

console.log("\nBIGINT");

// ----------------------------- BIGINT -----------------------------

const bigInt =  1234567890123456789012345678901234567890n;
console.log(bigInt);

// ------------------------------------------------------------------

console.log("\nSTRING");

// ----------------------------- STRING -----------------------------

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(str + "\n" + str2 + "\n" + phrase);

// backticks
let name = "Roberto";
console.log(`Hello, ${name}!`);
console.log(`the result is ${1 + 2}`);

// ------------------------------------------------------------------

console.log("\nBOOLEAN");

// ----------------------------- BOOLEAN ----------------------------

let nameFieldChecked = true;
console.log(nameFieldChecked);

let isGreater = 4 > 1;
console.log(isGreater);

// ------------------------------------------------------------------

console.log("\nNULL");

// ----------------------------- NULL -------------------------------

let age = null;
console.log(age);

// ------------------------------------------------------------------

console.log("\nUNDEFINED");

// ----------------------------- UNDEFINED --------------------------

let address;
console.log(address);

let lastName = "Silva";
lastName = undefined;
console.log(lastName);

// ------------------------------------------------------------------

console.log("\nTYPEOF");

// ----------------------------- TYPEOF -----------------------------

console.log(typeof undefined);

console.log(typeof 0);

console.log(typeof 10n);

console.log(typeof true);

console.log(typeof "foo");

console.log(typeof Symbol("id"));

// ------------------------------------------------------------------

console.log("\nTASK");

// ----------------------------- TASK -------------------------------

let nameII = "Ilya";

console.log(`hello ${1}`);       // result: hello 1

console.log(`hello ${"name"}`);  // result: hello name

console.log(`hello ${nameII}`);  // result: hello Ilya

// ------------------------------------------------------------------
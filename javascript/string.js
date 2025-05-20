// ----------------------------- DECLARING STRINGS ----------------------------
console.log("DECLARING STRINGS");


const str = "The revolution will not be televised.";
console.log(str);

const badStr = str;
console.log(badStr);

// ----------------------------------------------------------------------------

// ----------------------------- QUOTES ---------------------------------------
console.log("\nQUOTES");

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single + "\n" + double + "\n" + backtick);

// ----------------------------------------------------------------------------

// ----------------------------- EMBEDDING ------------------------------------
console.log("\nEMBEDDING");

const name = "Cris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined =`${one}${two}`;
console.log(joined);

// ----------------------------------------------------------------------------

// ----------------------------- CONCATENATION + ------------------------------
console.log("\nCONCATENATION +");

const color = "Blue";
const location = "Sky"
console.log("Today the " + location + " is " + color);

// ----------------------------------------------------------------------------

// ----------------------------- INCLUDING EXPRESSIONS ------------------------
console.log("\nINCLUDING EXPRESSIONS");

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

// ----------------------------------------------------------------------------

// ----------------------------- MULTILINE ------------------------------------
console.log("\nMULTILINE");

const newline = `One dasy youy finally knew
what you had to do, and began,`;
console.log(newline);

const newlineII = "One dasy youy finally knew \nwhat you had to do, and began,";
console.log(newlineII);

// ----------------------------------------------------------------------------

// ----------------------------- INCLUDING QUOTES -----------------------------
console.log("\nINCLUDING QUOTES");

const goodQupotes1 = 'She said "I think so!"';
const goodQupotes2 = `She said "I think so!"`;
console.log(goodQupotes1 + "\n" + goodQupotes2);

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

// ----------------------------------------------------------------------------

// ----------------------------- NUMBER X STRING ------------------------------
console.log("\nNUMBER X STRING");

const lastName = "Frost ";
const number =  243;
console.log(lastName + number);

const myStr = "123";
const myNum = Number(myStr);
console.log(typeof myNum);

const myNum2 = 123;
const myStr2 = String(myNum2);
console.log(typeof myStr2);

// ----------------------------------------------------------------------------
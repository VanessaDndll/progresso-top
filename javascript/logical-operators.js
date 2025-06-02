// ----------------------------- || ---------------------------------
console.log("|| OR");

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

if (1 || 0) {
    console.log('truthly!');
}

let hour = 9;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log('The office is closed.');
}

console.log(1 || 0);
console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0);

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");

true || console.log("not printed");
false || console.log("printed");

// ------------------------------------------------------------------

// ----------------------------- && ---------------------------------
console.log("\n&& AND");

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
    console.log('The time is 12:30');
}

if ( 1 && 0) {
    console.log("won't work, because rhe result is falsy");
}

console.log( 1 && 0 );
console.log( 1 && 5 );

console.log( null && 5 );
console.log( 0 && "no matter what" );

console.log( 1 && 2 && null && 3 );
console.log( 1 && 2 && 3 );

// ------------------------------------------------------------------

// ----------------------------- ! ----------------------------------
console.log("\n! NOT");

console.log( !true );
console.log( !0 );

console.log( !!"non-empty string" );
console.log( !!null );

// ------------------------------------------------------------------

// ----------------------------- TASK -------------------------------
console.log("\nTASK");

console.log( null || 2 || undefined); // 2

console.log( 1 && null && 3); // null

console.log( null || 2 && 3 || 4);

let age = 50;

if ( age > 14 || age < 90 ) {
    console.log("Certo!");
}

if (!(age >= 14 && age <= 90 )) {
    console.log("Certo!");
}

console.log('0, -1, 1');












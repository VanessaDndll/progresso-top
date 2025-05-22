// ----------------------------- IF ---------------------------------
console.log("IF");

const hour = 19;

if (hour < 18) {
   console.log("Good day");
}

// ------------------------------------------------------------------

// ----------------------------- ELSE -------------------------------
console.log("\nELSE");

if (hour < 18) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

// ------------------------------------------------------------------

// ----------------------------- ELSE IF ----------------------------
console.log("\nELSE IF");

const time = 21;

if (time < 10) {
    console.log("Good morning");
} else if (time < 20) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

// ------------------------------------------------------------------

// ----------------------------- TEST -------------------------------
console.log("\nTEST");

let text;

if (Math.random() < 0.5) {
    text = "Menor";
} else {
    text = "Maior"
}

console.log(text);

// ------------------------------------------------------------------

// ----------------------------- SWITCH -----------------------------
console.log("\nSWITCH");

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log(day);


switch (new Date().getDate()) {
    case 6:
        txt = "Today is Saturday";
        break;
    case 0:
        txt = "Today is Sunday";
        break;
    default:
        txt = "Looking forward to the weekend";
}

console.log(txt);


switch (new Date().getDate()) {
    default:
        msg = "Looking forward to the weekend";
        break;
    case 6:
        txt = "Today is Saturday";
        break;
    case 0:
        txt = "Today is Sunday";
        break;
}

console.log(msg);


switch (new Date().getDay()) {
    case 4:
    case 5:
        result = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        result = "It is Weekend";
        break;
    default:
        result = "Looking forward to the Weekend"
}

console.log(result);


// strict comparison
let x = "0";
switch (x) {
    case 0:
        console.log("Off");
        break;
    case 1:
        console.log("On");
        break;
    default:
        console.log("No value found");
        break;
}

// ------------------------------------------------------------------
// ----------------------------- SWITCH -----------------------------
console.log("SWITCH");

let a = 2 + 2;

switch (a) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly');
        break;
    case 5:
        console.log('Too big'); 
        break;
    default:
        console.log("I don't know such values");
        break;
}

// GROUPING

let b = 3;

switch (b) {
    case 4:
        console.log('Right');
        break;
    case 3:
    case 5:
        console.log('Wrong');
        console.log("Why don't you make a math class?");
        break;
    default:
        console.log('The result is strange, really');
        break;   
}

// TYPE MATTERS


let arg = prompt("Enter a value")

switch (arg) {
    case '0':
    case '1':
        console.log('One or zero');
        break;
    
    case '2':
        console.log("two");
        break;

    case '3':
        console.log('Never executes');
        break;

    default:
        console.log('An unknown value');
        break;   
}

// ------------------------------------------------------------------

// ----------------------------- TASK -------------------------------
console.log("\nTASK");

let browser = 'Opera';

let result = browser == 'Edge' ? "You've got the edge" : 
browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera' ? 'Okay we support these browsers too' :
'We hope that this page looks ok!';

console.log(result);


let c = +prompt('c?');

switch (c) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}


// ------------------------------------------------------------------
// let accessAlowed;
// let age = prompt('Qual a sua idade?');

// if (age > 18) {
//     accessAlowed = document.write('Acesso permitido');
// }else {
//     accessAlowed = document.write('Acesso Negado');
// }

//--------------------------------------------------------

//--------------------------------------------------------

// let accessAlowed = (age > 18) ? document.write('Acesso permitido') : document.write('Acesso negado');

//--------------------------------------------------------

//--------------------------------------------------------

// let age = prompt('age?', 18);

// let message = (age < 3)   ? 'Hi, baby!'  :
//               (age < 18)  ? 'Hello!'     :
//               (age < 100) ? 'Greetings!' :
//                             'What an unsual age!';

// alert(message);

//--------------------------------------------------------

//TASKS
//--------------------------------------------------------

//   1

if ("0") {
    alert('Hello')
}

//   2

let begin = prompt("What's the 'official' name of javascript?")

if (begin == "ECMAScript") {
    alert("right")
} else {
    alert("You dont't know? ECMAScript")
}

//   3

let num = prompt("Type a number: ")

if (num > 1) {
    alert(1)
} else if (num < 0) {
    alert(-1)
} else {
    alert(0)
}

//   4

let result = (a + b < 4) ? 'Below' : 'Over';

//   5

let message = (login == 'Employee') ? 'Hello'     :
              (login == 'Director') ? 'Greetings' :
              (login == '')         ? 'No login'  :
                                      '';
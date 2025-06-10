// Tipo de idade e se aplica desconto por estudante

let age = +prompt("Digite sua idade:");

let result = age >= 18 ? 'Você é maior de idade.' : 
age >= 13 && age < 18 ? 'Você é adolescente.' :
'Você é criança.';

console.log(result);

let est = confirm("Estudante?");

if (est) {
    console.log('Desconto aplicado!');
}

console.log('Teste: ' + est);

// ------------------------------------------------------------------

// Fala se o dia é útil ou final de semana

let day = prompt("Digite um dia da semana:")

switch (day) {
    case "segunda":
    case "terça":  
    case "quarta":  
    case "quinta":  
    case "sexta": 
        console.log('Dia útil.');
        break;

    case "sábado":
    case "domingo":
        console.log('Final de semana.');
        break;
        
    default:
        console.log('Inválido.');
        break;
}

// ------------------------------------------------------------------

// Par ou Impar

let numero = +prompt('Escolha seu número:');

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        console.log('PAR');    
    }else{
        console.log('IMPAR');
    } 
}

parOuImpar(numero);

// ------------------------------------------------------------------

// Desconto na compra

let valor = +prompt("Valor da compra:");

function calculaDesconto(valor) {
    let desconto = valor >= 100 ? valor * 0.20 :
    valor >= 50 ? valor * 0.10 :
    0;

    console.log(valor - desconto);
}

calculaDesconto(valor);

// ------------------------------------------------------------------
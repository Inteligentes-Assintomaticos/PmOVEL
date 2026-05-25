// ATIVIDADE DA AULA 7 -If, Else e Switch.

// Aluno: Matheus Ramos Lima da Silva
// Turma: 523
// Data: 04/05/2026

// 1 - Escolher o dia usando if else:

let dia_ifelse1 = 3;

if (dia_ifelse1 === 1) {
    console.log('Domingo');
} else if (dia_ifelse1 === 2) {
    console.log('Segunda-feira');
} else if (dia_ifelse1 === 3){
    console.log('Terça-feira');
} else if (dia_ifelse1 === 4){
    console.log('Quarta-feira');
} else if (dia_ifelse1 === 5){
    console.log('Quinta-feira');
} else if (dia_ifelse1 === 6){
    console.log('Sexta-feira');
} else if (dia_ifelse1 === 7){
    console.log('Sábado');
} else {
    console.log('Dia inválido');
}

// 2 - Escolher o dia usando switch:

let dia_switch2 = Number(prompt('Digite um número de 1 a 7 para escolher um dia da semana: '));

switch (dia_switch2) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
}

// 3 - Exemplo de switch sem o break:

let cor3 = 'verde';

switch (cor3) {
    case 'vermelho':
        console.log('Cor é vermelho');
    case 'verde':
        console.log('Cor é verde');
    case 'azul':
        console.log('Cor é azul');
    default:
        console.log('Cor desconhecida');
}

// 4 - Exemplo da switch com o break:

let cor4 = 'verde';

switch (cor4) {
    case 'vermelho':
        console.log('Cor é vermelho');
        break;
    case 'verde':
        console.log('Cor é verde');
        break;
    case 'azul':
        console.log('Cor é azul');
        break;
    default:
        console.log('Cor desconhecida');
}

// 5 - Uso do Default no switch:

let dia5 = 2

switch (dia5) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
}

// 6 - Uso sem o default no switch:
let dia6 = 6

switch (dia6) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
}
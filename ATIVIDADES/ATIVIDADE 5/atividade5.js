// AULA 7 -If, Else e Switch.

// 1 - Escolher o dia usando if else:

let dia_ifelse = 3;

if (dia_ifelse === 1) {
    console.log('Domingo');
} else if (dia_ifelse === 2) {
    console.log('Segunda-feira');
} else if (dia_ifelse === 3){
    console.log('Terça-feira');
} else if (dia_ifelse === 4){
    console.log('Quarta-feira');
} else if (dia_ifelse === 5){
    console.log('Quinta-feira');
} else if (dia_ifelse === 6){
    console.log('Sexta-feira');
} else if (dia_ifelse === 7){
    console.log('Sábado');
} else {
    console.log('Dia inválido');
}

// 2 - Escolher o dia usando switch:

let dia_switch = Number(prompt('Digite um número de 1 a 7 para escolher um dia da semana: '));

switch (dia_switch) {
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

let dia = 3;

switch (dia) {
    case 1:
        console.log('Domingo');
    case 2:
        console.log('Segunda-feira');
    case 3:
        console.log('Terça-feira');
    case 4:
        console.log('Quarta-feira');
    case 5:
        console.log('Quinta-feira');
    case 6:
        console.log('Sexta-feira');
    case 7:
        console.log('Sábado');
}

// 4 - Exemplo da switch com o break:

switch (dia) {
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

// 5 - Uso do Default no switch:

switch (dia) {
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

switch (dia) {
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
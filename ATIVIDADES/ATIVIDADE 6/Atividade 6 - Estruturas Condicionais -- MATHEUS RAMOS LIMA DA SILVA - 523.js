// ATIVIDADE 6 - ESTRUTURAS CONDICIONAIS

// Aluno: Matheus Ramos Lima da Silva
// Turma: 523
// Data: 04/05/2026

// 1 - if...else - Um aluno fez uma prova e tirou uma nota entre 0 e 10. Declarar uma variável de passar o valor que será comparado no if else. Verifique se ele foi aprovado (nota >= 6), ficou de recuperação (nota >= 4 e < 6), ou foi reprovado (nota < 4).

let nota = Number(prompt("Digite a nota do aluno (0 a 10):"));

if (nota >= 6 && nota <= 10) {
    console.log("O aluno foi aprovado.");
} else if (nota >= 4 && nota < 6) {
    console.log("O aluno ficou de recuperação.");
} else if (nota >= 0 && nota < 4) {
    console.log("O aluno foi reprovado.");
} else {
    console.log("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
}

// 2 - if...else - Um sistema calcula o valor do ingresso com base na idade da pessoa. Declarar uma variável de passar o valor que será comparado no if else. Até 12 anos paga meia, de 13 a 59 paga inteira, acima de 60 não paga.

let idade = Number(prompt("Digite a idade da pessoa:"));

if (idade > 0 && idade <= 12) {
    console.log("A pessoa paga meia entrada.");
} else if (idade >= 13 && idade <= 59) {
    console.log("A pessoa paga entrada inteira.");
} else if (idade >= 60 && idade <= 120) {
    console.log("A pessoa não paga ingresso.");
} else {
    console.log("Idade inválida. Por favor, digite uma idade entre 0 e 120.");
}

// 3 - switch case - Um restaurante tem um menu com 4 pratos. Declarar uma variável de passar o valor que será comparado no switch para escolher o número do prato.

let prato = Number(prompt("Escolha um prato (1 a 4):\n1 - Lasanha\n2 - Strogonoff\n3 - Feijoada\n4 - Salada"));

switch (prato) {
    case 1:
        console.log("Prato 1: Lasanha - R$ 25,00");
        break;
    case 2:
        console.log("Prato 2: Strogonoff - R$ 20,00");
        break;
    case 3:
        console.log("Prato 3: Feijoada - R$ 22,00");
        break;
    case 4:
        console.log("Prato 4: Salada - R$ 15,00");
        break;
    default:
        console.log("Prato inválido. Por favor, escolha um prato entre 1 e 4.");
}
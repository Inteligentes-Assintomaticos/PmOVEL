// Aluno: Matheus Ramos Lima da Silva
// Turma: 523
// Atividade 7 - Estruturas de repetição

// 1 - Contando números pares com for
// Faça um programa em JavaScript que peça ao usuário um número inteiro positivo.
// Depois, utilize um laço for para mostrar todos os números pares de 0 até o número digitado.

let numeroFinal = 10

for ( i = 0; i <= numeroFinal; i++) {
    if (i % 2 == 0) {
        console.log(`O número ${i} é par!`)
    } 
}

// 2 - Somando valores com for
// Crie um programa que recebe um número inteiro e soma os valores de 0 até o número inserido
// Utilize um laço for para somar todos os números e exiba o resultado da soma.

let numeroInteiro = 10
let somatorio = 0

for (i = 0; i <= numeroInteiro; i++) {
    somatorio += i
}

console.log(somatorio)

// 3 - Senha com while
// Faça um programa que peça ao usuário para digitar uma senha.
// Enquanto a senha digitada for diferente de "1234", o programa deve continuar pedindo novamente.
// Quando a senha correta for digitada, exiba a mensagem: "Acesso permitido".

let condition = true
let senha = 1234

while (condition == true) {
    if (senha == "1234"){
        console.log('Acesso permitido!');
        break
    } else if (senha != "1234"){
        console.log('Senha incorreta, digite novamente!');
    }
}

// 4 - Contagem regressiva com while
// Crie um programa que peça ao usuário um número inteiro positivo.
// Utilize um laço while para fazer uma contagem regressiva até 0, mostrando cada número na tela

let numeroIntPos = 10

console.log('Contagem Regressiva: ')

while (numeroIntPos > 0) {
    console.log(numeroIntPos)
    numeroIntPos -= 1
}


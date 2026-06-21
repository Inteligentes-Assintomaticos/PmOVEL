// Questão 1

let nota = 5

if (nota > 10 || nota < 0) {
    console.log('Nota fora dos parâmetros')
}
else if (nota >= 6) {
    console.log('APROVADO!')
}
else if (nota >=4) {
    console.log('RECUPERAÇÃO!')
}
else if (nota < 4) {
    console.log('REPROVADO!')
}
else {
    console.log('Valor inesperado')
}


// Questão 2

let idade = 17

if (idade < 0 || idade > 122) {
    console.log('Você está vivo?')
}

else if (idade <=12) {
    console.log('Aproveita pai! Que hoje fica só meia entrada pra ele')
}
else if (idade <= 59) {
    console.log('Opa campeão! Fica uma entrada pra você')
}
else if (idade >= 60) {
    console.log('Opa meu senhor! Viveu o bastante para isso, fica na conta da casa')
}
else {
    console.log('Valor inesperado')
}


// Questão 3


console.log(`=== CARDÁPIO ===
[1] Macarrão
[2] Parmegiana
[3] Tradicional (Feijão, Arroz, e Picanha
[4] Picanha`)


let prato = 3

switch (prato) {
    case 1:
        console.log('Prato: Macarrão')
        break
    case 2:
        console.log('Prato: Parmegiana')
        break
    case 3:
        console.log('Prato: Tradicional')
        break
    case 4:
        console.log('Prato: Picanha')
        break
    default:
        console.log('Prato indisponível')
}


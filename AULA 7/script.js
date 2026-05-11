// Questão 1

let num_inicial_1 = 2
let num_final_1 = 10

for (i = num_inicial_1; i <= num_final_1; i++) {
    if (i%2 == 0) {
        console.log(i)
    }
}


// Questão 2

let num_inicial_2 = 0
let num_final_2 = 10
let soma_2 = 0

for (i = num_inicial_2; i <= num_final_2; i++) {
    soma_2 += i
}
console.log(soma_2)


// Questão 3

var senha = 'senha'

while (senha != 1234) {
    console.log('Digite a sua senha')
    var senha = 1234
    if (senha == 1234) {
        console.log('Senha correta')
    }
}


// Questão 4


let num_inicial_4 = 10

for (i = num_inicial_4; i > 0; i--) {
    console.log(i)
}


// Atividade 2

alert("Olá, Mundo!");

console.log("Hello world!")

var mensagem = "IFAL"
console.log(mensagem);

function soma() { //primeira função
    console.log(4 + 6)
}
soma()

function soma2() { //segunda função
    alert(4 + 6)    
}

function soma3(x,y) { //terceira função (exemplo com parâmetros)
    console.log(x + y)
}
soma3(2,5)

//Arrow fuctions
soma4 = (x,y) => console.log(x + y) //quarta função

function soma5(a,b) { //quinta função (utilizando o return)
    return a + b    
}
console.log(soma(1,5))


confirm("Está gostando de JS?")
let texto = prompt("Digite seu nome")
alert(texto)

function digitar() {
    let n1 = Number(prompt("Digite um número"))
    let n2 = Number(prompt("Digite outro número"))
    s = n1 + n2
    alert(s)
}


// Atividade 3

function digitar2() {
    let n1 = Number(prompt('Digite um número'))
    let n2 = Number(prompt('Digite outro número'))
    alert(`O somatório é: ${soma5(n1, n2)}`)
}

function compararDeclaracoes() {
    // Usando var
    var linguagem = 'JavaScript'
    var linguagem = 'Python'
    console.log('var:', linguagem) // Python

    // Usando let
    let ano = 2024
    // let ano = 2025 ➡️ Erro! Não pode redeclarar com let
    ano = 2025  // ok, pode reatribuir
    console.log('let:', ano) // 2025

    // Usando const
    const planeta = 'Terra'
    // planeta = 'Marte' ➡️ Erro! Não pode reatribuir
    console.log('const:', planeta) // Terra

    if (true) {
        var linguagem = 'C++'   // mesmo escopo da função
        let ano = 2026          // novo escopo (dentro da função)
        const planeta = 'Marte' // novo escopo (dentro da função)
        console.log('Dentro do bloco:')
        console.log('var:', linguagem)  // C++
        console.log('let:', ano)    // 2030
        console.log('const:', planeta) // Marte
    }

    console.log('Fora do bloco:')
    console.log('var:', linguagem)  // C++ (alterado pelo bloco - global)
    console.log('let:', ano)        // 2025 (separado do bloco if)
    console.log('const:', planeta)  // Terra (sem modificação)
}
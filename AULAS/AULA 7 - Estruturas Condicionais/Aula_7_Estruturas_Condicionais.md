# Condições em JS

## Introdução

As estruturas condicionais permitem que o código tome decisões baseadas em condições específicas, executando diferentes blocos de código.

## If Else

O if else basicamente cosiste em uma chave seletora, ele verifica a condição caso não seja aquela ele passa para próxima até encontrar a alternativa que satisfaça a condição, caso não haja nenhuma pode ser usado o else para mostrar que as alternativas não atenderam a condição.

Esturura básica do if else >>>

```bash

if (condição) {
    // Codigo para a condição
} if else (condição) {
    // Codigo para a condição
} else {
    // Codigo para a condição
}

```

Exemplo1:

```bash

Descrição: O dia da semana é definido,
através da variável com o número correspondente,
e o programa procura uma alternativa que mostra
o dia que bate com o número 

let dia = 4

if (dia === 1) {
    console.log("Domingo")
} if else (dia === 2) {
    console.log("Segunda")
} if else (dia === 3) {
    console.log("Terça")
} if else (dia === 4) {
    console.log("Quarta")
} if else (dia === 5) {
    console.log("Quinta")
} if else (dia === 6) {
    console.log("Sexta")
} if else (dia === 7) {
    console.log("Sábado")
} else {
    console.log("Dia inválido")
}


```
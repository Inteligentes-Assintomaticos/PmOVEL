# Aula 8 - Estruturas de repetição em JS

## Índice
- Introdução
- While
- For

## Introdução

As esturas de repetição permitem que um código seja executado um determinado número de vezes com base em alguma condição.

## While

O while executa um bloco de código enquanto uma condição for verdadeira. Ele primeiro testa a condição, se for falsa logo de início ele não executa o bloco.

É útil quando não se sabe a quantidade de condições necessárias, podendo ser encerrado quando quiser.

Sintaxe básica:

```js

while (condicao) {
    // código a ser executado
}

```

Exemplo prático:

```js

let contador = 1;

while (contador <= 5) {
    console.log(`Número: ${contador}`);
    contador ++
    // ou += 1,2,3,etc...
}

```

Cuidados:
- Loop infinito se a condição não se tornar falsa;
- Esquecer de atualizar as variáveis de controle;

## For

O for é um loop que concentra em uma linha: incialização, condição e incremento (famoso "passo"). É ideal quando sabemos a quantidade de vezes que queremos executar um bloco de código. Ideal quando queremos, por exemplo, percorrer um array, contar de 1 a 100.

Sitaxe básica:

```js

for (incialização; condição; incremento) {
    //código repedito
}

```

Exemplo prático:

```js

// Exemplo 1: Nº de Interações.

for (let i = 0; i < 5; i++) {
    console.log(`Interação ${i}`);
}

// Exemplo 2: Percorrendo um array.

const frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

```

Break e continue:

```js

// Break: sai do loop.

for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0,1,2,3,4.
}

// Continue: pula para próxima interação

for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0,1,3,4 (pulou o 2)
}

```
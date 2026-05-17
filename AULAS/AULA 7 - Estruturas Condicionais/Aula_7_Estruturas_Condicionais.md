# Condições em JS

## Introdução

As estruturas condicionais permitem que o código tome decisões baseadas em condições específicas, executando diferentes blocos de código.

## If Else

O if else basicamente cosiste em uma chave seletora, ele verifica a condição caso não seja aquela ele passa para próxima até encontrar a alternativa que satisfaça a condição, caso não haja nenhuma pode ser usado o else para mostrar que as alternativas não atenderam a condição.

Esturura básica do if else >>>

Exemplos comentados:

```js

// if simples

if (condicao) {
    // código se verdadeiro
}

// if...else

if (condicao) {
    // codigo se verdadeiro
} else {
    // codigo se falso
}

// if...if else... else...

if (condicao1) {
    // codigo se condicao1 for verdadeira
} else if (condicao2) {
    // codigo se condicao2 for verdadeira
} else {
    // codigo se nenhuma condicao for verdadeira
}


```

Exemplos práticos:

```js

// Exemplo 1: Verificando idade

let idade = 18

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Exemplo 2: Verificando nota

let nota = 8

if (nota === 10) {
    console.log("Conceito A")
} else if (nota >= 6) {
    console.log("Coneceito B")
} else if (nota >= 0) {
    console.log("Conceito C")
} else {
    console.log("Invalido")
}

```

Estruturas avançadas:

```js

// if sem chaves ( só funciona em uma linha, não é recomendado)

if (condicao) console.log("Executa");

// !!! Atenção

if (condicao)
    console.log("Executa");
    console.log("Vai executar sempre, pois não está dentro do if!")


// if aninhado (nested if)

let usuarioLogado = true
let admin = true
let idade = 25

if (usuarioLogado) {
    if (admin) {
        console.log("Acesso total ao sistema");
        if (idade >= 18) {
            console.log("Pode acessar conteúdo adulto!");
        }
    }
    else {
        console.log("Acesso limitado");
    }
} else {
    console.log("Faça login primeiro!")
}


```
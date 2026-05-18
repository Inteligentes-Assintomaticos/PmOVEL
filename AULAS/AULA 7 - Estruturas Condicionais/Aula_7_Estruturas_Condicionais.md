# Condições em JS

## Introdução

As estruturas condicionais permitem que o código tome decisões baseadas em condições específicas, executando diferentes blocos de código.

## If Else

O if else basicamente cosiste em uma chave seletora, ele verifica a condição caso não seja aquela ele passa para próxima até encontrar a alternativa que satisfaça a condição, caso não haja nenhuma pode ser usado o else para mostrar que as alternativas não atenderam a condição.

Sintaxe básica:

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

## Switch Case

Switch case também é uma estrutura condicional, porém diferente do if else ele pega como base um valor e vai comparando com vários casos, e aquele caso que for igual ao valor executará o código descrito, podendo-se usar o deafault caso nenhum valor seja aceito.

Sintaxe básica:

```js

switch (expressao) {
    case valor1:
        //código
        break
    case valor2:
        //código
        break
    case valor3:
        //código
        break
    default:
        //código caso nenhum corresponda
}

```

Exemplos práticos:

```js
//Exemplo 1: Dias da semana

let dia = 3
let nomeDia;

switch (dia) {
    case 1: 
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda";
        break;
    case 3:
        nomeDia = "Terça"
        break;
    case 4:
        nomeDia = "Quarta";
        break;
    case 5:
        nomeDia = "Quinta";
        break;
    case 6:
        nomeDia = "Sexta";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido"
}

console.log(nomeDia)
// >>> Terça

// Exemplo 2: Múltiplos casos (falltrought intencional)

let mes = 2;
let estacao;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacao = "Verão";
        break;
    case 3:
    case 4:
    case 5:
        estacao = "Outono";
        break;
    case 6:
    case 7:
    case 8:
        estacao = "Inverno";
        break;
    case 9:
    case 10:
    case 11:
        estacao = "Primavera";
        break;
    default:
        estacao = "Mês inválido"
}

console.log(estacao);
// >>> Verão

// Exemplo 3: Usando strings e placeholder

let fruta = "maçã";
let preco;

switch (fruta) {
    case "maçã":
        peco = 3.50;
        break;
    case "banana":
        preco = 2.00;
        break;
    case "laranja":
        preco = 4.00;
        break;
    default:
        preco = 0
        console.log("Fruta não encontrada!")
}

console.log(`O preço da ${fruta} é R$ ${preco}.`)
// >>> O preço da maçã é R$ 3.50.

```

!Atenção:

```js
// Cuidado com o break

let valor = 2

switch (valor) {
    case 1:
        console.log("Um");
    case 2:
        console.log("Dois");
    case 3:
        console.log("Três");
        break;
    default:
        console.log("Outro valor")
}

// Saída:
// Dois
// Três

```
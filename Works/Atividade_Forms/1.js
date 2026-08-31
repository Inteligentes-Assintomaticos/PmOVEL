// QUESTÃO 1

let x = 10;
let y = 3;

x = x + y;
x = x * 2;
let resultado = x-y;

console.log(x)
console.log(resultado)

// QUESTÃO 2
let numero = 20;
numero += 5;
numero -= 3;
numero *=2;
numero /= 2;

console.log(numero);

// QUESTÃO 3

let a = 15;
let b = 10;

let resultado1 = (a > b) && (a < 20);

console.log(resultado1);

// QUESTÃO 4 

let idade = 20;
let possuiIngresso = true;
let entrada = (idade >= 18) && possuiIngresso;

console.log(entrada);

// QUESTÃO 5

let nota = 7;
let frequencia = 80;
nota += 1;
frequencia -= 10;
let resultado2 = (nota >= 7) && (frequencia >= 75);

console.log(resultado2)

// QUESTÃO 6

let idad = 17;
idad += 2;
let resultado3 = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado3);

// QUESTÃO 7

let aa = 8;
let bb = 4;
aa += bb;
bb *= 2
aa -= bb;
aa += 5;

let resultado4 = aa > bb;

console.log(aa);
console.log(bb);
console.log(resultado4);

// QUESTÃO 8

let xx = 6;
let yy = 4;
xx *= 2
yy += 3
let soma = xx + yy;
let resultado5 = soma >= 20 ? 'Aprovado' : 'Reprovado';

console.log(soma);
console.log(resultado5);

// QUESTÃO 9

let numeros = [2,4,6,8];

let soma1 = 0;

numeros.forEach(function(numero) {
soma1 += numero; });

console.log(soma1);

// QUESTÃO 10

let valores = [3,5,7,9];
let resultado6 = 0;
valores.forEach(function(valor) {
    resultado6 += valor*2;
})

console.log(resultado6)
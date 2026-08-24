// FELIPE GABRIEL ARAÚJO DE FREITAS - 523


// Operadores relacionais
// Operador == (igual a)

let a = 5
let b = '5'
console.log(a == b) // true, porque os valores são iguais, mesmo que os tipos sejam diferentes

// Operador === (valor igual e tipo igual)
console.log(a === b)    // false, porque os valores são iguais, mas os tipos são diferentes (number e string)


// Operador != (diferente)
let c = 10
console.log(c != '10')  // false, porque os valores são iguais, mesmo que os tipos sejam diferentes

// Operador !== (valor diferente e tipo diferente)
console.log(c !== '10') // true, porque ps toṕs são diferentes, mesmo que os valores sejam iguais

// Operador > (maior que)
let d = 15;
console.log(d > 10); // true, porque 15 é maior que 10

// Operador < (menor que)
console.log(d < 20); // true, porque 15 é menor que 20

// Operador >= (maior que ou igual a)
let e = 7;
console.log(e >= 7); // true, porque 7 é igual a 7

// Operador <= (menor que ou igual a)
console.log(e <= 8); // true, porque 7 é menor ou igual a 8





// Operador ternário ?
// Exemplo 1: Verificação de maioridade
let idade = 20;
let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log("Status de maioridade:", resultado); // "Maior de idade", porque a idade é 20

// Exemplo 2: Verificação de número par ou ímpar
let numero = 7;
let tipo = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log("O número é:", tipo); // "Ímpar", porque 7 é ímpar

// Exemplo 3: Verificação de saldo para compra
let saldo = 150;
let valorCompra = 200;
let podeComprar = (saldo >= valorCompra) ? "Compra aprovada" : "Saldo insuficiente";
console.log("Status da compra:", podeComprar); // "Saldo insuficiente", porque o saldo é menor que o valor da compra






//Operadores aritméticos
// Operador + (Soma)
let x = 10;
let y = 5;
let addition = x + y;
console.log("Adição:", addition); // 15

// Operador - (Subtração)
let subtraction = x - y;
console.log("Subtração:", subtraction); // 5

// Operador * (Multiplicação)
let multiplication = x * y;
console.log("Multiplicação:", multiplication); // 50

// Operador ** (Exponenciação)
let exponentiation = x ** 2;
console.log("Exponenciação:", exponentiation); // 100

// Operador / (Divisão)
let division = x / y;
console.log("Divisão:", division); // 2

// Operador % (Módulo)
let modulus = x % y;
console.log("Módulo:", modulus); // 0

// Operador ++ (Incremento)
let z = 7;
z++;
console.log("Incremento:", z); // 8

// Operador -- (Decremento)
z--;
console.log("Decremento:", z); // 7






//Operadores de atribuição
// Operador de atribuição simples (=)
let g = 10;
console.log("Atribuição simples:", g); // 10

// Operador de atribuição com adição (+=)
g += 5; // Equivalente a: a = a + 5
console.log("Atribuição com adição:", g); // 15

// Operador de atribuição com subtração (-=)
g -= 3; // Equivalente a: a = a - 3
console.log("Atribuição com subtração:", g); // 12

// Operador de atribuição com multiplicação (*=)
g *= 2; // Equivalente a: a = a * 2
console.log("Atribuição com multiplicação:", g); // 24

// Operador de atribuição com divisão (/=)
g /= 4; // Equivalente a: a = a / 4
console.log("Atribuição com divisão:", g); // 6

// Operador de atribuição com módulo (%=)
g %= 4; // Equivalente a: a = a % 4
console.log("Atribuição com módulo:", g); // 2

// Operador de atribuição com exponenciação (**=)
g **= 3; // Equivalente a: a = a ** 3
console.log("Atribuição com exponenciação:", g); // 8






//Operadores lógicos
// Variáveis para demonstração
let m = true;
let n = false;
let p = 10;
let q = 20;

// Operador AND (&&)
let andResult = m && n;
console.log("AND (true && false):", andResult); // false, porque ambos os operandos não são verdadeiros

// Operador OR (||)
let orResult = m || n;
console.log("OR (true || false):", orResult); // true, porque pelo menos um dos operandos é verdadeiro

// Operador NOT (!)
let notResult = !m;
console.log("NOT (!true):", notResult); // false, porque inverte o valor booleano

// Combinação de operadores lógicos
let complexResult = (p < q) && (m || n);
console.log("Exemplo: ((10 < 20) && (true || false)):", complexResult); // true, porque 10 é menor que 20 e a expressão OR é verdadeira

// Mais um exemplo com operadores lógicos
let r = 5;
let s = 15;
let complexResult2 = (r > 0) && (s > 10) || !b;
console.log("Outro exemplo: ((5 > 0) && (15 > 10) || !false):", complexResult2); // true, porque todas as condições são verdadeiras






//For Each
/*
Questão 1: Você tem uma lista de nomes ["Ana", "Beto", "Carlos", "Diana"].
Use for e forEach para exibir uma saudação
personalizada para cada pessoa.
*/

const nomes = ["Ana", "Beto", "Carlos", "Diana"];
for (let i = 0; i < nomes.length; i++) {
    console.log(`Olá, ${nomes[i]}!`); // Exibe uma saudação para cada nome
}

const nomes2 = ["Ana", "Beto", "Carlos", "Diana"];
nomes2.forEach(nome => {console.log(`Olá, ${nome}!`); }); // Exibe uma saudação para cada nome


/*
Questão 2: Dado um array de números [3, 5, 7, 9, 11], use forEach para calcular o dobro de
cada número e armazená-los em um novo array.
*/
const numeros = [3, 5, 7, 9, 11];
let dobro = [];

numeros.forEach(numero => {dobro.push(numero * 2); }); // Adiciona o dobro do número ao novo array
console.log("Dobros:", dobro); // Exibe [6, 10, 14, 18, 22]


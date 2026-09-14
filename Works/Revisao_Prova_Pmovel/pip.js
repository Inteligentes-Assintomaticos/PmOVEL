//1 

function calcularResultado(a,b) {
    let soma = a + b;
    let subt = a - b;
    let mult = a * b;
    let pote = a ** b;
    let rest = a % b;

    return soma + subt + mult + pote + rest
};


let resultado = calcularResultado(5, 2);
console.log('Resultado:', resultado)


//2

function calcular(a, b) {
    return (a + b) * 2 - a ** b + a % b
};

let resultado1 = calcular(3, 2);
console.log('Resultado:', resultado1);

//3

let c = 10;
let d = '10';

console.log(c == d);
console.log(c === d);
console.log(c != d);
console.log(c !== d);

//4

let x = 5;
let y = '5';

let resultado2 = (x === y) || (x !=y );
console.log('Resultado: ', resultado2);

//5

let temIngresso = true;
let temDocumento = false;

let podeEntrar = temIngresso && temDocumento;
let podeEsperar = temIngresso || temDocumento;
let naoTemDocumento = !temDocumento;

console.log('Pode entrar: ', podeEntrar);
console.log('Pode esperar: ', podeEsperar);
console.log('Não tem documento: ', naoTemDocumento);

//6

let e = true;
let f = false;
let g = true;

let resultado3 = (e && f) || g;
console.log('Resultado: ', resultado3);

//7

let idade = 20;
let temCarteira = true;

let podeDirigir = idade >= 18 && temCarteira;
console.log('Pode dirigir?: ', podeDirigir);

//8 

let nota = 7;
let frequencia = 80;

let aprovado = nota >= 6 && frequencia >= 75;
console.log('Aprovado?: ', aprovado);

//9

numeros = [10,20,30,40]

numeros.forEach((numero, index) => {
    console.log(`Posição ${index}: ${numero}`)
});

//10

let nomes = ['Ana', 'Bruno', 'Carlos'];

nomes.forEach((nome, index) => {
    console.log(index + ' - ' + nome)
})


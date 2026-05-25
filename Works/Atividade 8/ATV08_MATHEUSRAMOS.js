// Arrays
let pessoa = []

pessoa[0] = 'Carlos'
pessoa[1] = 'Silva'
pessoa[2] = 46

let x = pessoa.length //pessoa.length return 3
let y = pessoa[0] //pesssoa[0] returns "Carlos"

console.log(x)
console.log(y)

// Função lenght

let frutas = ['laranja', 'maçã', 'banana', 'uva', 'caju']
console.log(frutas)
console.log(frutas.length) // Verificar quantos elementos há no array

// Função push

frutas.push('pera') // inserir elemento no array
console.log(frutas)

// Função pop

let novaFruta = frutas.pop() //remove elemento do array
console.log(novaFruta)
console.log(frutas)

// Função unshift

frutas.unshift('abacaxi') //inserir elemento no inicio do array
console.log(frutas)

// Função indexOf

let index = frutas.indexOf('uva') // retorna o index do elemento no array
console.log(index)

// Função splice

frutas.splice(0, 2) // remove um ou mais elementos do array
console.log(frutas)

// Função slice

let copiaArray = frutas.slice(0, 2) //cria uma cópia do array
console.log(copiaArray)

// Função concat

let novaArray = frutas.concat(copiaArray) //concatena dois arrays
console.log(novaArray)

// Função includes

let frutaEncontrada = frutas.includes('maçã') //verifica se um elemento 
console.log(frutaEncontrada) //retorna true ou false

// Função sort

let frutasOrdenadas = frutas.sort() //ordena os elementos do array
console.log(frutasOrdenadas)

let numeros = [101, 100, 24, 89, 3]

let ordenados1 = numeros.sort() //ordena os elementos do array numérico
console.log(ordenados1)         //contudo não fica em ordem crescente.

function ordenar(array) {                   //aqui é criada uma função ordenar que retornará a função sort
    return array.sort((a,b) => a - b);      //a função sort recebe como parâmetro uma função flecha que compara os valores
}                                           //para ordenar de forma crescente.

ordenar(numeros)
console.log(numeros)
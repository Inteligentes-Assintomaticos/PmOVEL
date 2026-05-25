// Arrays

let pessoa = []

pessoa[0] = 'Carlos'
pessoa[1] = 'Silva'
pessoa[2] = 46


// ---------------------------------------------------


let x = pessoa.length   // número de elementos do array
let y = pessoa [0]

console.log(x)
console.log(y)


// ---------------------------------------------------


let frutas = ['laranja', 'maçã', 'banana', 'uva', 'caju']

console.log(frutas)
console.log(frutas.length)      // número de elementos


// ---------------------------------------------------


frutas.push('pera')             // inserir elemento no final do array
console.log(frutas)


// ---------------------------------------------------


let novaFruta = frutas.pop()    // remover o último elemento do array
console.log(novaFruta)
console.log(frutas)


// ---------------------------------------------------


frutas.unshift('abacaxi')       // inserir elemento no início do array
console.log(frutas)


// ---------------------------------------------------


let index = frutas.indexOf('uva')    // retorna index do elemento
console.log(index)


// ---------------------------------------------------


frutas.splice(0,2)                  // remove n elementos a partir de um ponto  ➡️ primeiro parâmetro é o elemento inicial e o segundo é a quantidade
console.log(frutas)


// ---------------------------------------------------


let copiaArray = frutas.slice(0,2)   // cria uma copia a partir de um ponto
console.log(copiaArray)


// ---------------------------------------------------


let novaArray = frutas.concat(copiaArray)   // concatena arrays
console.log(novaArray)


// ---------------------------------------------------


let frutaEncontrada = frutas.includes('maça')   // verifica se existe ➡️ retorna true ou false
console.log(frutaEncontrada)


// Arrays
let pessoa = []

pessoa[0] = 'Carlos'
pessoa[1] = 'Silva'
pessoa[2] = 46

let x = pessoa.length //pessoa.length return 3
let y = pessoa[0] //pesssoa[0] returns "Carlos"

console.log(x)
console.log(y)

let frutas = ['laranja', 'maçã', 'banana', 'uva', 'caju']
console.log(frutas)
console.log(frutas.length) // Verificar quantos elementos há no array

frutas.push('pera') // inserir elemento no array
console.log(frutas)

let novaFruta = frutas.pop() //remove elemento do array
console.log(novaFruta)
console.log(frutas)

frutas.unshift('abacaxi') //inserir elemento no inicio do array
console.log(frutas)

let index = frutas.indexOf('uva') // retorna o index do elemento no array
console.log(index)

frutas.splice(0, 2) // remove um ou mais elementos do array
console.log(frutas)

let copiaArray = frutas.slice(0, 2) //cria uma cópia do array
console.log(copiaArray)

let novaArray = frutas.concat(copiaArray) //concatena dois arrays
console.log(novaArray)

let frutaEncontrada = frutas.includes('maçã') //verifica se um elemento 
console.log(frutaEncontrada) //retorna true ou false
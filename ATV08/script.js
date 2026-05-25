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


// ---------------------------------------------------


let frutasOrdenadas = frutas.sort()     // onderna os elementos
console.log(frutasOrdenadas)


// ---------------------------------------------------


let numeros = [101, 100, 24, 89, 3]

let ordenados1 = numeros.sort()     // considera apenas o primeiro dígito ➡️ não ordena pelo valor (como se fosse ordem alfabética)
console.log(ordenados1)


function ordenar(array) {               // a função sort recebe uma função para ordenar corretamente
    return array.sort((a,b) => a - b)
}
ordenar(numeros)
console.log(numeros)


// ---------------------------------------------------


let frutasReversa = frutas.reverse()    // inverte a ordem dos elementos
console.log(frutasReversa)


// ---------------------------------------------------


let frutasFiltradas = frutas.filter(fruta => fruta.includes('u'))   // filtras os elementos ➡️ no caso apenas elementos com a letra 'u'
console.log(frutasFiltradas)


// ---------------------------------------------------


var estados = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Rio Grande do Norte', 'Santa Catarina', 'Acre']

function retornaEstado(value) {         // busca os elementos que começam com 'S
    if (value.charAt(0) == 'S') {
        return value
    }
}

var resultado = estados.filter(retornaEstado)
console.log(resultado)


// ---------------------------------------------------


let frutasMap = frutas.map(fruta => fruta + "!!")       // cria um novo array modificado
console.log(frutasMap)


// ---------------------------------------------------


let animais = ['CACHORRO', 'gAto', 'passarinho', 'cOELHO', 'Leão']

for (let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}




for (let i = 0; i < animais.length; i++) {      // deixa tudo minúsculo 
    console.log(animais[i].toLowerCase())
}


// ---------------------------------------------------


animais.map(function(animal) {              // deixa tudo maiúsculo
    return console.log(animal.toUpperCase())
})


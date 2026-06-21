
// FUNCIONA EM STRING E ARARY

// length - retorna o número de elementos/caracteres


let ex1 = ['Felipe', 'Murilo', 'Matheus']
console.log(ex1.length)                     // retornar o número de elementos da lista


let ex1_1 = 'Felipe'
console.log(ex1_1.length)                  // retorna o número de caracteres da palavra




// indexOf() - retorna o índice


let ex2 = ['Felipe', 'Murilo', 'Matheus', 'Felipe']
console.log(ex2.indexOf('Felipe'))           // retorna o índice do valor
console.log(ex2.indexOf('Paulo'))            // caso não encontrado, retorna '-1'


let ex2_1 = 'Programação é massa muito massa'
console.log(ex2_1.indexOf('massa'))

// o índice retornado é a primeira ocorrência apenas





// includes() - verifica se existe (true or false)

let ex3 = ['Felipe', 'Murilo', 'Matheus']
console.log(ex3.includes('Felipe'))         // verifica se existe aquele elemento no array

let ex3_1 = 'Felipe é doido'
console.log(ex3_1.includes('doida'))        // verifica se existe aquele caracter na string





// slice() - corta uma parte do array/string


let ex4 = ['Felipe', 'Murilo', 'Matheus', 'Paulo', 'Louis', 'Miguel', 'Nando']
console.log(ex4.splice(1,2))                // pega uma parte da string
console.log(ex4)                            // resta apenas o que não foi cortado

console.log(ex4.splice(2))                  // ao não definir o segundo parâmetro, ele pega todo o restante do array
                                            // ao colocar um valor alto no segundo parâmetro ocorre o mesmo







// FUNCIONA APENAS EM ARRAYS                                            


// push() - coloca elemento(s) no final do array

let ex5 = ['Felipe', 'Murilo', 'Matheus']
ex5.push('Paulo','Louis')                   // add no final do array
console.log(ex5.push('Miguel','Nando'))     // retorna o número de elementos após adicionar o(s) novo(s) elemento(s)
console.log(ex5)



// unshift() - coloca elemento(s) no início do array


let ex6 = ['Felipe', 'Murilo', 'Matheus']
ex6.unshift('Paulo', 'Louis')                   // add no início do array
console.log(ex6)





// pop() - remove o último elemento do array


let ex7 = ['Felipe', 'Murilo', 'Matheus']
console.log(ex7.pop())                      // remove o último elemento do array e retorna o elemento removido
console.log(ex7)



// shift() - tira o primeiro elemento do array


let ex8 = ['Felipe', 'Murilo', 'Matheus']
console.log(ex8.shift())                    // remove o primeiro elemento do array e retorna o elemento removido
console.log(ex8)



// splice() - 
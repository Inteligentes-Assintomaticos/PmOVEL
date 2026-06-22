
// ___FUNCIONA EM STRING E ARARY___



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
console.log(ex2_1.indexOf('massa'))             // o índice retornado é a primeira ocorrência apenas




// includes() - verifica se existe (true or false)

let ex3 = ['Felipe', 'Murilo', 'Matheus']
console.log(ex3.includes('Felipe'))         // verifica se existe aquele elemento no array

let ex3_1 = 'Felipe é doido'
console.log(ex3_1.includes('doida'))        // verifica se existe aquele caracter na string



// slice() - corta uma parte do array/string

let ex4 = ['Felipe', 'Murilo', 'Matheus', 'Paulo', 'Louis', 'Miguel', 'Nando']
console.log(ex4.slice(0,2))                // 1° parâmetro: define o elemento de ínicio
                                           // 2° parâmetro: define o elemento final (não inclui ele)

console.log(ex4)                           // não altera nada aqui

console.log(ex4.slice(3))                  // ao não definir o segundo parâmetro, ele pega todo o restante do array
                                           // ao colocar um valor alto no segundo parâmetro ocorre o mesmo

let ex4_1 = 'Felipe'
console.log(ex4_1.slice(1,5))




// concat() - junta elementos/strings

let ex5 = 'Felipe'
let ex5_1 = ' e Murilo'
console.log(ex5.concat(ex5_1))


let ex5_2 = [4, 5, 6]
let ex5_3 = [1, 2, 3]
console.log(ex5_3.concat(ex5_2))















// ___FUNCIONA APENAS EM ARRAYS___                                          



// push() - coloca elemento(s) no final do array

let ex6 = ['Felipe', 'Murilo', 'Matheus']
ex6.push('Paulo','Louis')                   // add no final do array
console.log(ex6.push('Miguel','Nando'))     // retorna o número de elementos após adicionar o(s) novo(s) elemento(s)
console.log(ex6)




// unshift() - coloca elemento(s) no início do array

let ex7 = ['Felipe', 'Murilo', 'Matheus']
ex7.unshift('Paulo', 'Louis')                   // add no início do array
console.log(ex7)




// pop() - remove o último elemento do array

let ex8 = ['Felipe', 'Murilo', 'Matheus']
console.log(ex8.pop())                      // remove o último elemento do array e retorna o elemento removido
console.log(ex8)



// shift() - tira o primeiro elemento do array

let ex9 = ['Felipe', 'Murilo', 'Matheus']
console.log(ex9.shift())                    // remove o primeiro elemento do array e retorna o elemento removido
console.log(ex9)



// splice() - remove, adiciona ou substitui elementos em qualquer posição do array

let ex10 = ['Felipe', 'Murilo', 'Matheus']

ex10.splice(0,1,'Louis')                    // 1° parâmetro: posição de início
                                            // 2° parâmetro: número de elementos que serão excluidos a partir da posição inicial
                                            // 3° parâmetro em diante: elementos que serão adicionados
console.log(ex10)

console.log(ex10.splice(2,1,'Paulo','Nando'))    // retorna o(s) valor(es) removido(s)
console.log(ex10)



// sort() - coloca a lista em ordem alfabética ou crescente

let ex11 = ['CA', 'D', 'B', 'CB']
console.log(ex10.sort())            // coloca em ordem alfabética


let ex11_1 = [1, 30, 5, 7, 0]
console.log(ex11_1.sort())          // coloca em ordem crescente, mas só considera o primeiro número



// reverse() - inverte a ordem do array

let ex12 = [1, 2, 3, 4, 5]
console.log(ex12.reverse())     // inverte o array



// map() - passa por cada elemento do array, modificando de acordo com a função passada

let ex13 = [1, 2, 3, 4, 5]

ex12 = ex13.map(num => num * 3)         // passa por cada elemento e executa essa arrow fuction
console.log(ex13)




// filter() - filta um array, deixando apenas os elemetos do filtro

let ex14 = [1, 2, 3, 4, 5, 6, 7, 8]

ex13 = ex14.filter(num => num > 5)      // deixa apenas o elementos que passam por esse filtro (que é uma arrow fuction)
console.log(ex14)














// ___FUNCIONA APENAS EM STRINGS___



// toUpperCase() - deixa tudo maiúsculo

let ex15 = 'felipe'
console.log(ex15.toLocaleUpperCase())



// toLowerCase() - deixa tudo minúsculo

let ex16 = 'FeLIpE'
console.log(ex16.toLocaleLowerCase())




// trimStart() - remove espaços em branco do início da string

let ex17 = '   Felipe   '
console.log(ex17.trimStart())



// trimEnd() - remove espaços em branco do final da string

let ex18 = '   Felipe   '
console.log(ex18.trimEnd())



// trim() - remove espaços em branco do início e final da string

let ex19 = '   Felipe   '
console.log(ex19.trim())




// replace() - substitui elementos do array

let ex20 = 'Felipe'

ex20 = ex20.replace('e', 'i')           // substitui apenas a primeira ocorrência
console.log(ex20)

console.log(ex20.replaceAll('i', 'e'))  // replaceAll(): substitui todas as ocorrências



// charAt() - retorna o caracter ao passar o índice

let ex21 = 'Felipe'
console.log(ex21.charAt(2))



// split() - transforma uma string em um array

let ex22 = 'Felipe,Matheus,Murilo'
ex22 = ex22.split(",")                  // quebra onde tem o caracter passado e separa os elementos
console.log(ex22)

let ex22_1 = 'Felipe, Matheus, Murilo'
console.log(ex22_1.split(""))           // quando não tem nada, separa tudo


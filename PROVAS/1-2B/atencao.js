// slice (fatiar) x splice (emendar) x split (dividir)



// STRING E ARRAY

// slice() - corta uma parte do array/string

let ex4 = ['Felipe', 'Murilo', 'Matheus', 'Paulo', 'Louis', 'Miguel', 'Nando']
console.log(ex4.slice(0,2))                // 1° parâmetro: define o elemento de ínicio
                                           // 2° parâmetro: define o elemento final (não inclui ele)

console.log(ex4)                           // não altera nada aqui

console.log(ex4.slice(3))                  // ao não definir o segundo parâmetro, ele pega todo o restante do array
                                           // ao colocar um valor alto no segundo parâmetro ocorre o mesmo

let ex4_1 = 'Felipe'
console.log(ex4_1.slice(1,5))




// ARRAY

// splice() - remove, adiciona ou substitui elementos em qualquer posição do array

let ex10 = ['Felipe', 'Murilo', 'Matheus']

ex10.splice(0,1,'Louis')                    // 1° parâmetro: posição de início
                                            // 2° parâmetro: número de elementos que serão excluidos a partir da posição inicial
                                            // 3° parâmetro em diante: elementos que serão adicionados
console.log(ex10)

console.log(ex10.splice(2,1,'Paulo','Nando'))    // retorna o(s) valor(es) removido(s)
console.log(ex10)




// STRING

// split() - transforma uma string em um array

let ex22 = 'Felipe,Matheus,Murilo'
ex22 = ex22.split(",")                  // quebra onde tem o caracter passado e separa os elementos
console.log(ex22)

let ex22_1 = 'Felipe, Matheus, Murilo'
console.log(ex22_1.split(""))  
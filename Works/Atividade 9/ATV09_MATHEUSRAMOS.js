// Matheus Ramos Lima da Silva
// 523

palavra = 'Programação'
palavra2 = 'Móvel'
palavra3 = '    Móvel'

//Exemplo 1
console.log("Exemplo 1");
console.log(palavra.length) //tamanho da string
console.log(palavra[0]) //acessa uma posição da string
console.log(palavra[10])
console.log(palavra[11])

console.log(palavra.at(0)) //acessa uma posição da string
console.log(palavra.at(10))

console.log(palavra.charCodeAt(0)) //acessa o valor do caractere na tabela ASCII

console.log(palavra.slice(0, 3)) //copia um trecho da string, os parmetros representam o intervalo

console.log(palavra.substring(0, 5)) // retorna um trecho da string

console.log(palavra.toUpperCase())

console.log(palavra.toLowerCase())

console.log(palavra.concat(' ' + palavra2)) //une strings

//Exemplo 2

console.log('Exemplo2')
// Declare uma variável
let text = 'palavra'
//Adicione zeros à esquerda até que a string tenha 9 caracteres
text = text.padStart(9, '0')
//Adicione pontos à direita até que a string tenha 12 char
text = text.padEnd(12, '.')
//Repita a string três vezes
text = text.repeat(3)
//Substitua o primeiro '1' por 'um'
text = text.replace('p', 'P')
//Exiba o resultado
console.log(text)

//Exemplo 3

console.log('Exemplo 3')
//Declare uma variável
let text2 = "Programação móvel é massa."
//Substitua todas as ocorrências de "massa" por "legal"
text2 = text2.replace('massa', 'legal')
//Substitua todas as ocorrências de "a" por "A"
text2 = text2.replaceAll('a', 'A')
//Divida a string resultante em um array de palavras
let array = text2.split(" ")
//Exiba o resultado
console.log(array)
//Coonverter o array para string
arrayTeste = array.toString()
//Subistituir as vírgulas do array para espaços
arrayTeste = arrayTeste.replaceAll(',',' ')

console.log(arrayTeste)

//Exemplo 4
console.log('Exemplo 4')
//Declare uma variável
let text3 = " palavra "
//Remova os espaços em branco apenas no início da string usando trimStart()
let auxiliar1 = text3.trimStart()
//Remova os espaços em branco apenas no final da string usando trimEnd()
let auxiliar2 = text3.trimEnd()
//Remova os espaços em branco do início e do fim da string
let auxiliar3 = text3.trim()
//Exiba os resultados
console.log('Original string: '+text3)
console.log('Depois de trimStart: '+auxiliar1)
console.log('Depois de trimEnd: '+auxiliar2)
console.log('Depois de trim: ' +auxiliar3)

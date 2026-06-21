palavra = 'Programação'
palavra2 = 'Móvel'
palavra3 = '    Móvel'


// Exemplo 1

console.log('Exemplo 1')

console.log(palavra.lenght)     // tamanho da string

console.log(palavra[0])     // acessar uma posição da string
console.log(palavra[10])
console.log(11)

console.log(palavra.at(0))  // acessar uma posição da string
console.log(palavra.at(10))


console.log(palavra.charCodeAt(0))   // acessar o valor do caractere na tabela ASCII

console.log(palavra.slice(0,3))     // copia um trecho da string

console.log(palavra.substring(0,5)) // retorna um trecho da string

console.log(palavra.toUpperCase())  // deixa tudo MAIÚSCULO

console.log(palavra.toLowerCase())  // DEIXA TUDO minúsculo

console.log(palavra.concat(" " + palavra2))


// Exemplo 2

console.log('Exemplo 2')

let text = 'palavra'    // variável

text = text.padStart(9,'0') // adiciona zeros no início até que a string alcance 9 caracteres

text = text.padEnd(12,'.')  // adiciona pontos no final até que a string alcance 12 caracteres

text = text.repeat(3)   // repete a string 3 vezes

text = text.replace('p','P')    // substitui o primeiro p por P

console.log(text)


// Exemplo 3

console.log('Exemplo 3')

let text2 = 'Programação móvel é massa.'

text2 = text2.replace('massa','legal')  // substitui massa por legal

text2 = text2.replaceAll('a','A')       // substitui todas as correspondências de "a" por "A"

let array = text2.split(' ')        // transforma em um array de palavras

console.log(array)


arrayTeste = array.toString()   // converte o array para string

arrayTeste = arrayTeste.replaceAll(',',' ')     // substitui as vírgulas por espaços

console.log(arrayTeste)


// Exemplo 4

console.log('Exemplo 4')

let text3 = '   palavra    '


let auxiliar1 = text3.trimStart()   // remove espaços em branco do início da string

let auxiliar2 = text3.trimEnd()     // remove espaços em branco do final da string

let auxiliar3 = text3.trim()        // remove os espaços em branco do início e final da string


console.log("Original String: '" + text3 + "'")
console.log("Depois de trimStart: '" + auxiliar1 + "'")
console.log("Depois de trimEnd: '" + auxiliar2 + "'")
console.log("Depois de trim: '" + auxiliar3 +"'")


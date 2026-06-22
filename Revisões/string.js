//Revisão para 1ª prova do 2º bimestre
//Arrays

let name = 'Matheus';

//A função length mostra a quantidade de caracteres
console.log(name.length);

//A função toUpperCase passa tudo pra maiúsculo
console.log(name.toUpperCase());

//A função toLowerCase passa tudo pra minúsculo
console.log(name.toLowerCase());

//A função trim tira os espaços em branco
let nominho = ' Olá Mundo! ';

console.log(nominho.trim());
console.log(nominho.trimStart());
console.log(nominho.trimEnd());

//A função includes verifica se contém
let js = "I love JavaScript";
console.log(js.includes('JavaScript'));

//A função startswith verifica se começa com
console.log(js.startsWith('I'));

//A função endswith verifica se termina com
console.log(js.endsWith('Script'));

//A função replace substitui a palavra
let texto = 'Água com gás';

console.log(texto.replace('gás', 'limão'));

//A função replace all substitui todas as ocorrências

let peidinho = 'pum-pum-pum-pum-bufa';

console.log(peidinho.replaceAll('pum', 'peidinho'));

//A função split transforma string em array

let nomes = 'Ana, João, Pedro';

let array = nomes.split(',');
console.log(array);

//A função substring pega parte de uma string
let nome = 'Matheus Ramos Lima';

console.log(nome.substring(0, 5));

//A função slice também pega parte
console.log(nome.slice(0,6));

//A função charAt obtém um caractere
console.log(nome.charAt(3));

//A função indexOf retorna a posição
console.log(nome.indexOf("t"));
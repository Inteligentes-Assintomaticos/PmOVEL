//Revisão para 1ª prova do 2º bimestre
//Arrays

let frutas = ['maça', 'banana', 'tomate'];
console.log("Mostrando a lista original: " +  frutas);

//A função push adiciona itens no final da lista
frutas.push('pepino');
console.log(frutas);

frutas.push('kiwi');
console.log(frutas);

//A função pop remove itens no final da lista
frutas.pop();
console.log(frutas);

frutas.pop();
console.log(frutas);

//A função shift remove o primeiro item da lista
frutas.shift();
console.log(frutas);

frutas.shift();
console.log(frutas);

//A função unshift adiciona itens no começo da lista
frutas.unshift('morango');
console.log(frutas);

frutas.unshift('melancia');
console.log(frutas);

//A função lenght mostra a quantidade de elementos em uma lista
console.log(frutas.length);

//A função includes retorna valor booleano caso um item esteja presente ou não em uma lista
console.log(frutas.includes('morango'));
console.log(frutas.includes('melancia'));
console.log(frutas.includes('banana'));

//A função indexOf retorna a posição do elemento se o elemento não existir ele retorna -1
console.log(frutas.indexOf('morango'));
console.log(frutas.indexOf('tomate'));

let pessoas = ['ana', 'maria', 'josefa', 'cícera'];

//A função splice remove, adiciona ou subistitui elementos
//removendo
pessoas.splice(2, 1);
console.log(pessoas);

//adicionando
pessoas.splice(2, 0, "Carlos");
console.log(pessoas);

//substituindo
pessoas.splice(1, 1, 'Juca');
console.log(pessoas);

//A função slice copia parte do array

let numeros = [1, 2, 3, 1, 6, 9];

let copia_dos_numeros = numeros.slice(1, 4);
console.log(copia_dos_numeros);

//A função concat junta arrays

let lista1 = [1,2,3,4,5];
let lista2 = ['a','b','c','d','e'];

let listaFinal = lista1.concat(lista2);
console.log(listaFinal);

//A função join transforma arrays em strings

let hello = ['Hello', 'world', '!'];
console.log(hello.join(" "));

//A função reverse inverte a lista
numeros = [4,3,3,5,9,8];
console.log(numeros.reverse());

//A função sort ordena os itens

let nums = [10, 5, 100, 20];

nums.sort();
console.log(nums);

nums.sort((a,b) => a - b);
console.log(nums);

let char = ['a', 'y', 'h', 'k'];
char.sort();
console.log(char);

//A função map cria um array novo modificando os elementos
let numero = [1, 6, 3, 5, 9];

let dobrados = numero.map(n => n*2);
console.log(dobrados);

//A função filter filtra elementos
numero = [4,6,3,5,8,2,1,0];

let pares = numero.filter(n => n % 2 === 0);
console.log(pares);

//A função find retorna o primeiro valor encontrado
nums = [40,2,3,5,25652,3533.63]

let valor = nums.find(n => n === 3533.63);
console.log(valor);

//A função some verifica se algum elemento atende à condição

nums = [1,2,3,5,6];
console.log(nums.some(n => n % 2 === 0));
